(this.webpackJsonpmoo=this.webpackJsonpmoo||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(7),o=n.n(s),i=(n(13),n(2)),h=n(3),l=n(5),b=n(4),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow pointer:hover: pointer bw2 shadow-5 tc",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(r,"?set=set3"),alt:"robot ".concat(r)}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"helvetica black fw4",children:t}),Object(c.jsx)("p",{className:"helvetica black",children:n})]})]})},d=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,t){return Object(c.jsx)(u,{id:e.id,name:e.name,email:e.email},t)}))})},j=(n(14),function(e){var t=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})}),f=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"900px",padding:"20px"},children:e.children})},m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Oops! Something went wrong..."}):this.props.children}}]),n}(r.Component),p=(n(15),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(c.jsx)(j,{searchChange:this.onSearchChange}),Object(c.jsxs)("h2",{className:"f2",children:[r.length," Friends Found..."]}),Object(c.jsx)(f,{children:Object(c.jsx)(m,{children:Object(c.jsx)(d,{robots:r})})})]}):Object(c.jsx)("h1",{className:"ma3",children:"Loading..."})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(16);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.aa6f3805.chunk.js.map