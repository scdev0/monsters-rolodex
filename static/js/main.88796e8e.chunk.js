(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(0)),d=function(e){var t=e.monster;return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)("p",{children:t.email})]})},j=(n(15),function(e){var t=e.monsters;return Object(l.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}),m=function(e){var t=e.handleChange,n=e.placeholder;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})},f=(n(16),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this)).handleChange=function(e){r.setState({searchString:e.target.value})},r.state={monsters:[],searchString:""},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchString,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(m,{handleChange:this.handleChange,placeholder:"search monsters"}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(s.a.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.88796e8e.chunk.js.map