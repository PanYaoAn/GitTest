(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},s=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8cb9440f"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(e);var l=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",l.name="ChunkLoadError",l.type=a,l.request=s,n[1](l)}o[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/GitTest/dist/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08be":function(e,t,n){},"3c6c":function(e,t,n){e.exports=n.p+"img/like.a31b2318.png"},"4cfb":function(e,t,n){"use strict";var a=n("fd55"),o=n.n(a);o.a},"545e":function(e,t,n){e.exports=n.p+"img/my1.20e3d0fa.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("9a83");var a=n("f564"),o=(n("e7e5"),n("d399")),s=(n("a909"),n("3acc")),r=(n("3c32"),n("417e")),i=(n("a44c"),n("e27c")),c=(n("4ddd"),n("9f14")),l=(n("38d5"),n("772a")),u=(n("be7f"),n("565f")),d=(n("0653"),n("34e9")),p=(n("c194"),n("7744")),f=(n("8a58"),n("e41f")),h=(n("c3a6"),n("ad06")),v=(n("5852"),n("d961")),m=(n("4056"),n("44bf")),b=(n("a52c"),n("2ed4")),g=(n("537a"),n("ac28")),w=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},y=[],k=(n("7faf"),n("2877")),x={},$=Object(k["a"])(x,_,y,!1,null,null,null),C=$.exports,j=(n("d3b7"),n("8c4f")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"tabbar",class:e.currIndex==e.active?e.active:"",attrs:{fixed:!0,border:!1,"active-color":"#ca8888","inactive-color":"#6b2121"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabbar,(function(t,a){return n("van-tabbar-item",{key:a,attrs:{to:t.name},on:{click:function(n){return e.change(a,t.name)}},scopedSlots:e._u([{key:"icon",fn:function(e){return[n("img",{attrs:{src:e.active?t.active:t.normal}})]}}],null,!0)},[n("span",[e._v(e._s(t.title))])])})),1),n("div",{staticClass:"Top"},[n("div",{staticClass:"user"},[n("van-cell",{on:{click:e.showPopup}},[n("van-image",{staticClass:"user_img",attrs:{round:"",src:""}})],1)],1),n("div",{staticClass:"search"},[n("van-search",{staticClass:"search_t",attrs:{shape:"round",placeholder:e.placeholder},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("div",{staticClass:"icon"},[n("div",[n("van-icon",{attrs:{name:"qr"}})],1),n("div",[n("van-icon",{attrs:{name:"chat-o",dot:""}})],1)])]),n("router-view")],1)},S=[],E={name:"Tabbar",data:function(){return{isShow:!0,domHeight:document.documentElement.clientHeight,showHeight:document.documentElement.clientHeight,transitionName:"slide-right",value:"",placeholder:"",active:0,currIndex:0,show:!0,tabbar:[{name:"/Tabbar/index",title:"首页",normal:n("57a8"),active:n("69f9"),placeholder:"孙亚龙"},{name:"/Tabbar/fenlei",title:"分类",normal:n("7e4d"),active:n("645b"),placeholder:"笑笑"},{name:"/Tabbar/like",title:"关注",normal:n("3c6c"),active:n("e116"),placeholder:"孙亚"},{name:"/Tabbar/mine",title:"我的",normal:n("7601"),active:n("545e"),placeholder:"西卡"}]}},methods:{change:function(e,t){this.placeholder=this.tabbar[e].placeholder,console.log(e),console.log(t),this.$router.push(t)},plc:function(){this.placeholder=this.tabbar[0].placeholder},showPopup:function(){this.$router.push({path:"/login"})}},watch:{showHeight:function(){this.domHeight>this.showHeight?this.isShow=!1:this.isShow=!0}},created:function(){this.plc()},beforeMount:function(){},mounted:function(){var e=this;window.onresize=function(){return function(){e.showHeight=document.documentElement.clientHeight||document.body.clientHeight}()}},beforeUpdate:function(){},updated:function(){}},P=E,T=(n("c669"),Object(k["a"])(P,O,S,!1,null,"4dfa1a60",null)),H=T.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},q=[],z={name:"index",data:function(){return{data:{show:!1}}},methods:{showPopup:function(){this.show=!0},onClose:function(){this.show=!1}}},A=z,F=Object(k["a"])(A,M,q,!1,null,"864903fa",null),I=F.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("2222")])},L=[],N={name:"fenlei",data:function(){return{}},mounted:function(){}},G=N,U=(n("9dc1"),Object(k["a"])(G,J,L,!1,null,"40c71e34",null)),B=U.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 3333 ")])},K=[],Q={data:function(){return{}}},R=Q,V=Object(k["a"])(R,D,K,!1,null,"aabe435c",null),W=V.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("4444")])},Y=[],Z={data:function(){return{}}},ee=Z,te=Object(k["a"])(ee,X,Y,!1,null,"29c32d60",null),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"content"},[n("div",{staticClass:"close",on:{click:e.back}},[n("van-icon",{attrs:{name:"cross"}})],1),n("div",{staticClass:"pop_cont_t"},[n("main",{staticClass:"cont_t"},[n("div",{staticClass:"log_cont"},[0==this.$store.state.count?n("div",{staticClass:"user_mess"},[n("van-image",{staticClass:"user_pic",attrs:{width:"50",height:"50",src:"",round:""}}),n("div",{staticClass:"user_naem"},[n("span",[e._v(e._s(e.user.user_name))])])],1):e._e(),n("div",{staticClass:"log"},[n("h4",[e._v("欢迎来来到企鹅视频")]),n("van-cell",{staticClass:"but",on:{click:e.showPopup}},[n("van-button",{attrs:{type:"primary",size:"small"}},[n("span",[e._v("登录/注册")])])],1)],1)]),e._m(0)])])]),n("van-popup",{style:{height:"50%"},attrs:{position:"bottom",round:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{staticClass:"login hide",class:[e.active?"active":"hide"]},[n("h4",[e._v("欢迎来到企鹅视频^v^ 请先登录哦~")]),n("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),n("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),n("van-field",{attrs:{name:"radio",label:"单选框"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("协议书")])]},proxy:!0}])}),n("div",{staticClass:"button"},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:function(t){return e.onSubmit(e.user.username,e.user.password,e.checked)}}},[e._v("登录")]),n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:function(t){return e.registered()}}},[e._v("注册")])],1)],1),n("div",{staticClass:"res active",class:[(e.active,"active")]},[n("h4",[e._v("欢迎来到企鹅视频^v^ 欢迎注册~")]),n("div",{staticClass:"registered"},[n("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},on:{blur:e.check},model:{value:e.res.username,callback:function(t){e.$set(e.res,"username",t)},expression:"res.username"}}),n("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.res.password,callback:function(t){e.$set(e.res,"password",t)},expression:"res.password"}}),n("van-field",{attrs:{type:"phone",name:"手机",label:"手机",placeholder:"手机",rules:[{required:!0,message:"请填写手机"}]},model:{value:e.res.phone,callback:function(t){e.$set(e.res,"phone",t)},expression:"res.phone"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:e.submit}},[e._v("提交")])],1)],1),n("div",{staticClass:"return"},[n("span",[e._v("已经有账号?")]),n("span",{staticStyle:{color:"#409EFF"},on:{click:function(t){return e.registered()}}},[e._v("返回登录")])])])])],1)},oe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("会员中心")]),n("span",[e._v("日期")])])}],se=n("bc3a"),re=n.n(se),ie={data:function(){return{checked:!0,show:!0,active:!0,user:{username:"",password:"",userid:""},res:{username:"",password:"",phone:""}}},methods:{back:function(){this.$router.push("/")},showPopup:function(){console.log(11111),this.show=!0},onSubmit:function(e,t,n){this.user.username=e,this.user.password=t,console.log(this.user.username),console.log(this.user.password),console.log(n),""==this.user.username||""==this.user.password?(this.$toast.allowMultiple(),this.$toast("你还没输入账号或者密码呢")):this.user.username.length>3?(console.log("太长了"),this.$toast.allowMultiple(),this.$toast("太长了")):0==n?(this.$toast.allowMultiple(),this.$toast("先要同意协议才能登陆嗷")):console.log("成功登陆")},registered:function(){this.active?this.active=!1:this.active=!0},submit:function(){var e=this,t=this.res.username;console.log(t),re.a.get("http://192.168.1.167:8081/login",{params:{name:t}}).then((function(t){console.log(t);var n=t.data;if(n.length>=1)e.$toast.allowMultiple(),e.$toast("用户名已被注册,请更换一个");else{console.log(e.res.username),console.log(e.res.password),console.log(e.res.phone);var a=e.res;console.log(a),re.a.post("http://192.168.1.167:8081/login",a).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}})).catch((function(e){console.log(e)}))},check:function(){console.log(1111)}},mounted:function(){}},ce=ie,le=(n("4cfb"),Object(k["a"])(ce,ae,oe,!1,null,"27312b25",null)),ue=le.exports;w["default"].use(j["a"]);var de=j["a"].prototype.push;j["a"].prototype.push=function(e){return de.call(this,e).catch((function(e){return e}))};var pe=[{path:"/",redirect:"/Tabbar/index",meta:{title:"首页"}},{path:"/Tabbar",component:H,children:[{path:"index",component:I,meta:{title:"首页"}},{path:"fenlei",component:B},{path:"like",component:W},{path:"mine",component:ne}]},{path:"/login",component:ue},{path:"/index",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],fe=new j["a"]({routes:pe}),he=fe,ve=n("2f62");w["default"].use(ve["a"]);var me=new ve["a"].Store({state:{count:1},mutations:{},actions:{},modules:{}}),be=n("ef72"),ge=n.n(be);n("0147");w["default"].prototype.$http=re.a,w["default"].use(g["a"]),w["default"].use(b["a"]),w["default"].use(m["a"]),w["default"].use(v["a"]),w["default"].use(h["a"]),w["default"].use(f["a"]),w["default"].use(p["a"]),w["default"].use(d["a"]),w["default"].use(u["a"]),w["default"].use(l["a"]),w["default"].use(ge.a),w["default"].use(c["a"]),w["default"].use(i["a"]),w["default"].use(r["a"]),w["default"].use(s["a"]),w["default"].use(o["a"]),w["default"].config.productionTip=!1,w["default"].use(a["a"]),he.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()})),new w["default"]({router:he,store:me,render:function(e){return e(C)}}).$mount("#app")},"57a8":function(e,t,n){e.exports=n.p+"img/home.c06722fc.png"},"645b":function(e,t,n){e.exports=n.p+"img/fenlei1.c8352fe2.png"},"69f9":function(e,t,n){e.exports=n.p+"img/home1.76d4e713.png"},7601:function(e,t,n){e.exports=n.p+"img/my.80832946.png"},"7e4d":function(e,t,n){e.exports=n.p+"img/fenlei.5e3c3e8c.png"},"7faf":function(e,t,n){"use strict";var a=n("b8ff"),o=n.n(a);o.a},"9dc1":function(e,t,n){"use strict";var a=n("08be"),o=n.n(a);o.a},b8ff:function(e,t,n){},c669:function(e,t,n){"use strict";var a=n("df3e"),o=n.n(a);o.a},df3e:function(e,t,n){},e116:function(e,t,n){e.exports=n.p+"img/like1.26ceb7cb.png"},fd55:function(e,t,n){}});
//# sourceMappingURL=app.997116f8.js.map