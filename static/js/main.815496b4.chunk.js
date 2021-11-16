(this["webpackJsonpfinance-test-task"]=this["webpackJsonpfinance-test-task"]||[]).push([[0],{132:function(e,c,t){"use strict";t.r(c);var n=t(49),r=t(0),o=t(50),i=t.n(o),s={body:{margin:0,padding:0,fontSize:"16px"}},j={body:"Roboto, sans-serif",heading:"Roboto, sans-serif"},l={brand:{100:"#000",900:"#808080"}},d=t(21),b=Object(d.b)({styles:{global:s},fonts:j,colors:l}),x=t(69),a=t(82),h=Object(a.a)("http://localhost:4000/");h.on("connect",(function(){console.log("Successfully connected")})),h.on("connect_error",(function(){console.log("Connection error")})),h.on("disconnect",(function(){console.log("Disconnected")}));var p=t(4),O=Object(r.createContext)({}),u=function(){return Object(r.useContext)(O)},f=function(e){var c=e.children,t=Object(r.useState)([]),n=Object(x.a)(t,2),o=n[0],i=n[1],s=Object(r.useState)([]),j=Object(x.a)(s,2),l=j[0],d=j[1];return Object(r.useEffect)((function(){var e=setInterval((function(){h.emit("start"),h.on("ticker",(function(e){i(e)}))}),2e3);return function(){return clearInterval(e)}}),[o]),Object(p.jsx)(O.Provider,{value:{response:o,setResponse:i,unselected:l,setUnselected:d},children:c})},g=t(75),y=t(83),m=t(74),C=t(46),v=function(e){var c=Object(n.c)().toggleColorMode,t=Object(n.d)("dark","light"),r=Object(n.d)(C.c,C.d);return Object(p.jsx)(m.b,Object(y.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",border:"2px solid grey",onClick:c,icon:Object(p.jsx)(r,{}),"aria-label":"Switch to ".concat(t," mode")},e))},k=function(){var e=Object(n.d)("#d3d3d3","#292968");return Object(p.jsx)(g.b,{w:"100%",justify:"center",bgColor:e,py:"10px",flexShrink:0,border:"1px solid",borderColor:"grey",borderBottomRadius:"10px",children:Object(p.jsxs)(g.b,{w:"70%",justify:"space-between",py:"30px",children:[Object(p.jsx)(g.c,{colorScheme:"brand.100",children:"Finance app"}),Object(p.jsx)(v,{justifySelf:"flex-end"})]})})},w=function(){var e=Object(n.d)("#d3d3d3","#292968");return Object(p.jsx)(g.b,{w:"100%",justify:"center",bgColor:e,h:"120px",flexShrink:0,border:"1px solid",borderColor:"grey",borderTopRadius:"10px",children:Object(p.jsxs)(g.b,{w:"70%",direction:"column",align:"center",py:"30px",children:[Object(p.jsx)(g.c,{colorScheme:"brand.100",children:"Finance app"}),Object(p.jsx)(g.f,{colorScheme:"brand.100",children:"Copyright \xa9"})]})})},S=t(61),R=t(76),W=t(55),z=function(){var e=u(),c=e.response,t=e.unselected,o=e.setUnselected,i=Object(n.d)("#fff","#333546"),s=Object(r.useMemo)((function(){return c.filter((function(e){return!t.includes(e.ticker)}))}),[c,t]);return Object(p.jsx)(g.a,{border:"1px solid grey",borderRadius:"10px",children:Object(p.jsxs)(R.a,{variant:"simple",size:"lg",bgColor:i,borderRadius:"10px",position:"relative",children:[Object(p.jsx)(R.e,{children:Object(p.jsxs)(R.f,{children:[Object(p.jsx)(R.d,{children:"Name"}),Object(p.jsx)(R.d,{children:"Exchange"}),Object(p.jsx)(R.d,{children:"Current price"}),Object(p.jsx)(R.d,{children:"Change ($)"}),Object(p.jsx)(R.d,{children:"Change (%)"})]})}),Object(p.jsx)(R.b,{children:s.length>0?s.map((function(e,c){return Object(p.jsxs)(R.f,{textAlign:"center",children:[Object(p.jsx)(R.c,{py:"10px",fontWeight:"bold",children:e.ticker}),Object(p.jsx)(R.c,{py:"10px",fontWeight:"bold",children:e.exchange}),Object(p.jsx)(R.c,{py:"10px",textAlign:"center",fontWeight:"bold",children:e.price+" $"}),Object(p.jsx)(R.c,{py:"10px",textAlign:"center",fontWeight:"bold",children:e.change}),Object(p.jsx)(R.c,{py:"10px",children:parseFloat(e.change_percent)>0?Object(p.jsxs)(g.b,{w:"80px",bgColor:"#84f4a4",justify:"center",align:"center",py:"3px",gridGap:"5px",borderRadius:"5px",color:"#397a59",fontWeight:"bold",children:[Object(p.jsx)(C.b,{color:"green"}),e.change_percent+"%"]}):Object(p.jsxs)(g.b,{w:"80px",bgColor:"#f29087",justify:"center",align:"center",py:"3px",gridGap:"5px",borderRadius:"5px",color:"#872d25",fontWeight:"bold",children:[Object(p.jsx)(C.a,{color:"red"}),e.change_percent+"%"]})}),Object(p.jsx)(R.c,{borderBottom:"none",py:"10px",children:Object(p.jsx)(m.a,{onClick:function(){o([].concat(Object(S.a)(t),[e.ticker]))},children:"x"})})]},c)})):Object(p.jsx)(g.a,{mt:"60px",position:"absolute",width:"100%",display:"flex",justifyContent:"center",children:Object(p.jsx)(W.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"})})})]})})},F=t(15),G=t(77),_=function(){var e=u().unselected,c=Object(F.b)(),t=c.isOpen,n=c.onOpen,r=c.onClose;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m.a,{onClick:n,disabled:!e.length,children:"View removed"}),Object(p.jsxs)(G.a,{isOpen:t,onClose:r,children:[Object(p.jsx)(G.g,{}),Object(p.jsxs)(G.d,{children:[Object(p.jsx)(G.f,{children:"Removed from the watchlist"}),Object(p.jsx)(G.c,{}),Object(p.jsx)(G.b,{children:e.length>0?Object(p.jsx)(g.d,{spacing:"10px",children:e.map((function(c,t){return Object(p.jsx)(g.e,{children:Object(p.jsxs)(g.b,{justify:"space-between",children:[c,Object(p.jsx)(m.a,{onClick:function(){return Object(S.a)(e.splice(t,1))},children:"+"})]})},t)}))}):Object(p.jsx)(g.f,{children:"No unwatched tickers"})}),Object(p.jsx)(G.e,{children:Object(p.jsx)(m.a,{colorScheme:"blue",onClick:r,children:"Close"})})]})]})]})},A=function(){return Object(p.jsx)(d.a,{theme:b,children:Object(p.jsx)(f,{children:Object(p.jsxs)(g.b,{minH:"100vh",direction:"column",children:[Object(p.jsx)(k,{}),Object(p.jsxs)(g.b,{direction:"column",flexGrow:1,justify:"center",align:"center",py:"50px",gridGap:"10px",children:[Object(p.jsx)(_,{}),Object(p.jsx)(z,{})]}),Object(p.jsx)(w,{})]})})})};i.a.render(Object(p.jsxs)(r.StrictMode,{children:[Object(p.jsx)(n.b,{}),Object(p.jsx)(A,{})]}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.815496b4.chunk.js.map