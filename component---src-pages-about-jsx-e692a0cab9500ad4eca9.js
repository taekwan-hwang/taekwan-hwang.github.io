(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(262),l=a.n(r),d=a(350),o=a.n(d),c=a(160);t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(l.a,{file:o.a}))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return s});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),d=a(147),o=a.n(d);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return d.withPrefix}),a.d(t,"navigate",function(){return d.navigate}),a.d(t,"push",function(){return d.push}),a.d(t,"replace",function(){return d.replace}),a.d(t,"navigateTo",function(){return d.navigateTo});var c=a(151),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var p=i.a.createContext({}),s=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},151:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),d=a(52),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(d.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Ethan's Tech Blog",authorName:"Ethan Hwang"}}}}},160:function(e,t,a){"use strict";var n=a(156),i=a(0),r=a.n(i),l=a(4),d=a.n(l),o=a(148),c=a(170),u=a(149),m=a(178),p=u.a.div.withConfig({displayName:"sidebar__SidebarDiv",componentId:"sc-1w6eym9-0"})(["@media (min-width:768px) and (max-width:1024px){width:20%;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){width:20%;}@media (min-width:320px) and (max-width:767px){width:10%;justify-content:flex-start;align-items:center;&::before{content:'';margin:10px;}}display:flex;flex-direction:column;width:30%;background-color:#193549;color:#dcdcdc;justify-content:center;align-items:center;"]),s=u.a.img.withConfig({displayName:"sidebar__Logo",componentId:"sc-1w6eym9-1"})(["@media (min-width:768px) and (max-width:1024px){width:80px;height:80px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){width:80px;height:80px;}@media (min-width:320px) and (max-width:767px){width:30px;height:30px;}border-radius:50%;overflow:hidden;width:152px;height:152px;"]),h=Object(u.a)(o.Link).withConfig({displayName:"sidebar__StyledLink",componentId:"sc-1w6eym9-2"})(["text-decoration:none;color:inherit;"]),w=u.a.a.withConfig({displayName:"sidebar__StyledHref",componentId:"sc-1w6eym9-3"})(["text-decoration:none;color:inherit;"]),x=u.a.div.withConfig({displayName:"sidebar__MenuWrapper",componentId:"sc-1w6eym9-4"})(["@media (min-width:320px) and (max-width:767px){flex-direction:column;div{margin:0;}span{display:none;}}display:flex;flex-direction:row;div{margin:10px;}"]),g=u.a.h1.withConfig({displayName:"sidebar__SiteTitle",componentId:"sc-1w6eym9-5"})(["display:flex;@media (min-width:768px) and (max-width:1024px){font-size:16px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){font-size:16px;}@media (min-width:320px) and (max-width:767px){display:none;}"]),f=u.a.h5.withConfig({displayName:"sidebar__NameBoard",componentId:"sc-1w6eym9-6"})(["display:flex;@media (min-width:768px) and (max-width:1024px){font-size:12px;}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){font-size:12px;}@media (min-width:320px) and (max-width:767px){display:none;}"]);function y(e){var t=e.title,a=e.authorName;return r.a.createElement(p,null,r.a.createElement(h,{to:"/"},r.a.createElement(g,null,t)),r.a.createElement(s,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPgogIDxwYXRoIGQ9Ik02MDAgMEMyNjguNiAwIDAgMjY4LjYgMCA2MDBzMjY4LjYgNjAwIDYwMCA2MDAgNjAwLTI2OC42IDYwMC02MDBTOTMxLjQgMCA2MDAgMHpNMjY2LjYgOTMzLjNDMTc2LjEgODQyLjggMTMxIDcyNC42IDEyOS42IDYwNkw1OTQgMTA3MC40Yy0xMTguNi0xLjQtMjM2LjgtNDYuNS0zMjcuNC0xMzcuMXptNDM3LjcgMTI2LjFMMTQwLjYgNDk1LjdjNDcuNS0yMTAuMSAyMzUtMzY3LjEgNDU5LjQtMzY3LjEgMTU2LjkgMCAyOTUuNSA3NyAzODEuMiAxOTQuOUw5MTUuNiAzNzlDODQ1LjggMjc5LjUgNzMwLjUgMjE0LjMgNjAwIDIxNC4zYy0xNjcuNyAwLTMxMC4zIDEwNy43LTM2My4zIDI1Ny41bDQ5MS42IDQ5MS42YzEyMy40LTQzLjcgMjE4LTE0OC4yIDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDBjMCAyMjQuNS0xNTcgNDExLjktMzY3LjEgNDU5LjR6IiBmaWxsPSIjNjM5Ii8+Cjwvc3ZnPgo=",alt:a}),r.a.createElement(f,null,a),r.a.createElement(x,null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(h,{to:"/"},r.a.createElement(m.c,null)," ",r.a.createElement("span",null,"Home"))),r.a.createElement("p",null,r.a.createElement(h,{to:"/about"},r.a.createElement(m.e,null)," ",r.a.createElement("span",null,"About"))),r.a.createElement("p",null,r.a.createElement(h,{to:"/tags"},r.a.createElement(m.b,null)," ",r.a.createElement("span",null,"Tags")))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(w,{href:"https://www.linkedin.com/in/ethan-hwang-12147b163/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(m.d,null)," ",r.a.createElement("span",null,"Linkedin"))),r.a.createElement("p",null,r.a.createElement(w,{href:"https://github.com/taekwan-hwang",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(m.a,null)," ",r.a.createElement("span",null,"Github"))))))}y.propTypes={title:d.a.string,authorName:d.a.string},y.defaultProps={title:"",authorName:"Ethan"},a.d(t,"a",function(){return N});var M=u.a.div.withConfig({displayName:"layout__Container",componentId:"sc-7kpm2w-0"})(["display:flex;height:100vh;"]),E=u.a.div.withConfig({displayName:"layout__Content",componentId:"sc-7kpm2w-1"})(["display:flex;flex-direction:column;flex:1;overflow:scroll;padding:20px;color:#7e7e7e;"]),j="451039587";function N(e){var t=e.children;return r.a.createElement(o.StaticQuery,{query:j,render:function(e){var a=e.site.siteMetadata,n=a.title,i=a.siteDescription,l=a.authorName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("title",null,n)),r.a.createElement(M,null,r.a.createElement(y,{title:n,authorName:l}),r.a.createElement(E,null,t)))},data:n})}N.propTypes={children:d.a.string},N.defaultProps={children:""}},328:function(e,t){},330:function(e,t){},350:function(e,t,a){e.exports=a.p+"static/resume-69918f19e82b293341e9af508a08579c.pdf"}}]);
//# sourceMappingURL=component---src-pages-about-jsx-e692a0cab9500ad4eca9.js.map