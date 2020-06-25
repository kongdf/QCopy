(function(e){function t(t){for(var n,r,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,r=1;r<s.length;r++){var i=s[r];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},r={app:0},o={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e5cf05f4"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={about:1};r[e]?t.push(r[e]):0!==r[e]&&s[e]&&t.push(r[e]=new Promise((function(t,s){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"3fc4eb29"}[e]+".css",o=c.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete r[e],f.parentNode.removeChild(f),s(a)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,s){n=o[e]=[t,s]}));t.push(n[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var s=o[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,s[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("8589"),r=s.n(n);r.a},"0bf3":function(e,t,s){"use strict";var n=s("a48e"),r=s.n(n);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("a133"),s("ed0d"),s("f09c"),s("e117");var n=s("0261"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],a=(s("034f"),s("9ca4")),i={},c=Object(a["a"])(i,r,o,!1,null,null,null),u=c.exports,l=(s("e18c"),s("3f11")),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"LoginBg"},[s("div",{staticClass:"LoginCon"},[e._m(0),s("p",{staticClass:"LoginTitle"},[e._v("登录到QuickCopy")]),s("p",{staticClass:"LoginUserName"},[e._v("用户名")]),s("p",{staticClass:"LoginUserNameInp"},[s("el-input",{attrs:{placeholder:"请输入用户名","prefix-icon":"el-icon-user"},model:{value:e.UserName,callback:function(t){e.UserName="string"===typeof t?t.trim():t},expression:"UserName"}})],1),s("p",{staticClass:"LoginUserPWD"},[e._v("密码 "),s("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("忘记密码")])]),s("p",{staticClass:"LoginUserNameInp"},[s("el-input",{attrs:{type:"password",placeholder:"请输入密码","prefix-icon":" el-icon-lock","show-password":""},model:{value:e.UserPWD,callback:function(t){e.UserPWD="string"===typeof t?t.trim():t},expression:"UserPWD"}})],1),s("el-button",{staticClass:"LoginBtn",attrs:{type:"primary"},on:{click:e.Login}},[e._v("登录")]),s("p",{staticClass:"Res"},[e._v("还没有账号吗？"),s("span",{staticClass:"Res cp",on:{click:function(t){e.ResVisible=!0}}},[e._v("注册")])]),e._m(1)],1),s("el-dialog",{attrs:{title:"注册",visible:e.ResVisible,"custom-class":"ResVisible",center:"",width:"400px"},on:{"update:visible":function(t){e.ResVisible=t}}},[s("div",[s("p",{staticClass:"LoginUserName"},[e._v("用户名 "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.CanRes&&e.ResPreson.UserName.length>4,expression:"CanRes&&ResPreson.UserName.length>4"}],staticClass:"zh"},[e._v("账号可用")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.CanRes,expression:"!CanRes"}],staticClass:"zh corred"},[e._v("账号不可用")])]),s("p",{staticClass:"LoginUserNameInp"},[s("el-input",{attrs:{placeholder:"请输入5-16位字母或者数字+字母","prefix-icon":"el-icon-user"},on:{input:e.IsUsername},model:{value:e.ResPreson.UserName,callback:function(t){e.$set(e.ResPreson,"UserName","string"===typeof t?t.trim():t)},expression:"ResPreson.UserName"}})],1),s("p",{staticClass:"LoginUserName"},[e._v("密码")]),s("p",{staticClass:"LoginUserNameInp"},[s("el-input",{attrs:{type:"password",placeholder:"请输入6到16位且不能输入中文","prefix-icon":" el-icon-lock"},model:{value:e.ResPreson.UserPWD,callback:function(t){e.$set(e.ResPreson,"UserPWD","string"===typeof t?t.trim():t)},expression:"ResPreson.UserPWD"}})],1),s("p",{staticClass:"LoginUserName"},[e._v("确认密码")]),s("p",{staticClass:"LoginUserNameInp"},[s("el-input",{attrs:{type:"password",placeholder:"请确认密码","prefix-icon":" el-icon-lock"},model:{value:e.ResPreson.UserPWD2,callback:function(t){e.$set(e.ResPreson,"UserPWD2","string"===typeof t?t.trim():t)},expression:"ResPreson.UserPWD2"}})],1)]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.ResVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.ResPresonBtn}},[e._v("注册")])],1)])],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"LogoBG"},[n("img",{staticClass:"logo",attrs:{src:s("7524"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticStyle:{"margin-top":"10px","text-align":"right"}},[s("a",{staticStyle:{color:"#44a0b3"},attrs:{target:"blank",href:"https://github.com/kongdf/quickCopy/releases"}},[e._v("下载win/mac端")])])}],d={data:function(){return{ResVisible:!1,UserName:"",UserPWD:"",ResPreson:{UserName:""},CanRes:!0}},methods:{Login:function(){var e=this;e.UserName.length<5?e.$message.error("请输入用户名"):e.UserPWD.length<5?e.$message.error("请输入密码"):fetch("http://quickcopy.kongdf.com:3000/users/userLogin",{method:"post",body:JSON.stringify({username:e.UserName,pwd:e.$md5(e.UserPWD)})}).then((function(e){return e.json()})).then((function(t){"000000"==t.StatusCode?(e.$message.success("登录成功"),e.$store.state.UserInfo=t.data[0],sessionStorage.setItem("UserInfo",JSON.stringify(t.data[0])),e.$router.push({name:"nav"})):"100002"==t.StatusCode&&e.$message.error("密码错误")}))},ResPresonBtn:function(){var e=this;this.ResPreson.UserName&&/^[a-zA-Z0-9_]{5,16}$/.test(this.ResPreson.UserName)?this.ResPreson.UserPWD?/^[0-9a-zA-Z]{6,16}$/.test(this.ResPreson.UserPWD)?this.ResPreson.UserPWD==this.ResPreson.UserPWD2?fetch("http://quickcopy.kongdf.com:3000/users/addUserData",{method:"post",body:JSON.stringify({username:e.ResPreson.UserName,pwd:e.$md5(e.ResPreson.UserPWD)})}).then((function(e){return e.json()})).then((function(t){"000000"==t.StatusCode&&(e.$message.success("注册成功"),e.ResPreson={UserName:""},e.ResVisible=!1)})):this.$message.error("两次密码不一致"):this.$message.warning({message:"密码只能6到16位且不能输入中文与特殊符号"}):this.$message.error("请输入密码"):this.$message.error("请输入合法的用户名")},IsUsername:function(){var e=this;this.ResPreson.UserName.length<5||fetch("http://quickcopy.kongdf.com:3000/users/isusername",{method:"post",body:JSON.stringify({username:e.ResPreson.UserName})}).then((function(e){return e.json()})).then((function(t){"000000"==t.StatusCode&&("1"==t.Status?e.CanRes=!1:e.CanRes=!0)}))}}},m=d,h=(s("0bf3"),s("f58e"),Object(a["a"])(m,p,f,!1,null,"4ad1fb64",null)),g=h.exports;n["default"].use(l["a"]);var v=[{path:"/",name:"login",component:g},{path:"/nav",name:"nav",component:function(){return s.e("about").then(s.bind(null,"c909"))}}],b=new l["a"]({routes:v}),y=b,U=s("ae8c");n["default"].use(U["a"]);var P={};sessionStorage.UserInfo&&(P=JSON.parse(sessionStorage.UserInfo));var C=new U["a"].Store({state:{UserInfo:P},mutations:{},actions:{},modules:{}}),R=s("b705"),N=s.n(R),w=(s("3880"),s("d940"),s("019a")),_=s.n(w),k=s("edac"),x=s.n(k),S=s("9306"),$=s.n(S);n["default"].use(N.a),n["default"].prototype.$md5=_.a,n["default"].use(x.a),n["default"].use($.a),n["default"].config.productionTip=!1,new n["default"]({router:y,store:C,render:function(e){return e(u)}}).$mount("#app")},7524:function(e,t,s){e.exports=s.p+"img/kodinger.ad86e7e3.jpg"},8589:function(e,t,s){},a48e:function(e,t,s){},a887:function(e,t,s){},d940:function(e,t,s){},f58e:function(e,t,s){"use strict";var n=s("a887"),r=s.n(n);r.a}});