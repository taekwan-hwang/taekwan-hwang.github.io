(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c}),a.d(t,"query",function(){return m});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(153),d=a(157);function c(e){var t=e.data;return i.a.createElement(o.a,null,i.a.createElement(d.a,{data:t.allMarkdownRemark.edges}))}c.propTypes={data:l.a.string},c.defaultProps={data:""};var m="2559408957"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return s}),a.d(t,"StaticQuery",function(){return p});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(147),d=a.n(o);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(150),m=a.n(c);a.d(t,"PageRenderer",function(){return m.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var s=i.a.createContext({}),p=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(52),d=a(2),c=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Ethan's Tech Blog",authorName:"Ethan Hwang"}}}}},153:function(e,t,a){"use strict";var n=a(152),i=a(0),r=a.n(i),l=a(4),o=a.n(l),d=a(148),c=a(154),m=a(149),u=a(156),s=m.a.div.withConfig({displayName:"sidebar__SidebarDiv",componentId:"sc-1w6eym9-0"})(["@media (min-width:768px) and (max-width:1024px){width:20%;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){width:20%;}@media (min-width:320px) and (max-width:767px){width:10%;justify-content:flex-start;align-items:center;&::before{content:'';margin:10px;}}display:flex;flex-direction:column;width:30%;background-color:#193549;color:#dcdcdc;justify-content:center;align-items:center;"]),p=m.a.img.withConfig({displayName:"sidebar__Logo",componentId:"sc-1w6eym9-1"})(["@media (min-width:768px) and (max-width:1024px){width:80px;height:80px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){width:80px;height:80px;}@media (min-width:320px) and (max-width:767px){width:30px;height:30px;}border-radius:50%;overflow:hidden;width:152px;height:152px;"]),h=Object(m.a)(d.Link).withConfig({displayName:"sidebar__StyledLink",componentId:"sc-1w6eym9-2"})(["text-decoration:none;color:inherit;"]),g=m.a.a.withConfig({displayName:"sidebar__StyledHref",componentId:"sc-1w6eym9-3"})(["text-decoration:none;color:inherit;"]),f=m.a.div.withConfig({displayName:"sidebar__MenuWrapper",componentId:"sc-1w6eym9-4"})(["@media (min-width:320px) and (max-width:767px){flex-direction:column;div{margin:0;}span{display:none;}}display:flex;flex-direction:row;div{margin:10px;}"]),w=m.a.h1.withConfig({displayName:"sidebar__SiteTitle",componentId:"sc-1w6eym9-5"})(["display:flex;@media (min-width:768px) and (max-width:1024px){font-size:16px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){font-size:16px;}@media (min-width:320px) and (max-width:767px){display:none;}"]),x=m.a.h5.withConfig({displayName:"sidebar__NameBoard",componentId:"sc-1w6eym9-6"})(["display:flex;@media (min-width:768px) and (max-width:1024px){font-size:12px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){font-size:12px;}@media (min-width:320px) and (max-width:767px){display:none;}"]);function y(e){var t=e.title,a=e.authorName;return r.a.createElement(s,null,r.a.createElement(h,{to:"/"},r.a.createElement(w,null,t)),r.a.createElement(p,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPgogIDxwYXRoIGQ9Ik02MDAgMEMyNjguNiAwIDAgMjY4LjYgMCA2MDBzMjY4LjYgNjAwIDYwMCA2MDAgNjAwLTI2OC42IDYwMC02MDBTOTMxLjQgMCA2MDAgMHpNMjY2LjYgOTMzLjNDMTc2LjEgODQyLjggMTMxIDcyNC42IDEyOS42IDYwNkw1OTQgMTA3MC40Yy0xMTguNi0xLjQtMjM2LjgtNDYuNS0zMjcuNC0xMzcuMXptNDM3LjcgMTI2LjFMMTQwLjYgNDk1LjdjNDcuNS0yMTAuMSAyMzUtMzY3LjEgNDU5LjQtMzY3LjEgMTU2LjkgMCAyOTUuNSA3NyAzODEuMiAxOTQuOUw5MTUuNiAzNzlDODQ1LjggMjc5LjUgNzMwLjUgMjE0LjMgNjAwIDIxNC4zYy0xNjcuNyAwLTMxMC4zIDEwNy43LTM2My4zIDI1Ny41bDQ5MS42IDQ5MS42YzEyMy40LTQzLjcgMjE4LTE0OC4yIDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDBjMCAyMjQuNS0xNTcgNDExLjktMzY3LjEgNDU5LjR6IiBmaWxsPSIjNjM5Ii8+Cjwvc3ZnPgo=",alt:a}),r.a.createElement(x,null,a),r.a.createElement(f,null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(h,{to:"/"},r.a.createElement(u.c,null)," ",r.a.createElement("span",null,"Home"))),r.a.createElement("p",null,r.a.createElement(h,{to:"/about"},r.a.createElement(u.e,null)," ",r.a.createElement("span",null,"About"))),r.a.createElement("p",null,r.a.createElement(h,{to:"/tags"},r.a.createElement(u.b,null)," ",r.a.createElement("span",null,"Tags")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(g,{href:"https://www.linkedin.com/in/ethan-hwang-12147b163/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(u.d,null)," ",r.a.createElement("span",null,"Linkedin"))),r.a.createElement("p",null,r.a.createElement(g,{href:"https://github.com/taekwan-hwang",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,null)," ",r.a.createElement("span",null,"Github"))))))}y.propTypes={title:o.a.string,authorName:o.a.string},y.defaultProps={title:"",authorName:"Ethan"},a.d(t,"a",function(){return N});var E=m.a.div.withConfig({displayName:"layout__Container",componentId:"sc-7kpm2w-0"})(["display:flex;height:100vh;"]),M=m.a.div.withConfig({displayName:"layout__Content",componentId:"sc-7kpm2w-1"})(["display:flex;flex-direction:column;flex:1;overflow:scroll;padding:20px;color:#7e7e7e;"]),j="451039587";function N(e){var t=e.children;return r.a.createElement(d.StaticQuery,{query:j,render:function(e){var a=e.site.siteMetadata,n=a.title,i=a.siteDescription,l=a.authorName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("title",null,n)),r.a.createElement(E,null,r.a.createElement(y,{title:n,authorName:l}),r.a.createElement(M,null,t)))},data:n})}N.propTypes={children:o.a.string},N.defaultProps={children:""}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(148),d=a(149),c=Object(d.a)(o.Link).withConfig({displayName:"postTags__TagLink",componentId:"sc-5kkhe9-0"})(["font-size:14px;color:#ffbf00;text-decoration:none;"]);function m(e){var t=e.tags;return i.a.createElement(i.a.Fragment,null,t.map(function(e,a){var n=", ";return a+1===t.length&&(n=""),i.a.createElement("span",{key:e},i.a.createElement(c,{to:"tags/"+e},e),n)}))}m.propTypes={tags:l.a.arrayOf(l.a.string)},m.defaultProps={tags:[]}},157:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(148),d=a(149),c=a(159),m=a.n(c),u=a(160),s=a.n(u),p=new m.a(s.a),h=p.rhythm,g=a(155);a.d(t,"a",function(){return y});var f=d.a.h3.withConfig({displayName:"posts__PostTitle",componentId:"v3lnfb-0"})(["margin-bottom:",";"],h(.25)),w=d.a.span.withConfig({displayName:"posts__PostDate",componentId:"v3lnfb-1"})(["color:#8e8e8e;font-size:14px;"]),x=Object(d.a)(o.Link).withConfig({displayName:"posts__PostLink",componentId:"v3lnfb-2"})(["text-decoration:none;color:inherit;font-style:italic;"]);function y(e){var t=e.data;return i.a.createElement(i.a.Fragment,null,t.map(function(e){var t=e.node;return i.a.createElement("div",{key:t.id},i.a.createElement(w,null,t.frontmatter.date)," ",i.a.createElement(g.a,{tags:t.frontmatter.tags}),i.a.createElement(x,{to:t.fields.slug},i.a.createElement(f,null,t.frontmatter.title," ")),i.a.createElement("p",null,t.excerpt),i.a.createElement("hr",null))}))}y.propTypes={data:l.a.arrayOf(l.a.object)},y.defaultProps={data:[]}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-f3cf899ad5cd4cce1d2c.js.map