(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2091f0"],{a869:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",{staticStyle:{background:"linear-gradient(to left, '#C4C4C4', '#F0F0F0')"}},[t("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[t("v-row",{attrs:{align:"center",justify:"center"}},[t("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[t("v-card",{staticClass:"mx-auto",attrs:{shaped:"",elevation:"20"}},[t("v-toolbar",{attrs:{color:"#BDB873",dark:"",flat:""}},[t("v-toolbar-title",{staticClass:"headline"},[a._v("登入頁面")])],1),t("v-card-text",[t("span",{staticClass:"text-gray-100 text-right text-xs  "},[a._v(" "+a._s(a.uuuser.email)+" 已登入網站後台。請開始修改內容 ")]),t("v-form",{ref:"form",attrs:{disabled:a.disabled,"lazy-validation":""}},[t("v-text-field",{attrs:{type:"text",label:"帳號",rules:a.emailRules,"prepend-icon":"mdi-at"},model:{value:a.email,callback:function(e){a.email=e},expression:"email"}}),t("v-text-field",{attrs:{type:a.showPassword?"text":"密碼",label:"密碼",rules:a.passwordRules,"prepend-icon":"mdi-lock","append-icon":a.showPassword?"mdi-eye-off":"mdi-eye"},on:{"click:append":function(e){a.showPassword=!a.showPassword}},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}})],1)],1),t("v-card-actions",{attrs:{align:"center",justify:"center"}},[t("v-col",[t("v-btn",{attrs:{outlined:"",color:"#7F7D63",text:"",to:"/"}},[a._v(" 返回首頁 ")])],1),t("v-col",[t("v-btn",{attrs:{outlined:"",color:"#7F7D63",text:""},on:{click:a.chk}},[a._v(" 註冊帳號 ")]),t("v-btn",{attrs:{outlined:"",color:"#7F7D63",text:""},on:{click:a.sendEmail}},[a._v(" 更改密碼 ")])],1),t("v-col",[t("v-btn",{attrs:{dark:"",disabled:a.disabled,block:"",color:"#7F7D63"},on:{click:a.validate}},[t("span",{directives:[{name:"show",rawName:"v-show",value:!a.disabled,expression:"!disabled"}]},[a._v("登入")]),t("span",{directives:[{name:"show",rawName:"v-show",value:a.disabled,expression:"disabled"}]},[t("v-progress-circular",{attrs:{indeterminate:"",color:"#7F7D63"}})],1)])],1)],1)],1)],1)],1)],1)],1)},i=[],r=(t("ac1f"),t("5319"),t("8aa5")),o=t.n(r),l={data:function(){return{errorCode:"",errorMessage:"",disabled:!1,uuuser:"",email:"",emailRules:[function(a){return!!a||"E-mail is required"},function(a){return/.+@.+\..+/.test(a)||"E-mail must be valid"}],showPassword:!1,password:"",passwordRules:[function(a){return!!a||"Password is required"}],error:""}},methods:{validate:function(){var a=this;this.$refs.form.validate()&&(this.disabled=!0,o.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){a.disabled=!1,a.$router.replace({path:"/Blog_v1"})})).catch((function(e){a.disabled=!1,a.error=e.message})))},chk:function(){var a=this;o.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(e){e.user.sendEmailVerification(),alert(a.email+" email verification sent to user")})).catch((function(e){alert(a.email+e)}))},sendEmail:function(){var a=this;o.a.auth().sendPasswordResetEmail(this.email).then((function(){alert(a.email+"連結已由 E-mail 已發送，若無再主要收件匣收到通知，請注意垃圾信件匣")})).catch((function(a){alert(a.code+"||"+a.message)}))},sendV:function(){var a=this;o.a.auth().sendEmailVerification(this.email).then((function(){alert(a.email+"驗證信已由 E-mail 已發送，若無再主要收件匣收到通知，請注意垃圾信件匣")})).catch((function(a){alert(a.code+"||"+a.message)}))}},mounted:function(){var a=o.a.auth().currentUser;a&&(this.uuuser=a)}},n=l,d=t("2877"),c=t("6544"),u=t.n(c),m=t("7496"),h=t("8336"),v=t("b0af"),f=t("99d9"),p=t("62ad"),w=t("a523"),b=t("4bd4"),x=t("490a"),k=t("0fd9"),V=t("8654"),g=t("71d9"),C=t("2a7f"),E=Object(d["a"])(n,s,i,!1,null,null,null);e["default"]=E.exports;u()(E,{VApp:m["a"],VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCol:p["a"],VContainer:w["a"],VForm:b["a"],VProgressCircular:x["a"],VRow:k["a"],VTextField:V["a"],VToolbar:g["a"],VToolbarTitle:C["a"]})}}]);