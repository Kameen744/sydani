"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5743,571,1516],{2505:(e,t,r)=>{r.d(t,{Z:()=>p});var s=r(6598),n=(r(9038),r(1516)),l={class:"container-xxl"},a={class:"authentication-wrapper authentication-basic container-p-y"},o={class:"authentication-inner"},c={class:"card"},d={class:"card-body"},i={class:"app-brand justify-content-center"},u={class:"app-brand-logo demo"},m=["src"];const p={setup:function(e){return function(e,t){return(0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,null,[(0,s.createVNode)(n.default),(0,s.createElementVNode)("div",l,[(0,s.createElementVNode)("div",a,[(0,s.createElementVNode)("div",o,[(0,s.createElementVNode)("div",c,[(0,s.createElementVNode)("div",d,[(0,s.createElementVNode)("div",i,[(0,s.createElementVNode)("a",{href:"",onClick:t[0]||(t[0]=(0,s.withModifiers)((function(){}),["prevent"])),class:"app-brand-link gap-2"},[(0,s.createElementVNode)("span",u,[(0,s.createElementVNode)("img",{src:"".concat(e.$page.props.asset,"/assets/img/logo.svg"),class:"img-fluid",alt:"Sydani Group",style:{height:"80px"}},null,8,m)])])]),(0,s.renderSlot)(e.$slots,"default")])])])])])],64)}}}},5458:(e,t,r)=>{r.d(t,{Z:()=>u});var s=r(6598),n=r(9038),l=["href"],a=["href"],o=["href"],c=["href"],d=["href"],i=["href"];const u={setup:function(e){return function(e,t){return(0,s.openBlock)(),(0,s.createBlock)((0,s.unref)(n.Head),null,{default:(0,s.withCtx)((function(){return[(0,s.createElementVNode)("link",{rel:"stylesheet",href:"".concat(e.$page.props.dashAsset,"/vendor/fonts/boxicons.css")},null,8,l),(0,s.createElementVNode)("link",{rel:"stylesheet",href:"".concat(e.$page.props.dashAsset,"/vendor/css/core.css"),class:"template-customizer-core-css"},null,8,a),(0,s.createElementVNode)("link",{rel:"stylesheet",href:"".concat(e.$page.props.dashAsset,"/vendor/css/theme-default.css"),class:"template-customizer-theme-css"},null,8,o),(0,s.createElementVNode)("link",{rel:"stylesheet",href:"".concat(e.$page.props.dashAsset,"/css/demo.css")},null,8,c),(0,s.createElementVNode)("link",{rel:"stylesheet",href:"".concat(e.$page.props.dashAsset,"/vendor/libs/perfect-scrollbar/perfect-scrollbar.css")},null,8,d),(0,s.createElementVNode)("link",{rel:"stylesheet",href:"".concat(e.$page.props.dashAsset,"/vendor/css/pages/page-auth.css")},null,8,i)]})),_:1})}}}},571:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});const s=r(4829).Z},5743:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var s=r(6598),n=r(9038),l=r(571),a=(0,s.createElementVNode)("h4",{class:"mb-2 text-center"},"Admin Login",-1),o={class:"mb-3"},c=(0,s.createElementVNode)("label",{for:"email",class:"form-label"},"Email or Username",-1),d={key:0,class:"text-danger"},i={class:"mb-3 form-password-toggle"},u={class:"d-flex justify-content-between"},m=(0,s.createElementVNode)("label",{class:"form-label",for:"password"},"Password",-1),p=(0,s.createElementVNode)("small",null,"Forgot Password?",-1),f={class:"input-group input-group-merge"},h=(0,s.createElementVNode)("span",{class:"input-group-text cursor-pointer"},[(0,s.createElementVNode)("i",{class:"bx bx-hide"})],-1),b={key:0,class:"text-danger"},V={class:"mb-3"},E={class:"form-check"},N=(0,s.createElementVNode)("label",{class:"form-check-label",for:"remember-me"}," Remember Me ",-1),g={class:"mb-3"},v=["disabled"];const k={setup:function(e){var t=(0,n.useForm)({email:null,password:null,remember:!1});return function(e,r){return(0,s.openBlock)(),(0,s.createBlock)(l.default,null,{default:(0,s.withCtx)((function(){return[a,(0,s.createElementVNode)("form",{id:"formAuthentication",class:"mb-3",onSubmit:r[3]||(r[3]=(0,s.withModifiers)((function(e){return(0,s.unref)(t).post("/login")}),["prevent"]))},[(0,s.createElementVNode)("div",o,[c,(0,s.withDirectives)((0,s.createElementVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,s.unref)(t).email=e}),name:"email-username",placeholder:"Enter your email or username",autofocus:""},null,512),[[s.vModelText,(0,s.unref)(t).email]]),(0,s.unref)(t).errors.email?((0,s.openBlock)(),(0,s.createElementBlock)("div",d,(0,s.toDisplayString)((0,s.unref)(t).errors.email),1)):(0,s.createCommentVNode)("",!0)]),(0,s.createElementVNode)("div",i,[(0,s.createElementVNode)("div",u,[m,(0,s.createVNode)((0,s.unref)(n.Link),{href:"/forgot-password"},{default:(0,s.withCtx)((function(){return[p]})),_:1})]),(0,s.createElementVNode)("div",f,[(0,s.withDirectives)((0,s.createElementVNode)("input",{type:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return(0,s.unref)(t).password=e}),class:"form-control",name:"password",placeholder:"············","aria-describedby":"password"},null,512),[[s.vModelText,(0,s.unref)(t).password]]),h,(0,s.unref)(t).errors.password?((0,s.openBlock)(),(0,s.createElementBlock)("div",b,(0,s.toDisplayString)((0,s.unref)(t).errors.password),1)):(0,s.createCommentVNode)("",!0)])]),(0,s.createElementVNode)("div",V,[(0,s.createElementVNode)("div",E,[(0,s.withDirectives)((0,s.createElementVNode)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":r[2]||(r[2]=function(e){return(0,s.unref)(t).remember=e})},null,512),[[s.vModelCheckbox,(0,s.unref)(t).remember]]),N])]),(0,s.createElementVNode)("div",g,[(0,s.createElementVNode)("button",{class:"btn btn-primary d-grid w-100",type:"submit",disabled:(0,s.unref)(t).processing}," Sign in ",8,v)])],32)]})),_:1})}}}},1516:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});const s=r(7907).Z},4829:(e,t,r)=>{r.d(t,{Z:()=>s.Z});var s=r(2505)},7907:(e,t,r)=>{r.d(t,{Z:()=>s.Z});var s=r(5458)}}]);