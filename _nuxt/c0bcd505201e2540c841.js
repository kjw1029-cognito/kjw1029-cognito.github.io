(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{259:function(t,e,r){"use strict";r.r(e);var o=r(85),n={data:function(){return{formData:{email:"",password:""}}},methods:{register:function(){o.register(this.formData.email,this.formData.password,"/auth/registerverify")}}},m=r(24),component=Object(m.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t._v("\n    Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"email"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),t._v(" "),r("div",[t._v("\n    Password: "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),r("button",{attrs:{type:"button"},on:{click:t.register}},[t._v("REGISTER")])])},[],!1,null,null,null);e.default=component.exports}}]);