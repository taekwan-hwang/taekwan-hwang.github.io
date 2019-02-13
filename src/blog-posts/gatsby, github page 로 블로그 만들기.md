---
title: 'Gatsby, Github pages 로 블로그 제작 삽질기'
date: '2019-02-13'
tags: ['React', 'Gatsby']
---
# Gatsby, Github pages로 블로그 만들기

블로그를 해야지 해야지 하다가 이제서야 마음먹고 블로그를 만들었다. 만든 김에 블로그 제작 삽질기를 포스팅을 해보려고 한다.

우선 기술 스택은 React 기반의 [Gatsby](https://www.gatsbyjs.org/), 호스팅은 [Github pages](https://pages.github.com/)로 하기로 했다. 고민하는 데에는 오래 걸리지 않았는데, 개츠비를 선택한 이유는 웹알못인 내가 그나마 리액트가 익숙하고, 요새 힙해보이기 때문이다.

Gatsby는 React를 기반으로 한 정적 사이트 생성기다. Ruby 기반의 [Jekyll](https://jekyllrb.com), Go 기반의 [Hugo](https://gohugo.io/)나 Node.js 기반의 [Hexo](https://hexo.io/ko) 같은 것들이 있다. 정적 사이트 생성기의 패왕이라는 Jekyll 만큼 커뮤니티가 크지는 않지만, 꽤나 많은 이용자의 커뮤니티가 형성되어 있고 [도큐먼트](https://www.gatsbyjs.org/docs/)가 잘 되어있어 사용하기도 편했다.

## 개발 환경

```shell
os: macOS Mojave 10.14.3
Node.js: v8.15.0
npm: 6.4.1
editor: VSCode 1.30.2
```

위 환경에서 작업했다. Windows 나 Linux 의 경우는 [여기](https://www.gatsbyjs.org/docs/preparing-your-environment/) 에 개츠비 사용 방법에 대해서 잘 나와 있으니 참고하면 될 거 같다.

## 삽질기

개츠비를 설치하기 위해서는 gatsby-cli 가 필요하다. 설치는 npm을 이용하면 간단하게 할 수 있다.

```shell
npm i -g gatsby-cli
```

개츠비 cli를 설치했으면, 프로젝트를 생성해주어야 한다. 기본 스타터를 이용해서 프로젝트를 생성할 수도 있지만, 남이 만들어 둔 템플릿을 이용해 만드는 게 손이 덜간다. [starter library](https://www.gatsbyjs.org/starters/) 에 들어가 마음에 드는 스타터를 보고 스타터의 깃허브 주소를 복사해 두자.필자는 [gatsby-starter-tech-blog](https://www.gatsbyjs.org/starters/email2vimalraj/gatsby-starter-tech-blog/) 가 마음에 들어 [gatsby-starter-tech-blog github](https://github.com/email2vimalraj/gatsby-starter-tech-blog) 를 복사했다.

그리고 프로젝트를 생성하면 된다. 프로젝트 생성 또한 간단하다.

```shell
gatsby new {directory-name} {copied-github-url}
```

github url을 입력하지 않는 경우 기본 스타터로 프로젝트가 생성된다.

프로젝트가 생성되었고, 코드를 한 번 싹 열어보았다. 중구난방인 코드가 마음에 들지 않아서, 린트를 돌려보기로 했다. 필자는 eslint를 좋아하며, airbnb 플러그인을 사용한다.

```shell
cd {directory-name}
eslint --init
How would you like to configure ESLint?
Use a popular style guide <
Answer questions about your style
Inspect your JavaScript file(s)

Which style guid do you want to follow?
Airbnb (https://github.com/airbnb/javascript) <
Standard (https://github.com/standard/standard)
Google (https://github.com/google/eslint-config-google)

Do you use React? (y/N) y

What format do you want your config file to be in?
JavaScript <
YAML
JSON
```

eslint 설정을 하고 나니, vscode 내에서 빨간 줄이 어마어마하게 보인다. 수정하는 과정에서 리액트 컴포넌트의 props를 validation 하는 패키지를 설치하였다.

```shell
npm i prop-types
```

설치 후, 코드를 스캔해가며 적절하게 수정해 주었다. [결과](https://github.com/taekwan-hwang/taekwan-hwang.github.io/commit/4de8c9a8b198382141382c00ddbfc87ac1582e2d)

이제 로컬에서 실행해봐야 한다. 프로젝트 루트 디렉토리의 package.json 파일을 보면 script가 정의되어있는데, develop, serve 등을 사용하면 된다. 필자는 develop 스크립트를 dev로 바꿔주었다. [gatsby-cli](https://www.gatsbyjs.org/packages/gatsby-cli/) 를 보면, 각 명령어에 대한 설명이 있다.

```shell
npm run dev
```

정상적으로 원하는 페이지가 나온다면, 이제 깃허브 페이지에 배포해야한다. github에 {본인 유저 이름}.github.io 라는 이름으로 레포지토리를 만들고, package.json 파일에 다음과 같이 추가한다.

```json
{
  ...
  "repository": {
    "type": "git",
    "url": "git+https://github.com/{username}/username.github.io.git"
  },
  ...
  "scripts": {
    ...
    "deploy": "npm run build && gh-pages -b master -d public"
    ...
  }
  ...
}
```

당연히 gh-pages 라는 패키지도 설치해 주어야 한다.

```shell
npm i --save-dev gh-pages
```

이제 deploy 스크립트를 실행해보자.

```shell
npm run deploy
```
본인 [github.io](https://{username}.github.io) 로 들어가서 원하는 페이지가 나온다면 성공이다.

프로젝트 명이 github.io가 아니라면, prefix 설정도 해주어야 한다. 이 또한 [도큐먼트](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)에 있으니 참고하면 좋다.