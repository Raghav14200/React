(this.webpackJsonpmpnster=this.webpackJsonpmpnster||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=(n(12),n(2)),o=n(3),h=n(5),u=n(4),j=(n(13),n(14),n(0)),d=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(this.props.data.id)}),Object(j.jsx)("h2",{children:this.props.data.name}),Object(j.jsx)("p",{children:this.props.data.email})]})}}]),n}(r.Component),p=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(i.a)(this,n),(t=e.call(this)).updatesearch=function(e){t.setState({search:e.target.value})},t.state={monster:[],search:""},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){t.setState({monster:e})}))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{class:"align",children:[Object(j.jsx)("h1",{children:"Monter Hunter"}),Object(j.jsx)("input",{type:"search",placeholder:"Search",onChange:this.updatesearch}),Object(j.jsx)("div",{className:"grid",children:this.state.monster.filter((function(e){return e.name.toLowerCase().includes(t.state.search.toLowerCase())})).map((function(t){return Object(j.jsx)(d,{data:t})}))})]})}}]),n}(r.Component);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bc12b04a.chunk.js.map