(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),n=c(4),a=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),u=(c(13),c(6)),p=c.n(u),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=c(0),h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:""},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,c=t?"".concat(t," "," "," is selected"):"No goods selected";return Object(b.jsxs)("main",{className:"App",children:[Object(b.jsxs)("header",{className:"App__header",children:[Object(b.jsx)("h1",{className:"App__title",children:c}),this.state.selectedGood&&Object(b.jsx)("button",{type:"button",className:"App__clear",onClick:function(){e.setState({selectedGood:""})},children:"Clear"})]}),Object(b.jsx)("ul",{children:j.map((function(t){return Object(b.jsxs)("li",{className:p()({"Good--active":e.state.selectedGood===t}),children:[t,e.state.selectedGood!==t?Object(b.jsx)("button",{type:"button",className:"Good__select",onClick:function(){e.setState({selectedGood:t})},children:"Select"}):Object(b.jsx)("button",{type:"button",className:"Good__remove",onClick:function(){e.setState({selectedGood:""})},children:"Remove"})]},t)}))})]})}}]),c}(i.a.Component);o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.00af6bf4.chunk.js.map