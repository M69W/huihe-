webpackJsonp([234],{"//Fk":function(t,e,n){t.exports={default:n("U5ju"),__esModule:!0}},"2KxR":function(t,e){t.exports=function(t,e,n,a){if(!(t instanceof e)||void 0!==a&&a in t)throw TypeError(n+": incorrect invocation!");return t}},8:function(t,e,n){t.exports=n(0)(175)},"82Mu":function(t,e,n){var s=n("7KvD"),c=n("L42u").set,d=s.MutationObserver||s.WebKitMutationObserver,u=s.process,f=s.Promise,l="process"==n("R9M2")(u);t.exports=function(){var n,a,r,t=function(){var t,e;for(l&&(t=u.domain)&&t.exit();n;){e=n.fn,n=n.next;try{e()}catch(t){throw n?r():a=void 0,t}}a=void 0,t&&t.enter()};if(l)r=function(){u.nextTick(t)};else if(!d||s.navigator&&s.navigator.standalone)if(f&&f.resolve){var e=f.resolve(void 0);r=function(){e.then(t)}}else r=function(){c.call(s,t)};else{var i=!0,o=document.createTextNode("");new d(t).observe(o,{characterData:!0}),r=function(){o.data=i=!i}}return function(t){var e={fn:t,next:void 0};a&&(a.next=e),n||(n=e,r()),a=e}}},"AQ/M":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'.box[data-v-4ef4fd57]{padding:0;min-width:1135px}button[data-v-4ef4fd57]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-4ef4fd57]{color:#19be6b;background:transparent}button#fail[data-v-4ef4fd57]{color:#ed3f14;background:transparent}button#primary[data-v-4ef4fd57]{color:#ff8a34;background:transparent}button.down[data-v-4ef4fd57],button.up[data-v-4ef4fd57]{color:#ff8a34}button.down[data-v-4ef4fd57]:after{content:"\\F116"}button.up[data-v-4ef4fd57]:after{content:"\\F124"}#bottonFather[data-v-4ef4fd57]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-4ef4fd57]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-4ef4fd57]{margin-left:20px}.w18[data-v-4ef4fd57]{width:17.5%}.w10[data-v-4ef4fd57]{width:12.5%}.w36[data-v-4ef4fd57]{width:35%}.fs12[data-v-4ef4fd57]{font-size:12px}.fs14[data-v-4ef4fd57]{font-size:14px}.fs16[data-v-4ef4fd57]{font-size:16px}.fs28[data-v-4ef4fd57]{font-size:28px}.text-center[data-v-4ef4fd57]{text-align:center}.block[data-v-4ef4fd57]{display:block}.container[data-v-4ef4fd57]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-4ef4fd57]{zoom:1}.text-overflow[data-v-4ef4fd57]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-4ef4fd57]::-ms-input-placeholder{text-align:center!important}input[data-v-4ef4fd57]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-4ef4fd57]{color:#ff8a34}.demo-spin-icon-load[data-v-4ef4fd57]{animation:ani-demo-spin-data-v-4ef4fd57 1s linear infinite}@keyframes ani-demo-spin-data-v-4ef4fd57{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-4ef4fd57]{height:100%}#Main .main-container[data-v-4ef4fd57]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-4ef4fd57]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-4ef4fd57]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-4ef4fd57],#Main .main-container .searchBox .search-right[data-v-4ef4fd57]{width:48%}#Main .main-container .searchBox .search-left button[data-v-4ef4fd57]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-4ef4fd57]{width:52%}#Main .main-container .searchBox .search-right img[data-v-4ef4fd57]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-4ef4fd57]{color:#ff8a34}.box[data-v-4ef4fd57]{width:100%;box-shadow:0 0 10px 2px rgba(0,0,0,.1);margin:0 auto;padding:30px 20px;padding-bottom:0;background:#fff}.ivu-table-row[data-v-4ef4fd57]{box-shadow:0 0 5px 2px rgba(0,0,0,.1)!important;transform:translateY(0)}',""])},CXw9:function(t,e,n){"use strict";var a,r,i,o,s=n("O4g8"),c=n("7KvD"),d=n("+ZMJ"),u=n("RY/4"),f=n("kM2E"),l=n("EqjI"),v=n("lOnJ"),p=n("2KxR"),h=n("NWt+"),m=n("t8x9"),g=n("L42u").set,y=n("82Mu")(),b=n("qARP"),x=n("dNDb"),_=n("iUbK"),w=n("fJUb"),j="Promise",I=c.TypeError,D=c.process,M=D&&D.versions,L=M&&M.v8||"",k=c[j],P="process"==u(D),A=function(){},C=r=b.f,E=!!function(){try{var t=k.resolve(1),e=(t.constructor={})[n("dSzd")("species")]=function(t){t(A,A)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof e&&0!==L.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(t){}}(),O=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},B=function(u,n){if(!u._n){u._n=!0;var a=u._c;y(function(){for(var c=u._v,d=1==u._s,t=0,e=function(t){var e,n,a,r=d?t.ok:t.fail,i=t.resolve,o=t.reject,s=t.domain;try{r?(d||(2==u._h&&q(u),u._h=1),!0===r?e=c:(s&&s.enter(),e=r(c),s&&(s.exit(),a=!0)),e===t.promise?o(I("Promise-chain cycle")):(n=O(e))?n.call(e,i,o):i(e)):o(c)}catch(t){s&&!a&&s.exit(),o(t)}};a.length>t;)e(a[t++]);u._c=[],u._n=!1,n&&!u._h&&R(u)})}},R=function(i){g.call(c,function(){var t,e,n,a=i._v,r=N(i);if(r&&(t=x(function(){P?D.emit("unhandledRejection",a,i):(e=c.onunhandledrejection)?e({promise:i,reason:a}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",a)}),i._h=P||N(i)?2:1),i._a=void 0,r&&t.e)throw t.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},q=function(e){g.call(c,function(){var t;P?D.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},S=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),B(e,!0))},T=function(t){var n,a=this;if(!a._d){a._d=!0,a=a._w||a;try{if(a===t)throw I("Promise can't be resolved itself");(n=O(t))?y(function(){var e={_w:a,_d:!1};try{n.call(t,d(T,e,1),d(S,e,1))}catch(t){S.call(e,t)}}):(a._v=t,a._s=1,B(a,!1))}catch(t){S.call({_w:a,_d:!1},t)}}};E||(k=function(t){p(this,k,j,"_h"),v(t),a.call(this);try{t(d(T,this,1),d(S,this,1))}catch(t){S.call(this,t)}},(a=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("xH/j")(k.prototype,{then:function(t,e){var n=C(m(this,k));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=P?D.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&B(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new a;this.promise=t,this.resolve=d(T,t,1),this.reject=d(S,t,1)},b.f=C=function(t){return t===k||t===o?new i(t):r(t)}),f(f.G+f.W+f.F*!E,{Promise:k}),n("e6n0")(k,j),n("bRrM")(j),o=n("FeBl")[j],f(f.S+f.F*!E,j,{reject:function(t){var e=C(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!E),j,{resolve:function(t){return w(s&&this===o?k:this,t)}}),f(f.S+f.F*!(E&&n("dY0y")(function(t){k.all(t).catch(A)})),j,{all:function(t){var o=this,e=C(o),s=e.resolve,c=e.reject,n=x(function(){var a=[],r=0,i=1;h(t,!1,function(t){var e=r++,n=!1;a.push(void 0),i++,o.resolve(t).then(function(t){n||(n=!0,a[e]=t,--i||s(a))},c)}),--i||s(a)});return n.e&&c(n.v),e.promise},race:function(t){var e=this,n=C(e),a=n.reject,r=x(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,a)})});return r.e&&a(r.v),n.promise}})},EqBC:function(t,e,n){"use strict";var a=n("kM2E"),r=n("FeBl"),i=n("7KvD"),o=n("t8x9"),s=n("fJUb");a(a.P+a.R,"Promise",{finally:function(e){var n=o(this,r.Promise||i.Promise),t="function"==typeof e;return this.then(t?function(t){return s(n,e()).then(function(){return t})}:e,t?function(t){return s(n,e()).then(function(){throw t})}:e)}})},L42u:function(t,e,n){var a,r,i,o=n("+ZMJ"),s=n("knuC"),c=n("RPLV"),d=n("ON07"),u=n("7KvD"),f=u.process,l=u.setImmediate,v=u.clearImmediate,p=u.MessageChannel,h=u.Dispatch,m=0,g={},y="onreadystatechange",b=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},x=function(t){b.call(t.data)};l&&v||(l=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++m]=function(){s("function"==typeof t?t:Function(t),e)},a(m),m},v=function(t){delete g[t]},"process"==n("R9M2")(f)?a=function(t){f.nextTick(o(b,t,1))}:h&&h.now?a=function(t){h.now(o(b,t,1))}:p?(i=(r=new p).port2,r.port1.onmessage=x,a=o(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(a=function(t){u.postMessage(t+"","*")},u.addEventListener("message",x,!1)):a=y in d("script")?function(t){c.appendChild(d("script"))[y]=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(o(b,t,1),0)}),t.exports={set:l,clear:v}},"NWt+":function(t,e,n){var l=n("+ZMJ"),v=n("msXi"),p=n("Mhyx"),h=n("77Pl"),m=n("QRG4"),g=n("3fs2"),y={},b={};(e=t.exports=function(t,e,n,a,r){var i,o,s,c,d=r?function(){return t}:g(t),u=l(n,a,e?2:1),f=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(p(d)){for(i=m(t.length);f<i;f++)if((c=e?u(h(o=t[f])[0],o[1]):u(t[f]))===y||c===b)return c}else for(s=d.call(t);!(o=s.next()).done;)if((c=v(s,u,o.value,e))===y||c===b)return c}).BREAK=y,e.RETURN=b},QaYs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("zW2i"),r=n("ii8h");var i=function(t){n("WPTx")},o=n("VU/8")(a.a,r.a,!1,i,"data-v-4ef4fd57",null);e.default=o.exports},U5ju:function(t,e,n){n("M6a0"),n("zQR9"),n("+tPU"),n("CXw9"),n("EqBC"),n("jKW+"),t.exports=n("FeBl").Promise},W3Iv:function(t,e,n){t.exports={default:n("wEtr"),__esModule:!0}},WPTx:function(t,e,n){var a=n("AQ/M");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3e194f10",a,!0,{})},bRrM:function(t,e,n){"use strict";var a=n("7KvD"),r=n("FeBl"),i=n("evD5"),o=n("+E39"),s=n("dSzd")("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:a[t];o&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},dNDb:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"f+26":function(t,e,n){"use strict";var a=n("//Fk"),r=n.n(a),i=n(4),o=n.n(i),s=n("NC6I"),c=(n.n(s),n("NHnr")),d=n("BK/k"),u=n("yt7g"),f=o.a.create({baseURL:d.a.dataServer,timeout:3e4}),l=d.a.dataServer+"activity/queryActivityList.json";f.interceptors.request.use(function(t){var e=u.a.getContext();return t.data.context=e,t.data.sign=u.a.getSign(e),t},function(t){r.a.reject(t)}),f.interceptors.response.use(function(t){if("MEMBER_NOT_LOGIN"!==t.data.errorMsg)return 1===t.data.status?l===t.config.url&&0===t.data.data.items?void c.default.$Message.warning("该品牌暂无陈列活动"):t.data:(c.default.$Message.error(t.data.errorMsg),t.data);sessionStorage.clear(),c.default.$router.replace("/")},function(t){return t&&t.response&&200!==t.response.status&&c.default.$Message.error("系统繁忙，请稍后再试"),console.log(t),r.a.reject(t)}),e.a=f},fJUb:function(t,e,n){var a=n("77Pl"),r=n("EqjI"),i=n("qARP");t.exports=function(t,e){if(a(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},gSvA:function(t,e,n){var a=n("kM2E"),r=n("mbce")(!0);a(a.S,"Object",{entries:function(t){return r(t)}})},iUbK:function(t,e,n){var a=n("7KvD").navigator;t.exports=a&&a.userAgent||""},ii8h:function(t,e,n){"use strict";var a={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{attrs:{id:"Main"}},[a("div",{staticClass:"box"},[a("Form",{ref:"form",attrs:{model:n.formData,"label-width":60,rules:n.rule}},[a("Row",[a("Col",{attrs:{span:"7"}},[a("Form-item",{attrs:{label:"品牌名称",prop:"brandId","label-width":90}},[a("Select",{attrs:{placeholder:"请选择"},on:{"on-change":n.changeValue},model:{value:n.formData.brandId,callback:function(t){n.$set(n.formData,"brandId",t)},expression:"formData.brandId"}},n._l(n.brandList,function(t,e){return a("Option",{key:e,attrs:{value:t.id}},[n._v(n._s(t.brandName))])}))],1)],1),n._v(" "),a("Col",{attrs:{span:"7"}},[a("Form-item",{attrs:{label:"活动包名",prop:"groupId","label-width":90}},[a("Select",{attrs:{placeholder:"请选择"},on:{"on-change":n.getActivityList},model:{value:n.formData.groupId,callback:function(t){n.$set(n.formData,"groupId",t)},expression:"formData.groupId"}},n._l(n.groupList,function(t,e){return a("Option",{key:e,attrs:{value:t.id}},[n._v(n._s(t.groupName))])}))],1)],1),n._v(" "),a("Col",{attrs:{span:"7"}},[a("Form-item",{attrs:{label:"活动名称",prop:"activityId","label-width":90}},[a("Select",{attrs:{placeholder:"请选择"},on:{"on-change":n.changeActivity},model:{value:n.formData.activityId,callback:function(t){n.$set(n.formData,"activityId",t)},expression:"formData.activityId"}},n._l(n.activityList,function(t,e){return a("Option",{key:e,attrs:{value:t.id}},[n._v(n._s(t.name))])}))],1)],1),n._v(" "),a("Col",{attrs:{span:"2",offset:"1"}},[a("Button",{staticClass:"btn-search",attrs:{type:"primary"},on:{click:function(t){n.submit("form")}}},[n._v("查询")])],1)],1)],1)],1),n._v(" "),a("div",{staticClass:"box",staticStyle:{"margin-top":"15px","padding-bottom":"20px"}},[a("div",{style:{height:"600px"},attrs:{id:"scancodeActivity"}})])])},staticRenderFns:[]};e.a=a},"jKW+":function(t,e,n){"use strict";var a=n("kM2E"),r=n("qARP"),i=n("dNDb");a(a.S,"Promise",{try:function(t){var e=r.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},knuC:function(t,e){t.exports=function(t,e,n){var a=void 0===n;switch(e.length){case 0:return a?t():t.call(n);case 1:return a?t(e[0]):t.call(n,e[0]);case 2:return a?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return a?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return a?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},mbce:function(t,e,n){var c=n("lktj"),d=n("TcQ7"),u=n("NpIQ").f;t.exports=function(s){return function(t){for(var e,n=d(t),a=c(n),r=a.length,i=0,o=[];i<r;)u.call(n,e=a[i++])&&o.push(s?[e,n[e]]:n[e]);return o}}},qARP:function(t,e,n){"use strict";var r=n("lOnJ");function a(t){var n,a;this.promise=new t(function(t,e){if(void 0!==n||void 0!==a)throw TypeError("Bad Promise constructor");n=t,a=e}),this.resolve=r(n),this.reject=r(a)}t.exports.f=function(t){return new a(t)}},t5DY:function(t,e,a){"use strict";e.d=function(t,e){var n={data:{level:t,parentId:e}};return a.i(r.a)({url:"/areaDict/doQueryAll.json",method:"post",data:n})},e.a=function(){return a.i(r.a)({url:"/brand/doQueryWithPage.json",method:"post",data:{data:{status:1}}})},e.l=function(t){var e={data:{brandId:t,type:3}};return a.i(r.a)({url:"/activity/queryActivityList.json",method:"post",data:e})},e.k=function(t){var e={data:t};return a.i(r.a)({url:"/displayYxtg/queryActivityGroupVOByBrandId.json",method:"post",data:e})},e.j=function(t){var e={data:t};return a.i(r.a)({url:"/resource/getRoleResource.json",method:"post",data:e})},e.i=function(t){var e={data:t};return a.i(r.a)({url:"/resource/removeRoleResource.json",method:"post",data:e})},e.h=function(t){var e={data:t};return a.i(r.a)({url:"/resource/doDelete.json",method:"post",data:e})},e.c=function(t){var e={data:t};return a.i(r.a)({url:"/displayYxtg/queryActivityVOByGroupId.json",method:"post",data:e})},e.g=function(t){var e={data:t};return a.i(r.a)({url:"/displayYxtg/queryActivityPresentVOByactivityId.json",method:"post",data:e})},e.e=function(t){var e={data:t};return a.i(r.a)({url:"/activityUtil/queryActivityVOByGroupId.json",method:"post",data:e})},e.f=function(t){var e={data:t};return a.i(r.a)({url:"/activityUtil/queryActivityGroupVOByBrandId.json",method:"post",data:e})},e.b=function(t){var e={data:t};return a.i(r.a)({url:"/uploadReport/queryOrganizationDictList.json",method:"post",data:e})};var r=a("f+26")},t8x9:function(t,e,n){var r=n("77Pl"),i=n("lOnJ"),o=n("dSzd")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||null==(n=r(a)[o])?e:i(n)}},wEtr:function(t,e,n){n("gSvA"),t.exports=n("FeBl").Object.entries},"xH/j":function(t,e,n){var r=n("hJx8");t.exports=function(t,e,n){for(var a in e)n&&t[a]?t[a]=e[a]:r(t,a,e[a]);return t}},zW2i:function(t,e,n){"use strict";var a=n("W3Iv"),r=n.n(a),i=(n("t5DY"),n(8)),o=n.n(i);e.a={name:"customer-scancode-activity-keepAlive",data:function(){return{formData:{brandId:"",groupId:"",activityId:""},rule:{brandId:[{required:!0,message:"请选着品牌"}],groupId:[{required:!0,message:"请选择活动包名"}]},brandList:[],groupList:[],activityList:[],myChart:"",timeLine:"",searchIndex:0,count:[0,1,2]}},components:{},created:function(){var e=this;this.Global.doPostNoLoading("condition/queryBrands.json",{date:7,activityType:1,scope:"a",channel:"B"},function(t){e.brandList=[],r()(t).forEach(function(t){e.brandList.push({id:Number(t[0]),brandName:t[1]})}),e.brandList&&e.brandList.length&&(e.formData.brandId=e.brandList[0].id,e.formData.brandName=e.brandList[0].brandName,console.log("value"),e.changeValue(e.formData.brandId))})},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this;this.myChart=o.a.init(document.getElementById("scancodeActivity"));var t={baseOption:{timeline:{axisType:"category",autoPlay:!1,playInterval:1e3,data:[],label:{formatter:function(t){return new Date(t).getMonth()+1+"-"+new Date(t).getDate()}}},title:{},tooltip:{},legend:{x:"center",data:["门店数量"]},toolbox:{feature:{saveAsImage:{title:"保存"}}},calculable:!0,grid:{top:80,bottom:100,right:"7%",left:"5%",tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,formatter:function(t){return t.value.replace("\n","")}}}}},xAxis:[{type:"category",name:"周扫码量",axisLabel:{interval:0},data:[],splitLine:{show:!1}}],yAxis:[{type:"value",name:"门店数量"}],series:[{name:"门店数量",type:"bar"}]},options:[]};this.myChart.setOption(t,!0),this.myChart.on("timelinechanged",function(t){console.log("切换"),e.searchIndex=t.currentIndex,e.changeTime()})},submit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.init():e.$Message.error("请选择查询条件!!")})},init:function(){var r=this,t=this.Global.JsonChange(this.formData);this.Global.deleteEmptyProperty(t),this.Global.doPost("report/getActivityWeekDict.json",t,function(t){if(t){t.reverse();for(var e=[],n=0;n<t.length;n++)e.push(t[n][1]);r.dateArray=e,r.timeLine=t;var a={baseOption:{timeline:{data:e}}};r.myChart.setOption(a),r.changeTime()}else r.$Message.error("没有时间区间")})},changeTime:function(t){var e=this,n=this.Global.JsonChange(this.formData);this.Global.deleteEmptyProperty(n),n.queryStartTime=this.timeLine[this.searchIndex][0],n.queryEndTime=this.timeLine[this.searchIndex][1],e.Global.doPost("report/storeScanDistribution.json",n,function(t){e.lineChart(t)})},lineChart:function(t){this.myChart.setOption({baseOption:{xAxis:[{data:this.getData(t).x_data}],series:[{data:this.getData(t).series_data}]}})},getData:function(t){for(var e={x_data:[],series_data:[]},n=0;n<t.length;n++)e.series_data.push(t[n].storeCount),e.x_data.push(t[n].scanCount);return e},changeValue:function(t){for(var e=this,n=this.brandList,a=0;a<n.length;a++)t==n[a].id&&(this.formData.brandId=n[a].id,this.formData.brandName=n[a].brandName);this.groupList=[],this.formData.groupId="",t&&this.Global.doPostNoLoading("condition/queryGroup.json",{activityType:1,scope:"a",brandId:t,channel:"B"},function(t){r()(t).forEach(function(t){e.groupList.push({id:Number(t[0]),groupName:t[1]})}),e.groupList&&e.groupList.length&&(e.formData.groupId=e.groupList[0].id,e.getActivityList(e.formData.groupId))})},getActivityList:function(t){var e=this;this.activityList=[],this.formData.activityId="",t&&this.Global.doPostNoLoading("condition/queryActivity.json",{date:7,activityType:1,scope:"a",groupId:t},function(t){r()(t).forEach(function(t){e.activityList.push({id:Number(t[0]),name:t[1]})})})},changeActivity:function(t){this.formData.activityName=t.label}},destroyed:function(){this.myChart.dispatchAction({type:"timelinePlayChange",playState:!1})}}}});