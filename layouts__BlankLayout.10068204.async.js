(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Hl79:function(I,u,e){"use strict";e.r(u);var d=e("q1tI"),m=e.n(d),s=e("VcS8"),l=e("nKUr"),M=e.n(l),o=m.a.Fragment,E=function(p){var c=p.children;return Object(l.jsx)(o,{children:Object(l.jsx)(s.b,{children:c})})};u.default=E},VcS8:function(I,u,e){"use strict";e.d(u,"a",function(){return v});var d=e("9og8"),m=e("WmNS"),s=e.n(m),l=e("q1tI"),M=e.n(l),o=e("VX74"),E=e("1Apw"),f=e("7rtm"),p=e.n(f),c=e("nKUr"),K=e.n(c),h="realm_app-jmbwa",L="https://realm.mongodb.com/api/client/v2.0/app/".concat(h,"/graphql"),i=new E.a(h),g;function T(){return O.apply(this,arguments)}function O(){return O=Object(d.a)(s.a.mark(function t(){var n;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("app",i.currentUser.id),i.currentUser){r.next=6;break}return r.next=4,i.logIn(E.b.anonymous());case 4:r.next=8;break;case 6:return r.next=8,i.currentUser.refreshCustomData();case 8:return n=i.currentUser.accessToken,r.abrupt("return",n);case 10:case"end":return r.stop()}},t)})),O.apply(this,arguments)}var U=new o.ApolloClient({link:new o.HttpLink({uri:L,fetch:function(t){function n(_,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=Object(d.a)(s.a.mark(function n(_,r){var D,P;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!((D=g)!==null&&D!==void 0)){a.next=4;break}a.t0=D,a.next=7;break;case 4:return a.next=6,T();case 6:a.t0=a.sent;case 7:return P=a.t0,g=P,r.headers.Authorization="Bearer ".concat(P),a.abrupt("return",fetch(_,r));case 11:case"end":return a.stop()}},n)}));return function(n,_){return t.apply(this,arguments)}}())}),cache:new o.InMemoryCache}),A=new p.a({region:"oss-cn-guangzhou",accessKeyId:"LTAI5t78ueAFBJhkLHMhCWjo",accessKeySecret:"SuIrtcBMDurdiuFdE6FJaYwXBI2KJj",bucket:"pms-api"}),v=M.a.createContext(A);v.displayName="OSSContext",console.log("RootLayout refresh!");var C=function(n){var _=n.children;return console.log("RootLayout rerender!"),Object(c.jsx)(o.ApolloProvider,{client:U,children:Object(c.jsx)(v.Provider,{value:A,children:_})})};u.b=C}}]);
