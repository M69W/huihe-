webpackJsonp([290],{"2VXf":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'.box[data-v-6ad037b9]{margin:0 auto;padding:0;min-width:1135px}button[data-v-6ad037b9]{outline:none;list-style:none;border:0;cursor:pointer}button#success[data-v-6ad037b9]{color:#19be6b;background:transparent}button#fail[data-v-6ad037b9]{color:#ed3f14;background:transparent}button#primary[data-v-6ad037b9]{color:#ff8a34;background:transparent}button.down[data-v-6ad037b9],button.up[data-v-6ad037b9]{color:#ff8a34}button.down[data-v-6ad037b9]:after{content:"\\F116"}button.up[data-v-6ad037b9]:after{content:"\\F124"}#bottonFather[data-v-6ad037b9]{display:flex;justify-content:center;align-items:center}.lookDetail[data-v-6ad037b9]{background:#febf00;border-color:#febf00;color:#fff}.ml20[data-v-6ad037b9]{margin-left:20px}.w18[data-v-6ad037b9]{width:17.5%}.w10[data-v-6ad037b9]{width:12.5%}.w36[data-v-6ad037b9]{width:35%}.fs12[data-v-6ad037b9]{font-size:12px}.fs14[data-v-6ad037b9]{font-size:14px}.fs16[data-v-6ad037b9]{font-size:16px}.fs28[data-v-6ad037b9]{font-size:28px}.text-center[data-v-6ad037b9]{text-align:center}.block[data-v-6ad037b9]{display:block}.container[data-v-6ad037b9]:after{display:block;clear:both;content:"";visibility:hidden;height:0}.container[data-v-6ad037b9]{zoom:1}.text-overflow[data-v-6ad037b9]{display:inline-block;max-width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}input[data-v-6ad037b9]::-ms-input-placeholder{text-align:center!important}input[data-v-6ad037b9]::-webkit-input-placeholder{text-align:center!important}.displayGroupPrimary[data-v-6ad037b9]{color:#ff8a34}.demo-spin-icon-load[data-v-6ad037b9]{animation:ani-demo-spin-data-v-6ad037b9 1s linear infinite}@keyframes ani-demo-spin-data-v-6ad037b9{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}#Main[data-v-6ad037b9]{height:100%}#Main .main-container[data-v-6ad037b9]{padding-top:10px;min-height:100%;position:relative;background:#fff;padding-bottom:60px;min-width:1135px}#Main .main-container .page-box[data-v-6ad037b9]{overflow:hidden;position:absolute;bottom:10px;right:10px}#Main .main-container .searchBox[data-v-6ad037b9]{overflow:hidden}#Main .main-container .searchBox .search-left[data-v-6ad037b9],#Main .main-container .searchBox .search-right[data-v-6ad037b9]{width:48%}#Main .main-container .searchBox .search-left button[data-v-6ad037b9]{outline:none;border:none;width:60px;height:30px;line-height:30px;background:#fff;margin-left:8px;cursor:pointer;color:#ff8a34}#Main .main-container .searchBox .search-right[data-v-6ad037b9]{width:52%}#Main .main-container .searchBox .search-right img[data-v-6ad037b9]{cursor:pointer;margin-left:6px}#Main .main-container .numColor[data-v-6ad037b9]{color:#ff8a34}.box[data-v-6ad037b9]{width:100%;margin:0 auto 15px;padding:30px 20px 0;background:#fff}.ivu-radio-wrapper[data-v-6ad037b9]{margin-right:30px}.buttonBox[data-v-6ad037b9]{padding:10px 0}.buttonBox h4[data-v-6ad037b9]{margin-left:30px;font-weight:400;margin-bottom:20px}.buttonBox .selectBox[data-v-6ad037b9]{width:94%;margin-left:3%;height:400px;padding:10px 0;border:1px solid #e5e5e5}.buttonBox .selectBox .left[data-v-6ad037b9],.buttonBox .selectBox .right[data-v-6ad037b9]{float:left;width:48%;height:100%;margin-left:2%;overflow-y:auto}.buttonBox .selectBox .left[data-v-6ad037b9]{border-right:1px solid}.roleBox[data-v-6ad037b9]{overflow:hidden;width:100%;height:auto}.roleBox .roleBoxLeft[data-v-6ad037b9],.roleBox .roleBoxRight[data-v-6ad037b9]{float:left;width:48%;margin-left:2%;box-sizing:border-box}.roleBox .roleBoxLeft[data-v-6ad037b9]{border-right:1px solid #e5e5e5}.btn[data-v-6ad037b9]{text-align:center;margin:15px}.btn .btnSearch[data-v-6ad037b9]{margin:5px}',""])},"I4+Y":function(t,e,a){"use strict";var n={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{attrs:{id:"Main"}},[n("div",{staticClass:"main-container"},[n("div",{staticClass:"box"},[n("Form",{attrs:{model:a.formData,"label-width":88,rules:a.rules}},[n("Row",[n("Col",{attrs:{span:"6"}},[n("Form-item",{attrs:{label:"品牌名称",prop:"brandId",required:""}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:a.formData.brandId,callback:function(t){a.$set(a.formData,"brandId",t)},expression:"formData.brandId"}},a._l(a.brandList,function(t,e){return n("Option",{key:e,attrs:{value:t.id}},[a._v(a._s(t.brandName))])}))],1)],1),a._v(" "),n("Col",{attrs:{span:"6"}},[n("Form-item",{attrs:{label:"角色名称",prop:"roleName",required:""}},[n("Input",{attrs:{placeholder:"请输入角色名称"},model:{value:a.formData.roleName,callback:function(t){a.$set(a.formData,"roleName","string"==typeof t?t.trim():t)},expression:"formData.roleName"}})],1)],1),a._v(" "),n("Col",{attrs:{span:"6"}},[n("Form-item",{attrs:{label:"角色说明",prop:"description"}},[n("Input",{attrs:{placeholder:"请输入角色说明"},model:{value:a.formData.description,callback:function(t){a.$set(a.formData,"description","string"==typeof t?t.trim():t)},expression:"formData.description"}})],1)],1)],1)],1)],1),a._v(" "),n("div",{staticClass:"box buttonBox"},[n("Form",{ref:"form",attrs:{"label-width":88,rules:a.rules}},[n("Row",[n("Col",{attrs:{span:"24"}},[n("h4",[a._v("菜单选择:")]),a._v(" "),n("div",{staticClass:"selectBox"},[n("div",{staticClass:"left"},[n("Tree",{ref:"fatherTree",attrs:{data:a.baseData,"show-checkbox":""},on:{"on-check-change":a.checkChange}})],1),a._v(" "),n("div",{staticClass:"right"},[n("Tree",{ref:"tree",attrs:{data:a.checkedData}})],1)])])],1)],1),a._v(" "),n("div",{staticClass:"btn"},[n("Button",{staticClass:"btnSearch",attrs:{type:"info"},on:{click:a.cancel}},[a._v("取消")]),a._v(" "),n("Button",{staticClass:"btnSearch",attrs:{type:"success"},on:{click:function(t){a.submit("form")}}},[a._v("保存")])],1)],1)])])},staticRenderFns:[]};e.a=n},TKYo:function(t,e,a){"use strict";var n=a("W3Iv"),r=a.n(n);e.a={name:"create-new-role",data:function(){return{rules:{},baseData:[],type:"",formData:{brandId:"",roleName:"",description:""},checkedData:[],brandList:[],showUnlock:!1,i:0}},created:function(){var i=this;this.Global.doPostNoLoading("condition/queryBrands.json",{},function(t){i.brandList=[],r()(t).forEach(function(t){i.brandList.push({id:Number(t[0]),brandName:t[1]})}),"add"===i.$route.query.type&&(i.formData.brandId=i.brandList[0].id)});var a=function e(a,n,r){var i=[];return 0===a.length||a.forEach(function(t){t.parentId===n&&((t={title:t.resName,id:t.id,level:r}).children=e(a,t.id,r+1),i.push(t))}),i};this.Global.doPost("resource/queryResourceByUser.json",{memo:!0},function(t){i.baseData=[];var e=a(t,0,1);i.baseData=e,"edit"===i.$route.query.type&&i.Global.doPost("resource/getRoleResource.json",i.$route.query.id,function(t){i.formData.brandId=t.brandId,i.formData.roleName=t.roleName,i.formData.description=t.description;var e=[];t.resourceList.forEach(function(r){var t=null;"template"==r.resType&&(t=1),"menu"==r.resType&&(t=2),"page"==r.resType&&(t=3),e.push({children:[],checked:!0,level:t,title:r.resName,id:r.id}),i.baseData.forEach(function(t,n){t.children&&t.children.length&&t.children.forEach(function(t,a){t.children&&t.children.length&&t.children.forEach(function(t,e){"page"==r.resType&&r.id==t.id&&i.$set(i.baseData[n].children[a].children[e],"checked",!0)})})})}),i.checkedData=a(t.resourceList,0)})})},watch:{showUnlock:function(t){}},methods:{checkChange:function(t){var e=this,o=[];t.forEach(function(i){1==i.level&&e.baseData.forEach(function(t){t.id==i.id&&o.push({title:t.title,level:1,children:[],expand:!0})}),2==i.level&&e.baseData.forEach(function(a){a.children&&a.children.length&&a.children.forEach(function(t){if(i.id==t.id)if(o.length){var e=null;o.forEach(function(t){t.title==a.title&&(e=t)}),e?e.children.push({expand:!0,level:2,title:i.title,children:[]}):o.push({title:a.title,level:1,expand:!0,children:[{expand:!0,level:2,title:i.title,children:[]}]})}else o.push({title:a.title,level:1,expand:!0,children:[{expand:!0,level:2,title:i.title,children:[]}]})})}),3==i.level&&e.baseData.forEach(function(r){r.children&&r.children.length&&r.children.forEach(function(n){n.children&&n.children.length&&n.children.forEach(function(t){if(i.id==t.id)if(0==o.length)o.push({title:r.title,expand:!0,level:1,children:[{expand:!0,level:2,title:n.title,children:[{expand:!0,level:3,title:i.title,children:[]}]}]});else{var e=null;if(o.forEach(function(t){t.title==r.title&&(e=t)}),e){var a=null;e.children.forEach(function(t){t.title==n.title&&(a=t)}),a?a.children.push({title:i.title,children:[],level:3,expand:!0}):e.children.push({title:n.title,expand:!0,level:2,children:[{title:i.title,children:[],level:3,expand:!0}]})}else o.push({title:r.title,expand:!0,level:1,children:[{expand:!0,level:2,title:n.title,children:[{expand:!0,level:3,title:i.title,children:[]}]}]})}})})})}),this.checkedData=o},cancel:function(){this.$router.back()},dataChange:function(t){var e=this.$refs.tree.getCheckedNodes();console.log(e)},createNewAccount:function(){this.type="add",this.showUnlock=!0},submit:function(t){return this.formData.brandId?this.formData.roleName?this.checkedData.length<1?(this.$Message.error("请选择角色菜单"),!1):void this.init():(this.$Message.error("请输入角色名称"),!1):(this.$Message.error("请选择品牌"),!1)},init:function(){var e=this,t=this.Global.JsonChange(this.formData);this.Global.deleteEmptyProperty(t);var a=this.$refs.fatherTree.getCheckedNodes(),r=[];a.forEach(function(n){r.push(n.id),2==n.level&&e.baseData.forEach(function(e){e.children&&e.children.length&&e.children.forEach(function(t){t.id==n.id&&r.push(e.id)})}),3==n.level&&e.baseData.forEach(function(a){a.children&&a.children.length&&a.children.forEach(function(e){e.children&&e.children.length&&e.children.forEach(function(t){t.id==n.id&&(r.push(a.id),r.push(e.id))})})})}),r=this.arrRemoval(r),console.log(r);var n="";"edit"===this.$route.query.type?(n="role/doUpdate.json",t.resourceList=r,t.id=this.$route.query.id):(n="resource/saveRoleResource.json",t.resourceIds=r.join()),this.Global.doPost(n,t,function(t){e.$router.back()})},arrRemoval:function(t){for(var e={},a=[],n=0,r=t.length;n<r;n++)e[t[n]]||(e[t[n]]="a",a.push(t[n]));return a},roleSureSetting:function(){}}}},W3Iv:function(t,e,a){t.exports={default:a("wEtr"),__esModule:!0}},dtog:function(t,e,a){var n=a("2VXf");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("0d6ea507",n,!0,{})},gSvA:function(t,e,a){var n=a("kM2E"),r=a("mbce")(!0);n(n.S,"Object",{entries:function(t){return r(t)}})},mbce:function(t,e,a){var l=a("lktj"),c=a("TcQ7"),s=a("NpIQ").f;t.exports=function(d){return function(t){for(var e,a=c(t),n=l(a),r=n.length,i=0,o=[];i<r;)s.call(a,e=n[i++])&&o.push(d?[e,a[e]]:a[e]);return o}}},qyYG:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("TKYo"),r=a("I4+Y");var i=function(t){a("dtog")},o=a("VU/8")(n.a,r.a,!1,i,"data-v-6ad037b9",null);e.default=o.exports},wEtr:function(t,e,a){a("gSvA"),t.exports=a("FeBl").Object.entries}});