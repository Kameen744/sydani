"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8508,4181],{3473:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1519),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,".menu-item[data-v-035ffeb1]:hover{transition:2s}",""]);const i=l},1068:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1519),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,"#layout-menu[data-v-8de1cfb8]{overflow:auto;overflow-x:hidden;scrollbar-color:orange #191970;scrollbar-width:thin}#layout-menu[data-v-8de1cfb8]::-webkit-scrollbar{width:8px}#layout-menu[data-v-8de1cfb8]::-webkit-scrollbar-track{background:#191970}#layout-menu[data-v-8de1cfb8]::-webkit-scrollbar-thumb{background-color:orange;border:1px solid #191970;border-radius:10px}",""]);const i=l},4181:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(6598),l=n(9038),i=n(3907);var r={href:"",class:"menu-link menu-toggle"},o=function(e){return(0,a.pushScopeId)("data-v-035ffeb1"),e=e(),(0,a.popScopeId)(),e}((function(){return(0,a.createElementVNode)("i",{class:"menu-icon tf-icons bx bx-layout"},null,-1)})),c={class:"menu-sub"};const s={props:{data:{type:Object}},setup:function(e){var t=e,s=n(6252),d=s.onMounted,u=s.computed,m=(0,i.oR)(),k=u((function(){return m.state.activeNavLink}));return d((function(){"/admin/dashboard"==(0,l.usePage)().url.value&&m.commit("setActiveNavLink",-1)})),function(n,i){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{class:(0,a.normalizeClass)(["menu-item",(0,a.unref)(k)==e.data.activeKey?"open active":""]),onClick:i[0]||(i[0]=(0,a.withModifiers)((function(e){return m.commit("setActiveNavLink",t.data.activeKey)}),["prevent"]))},[(0,a.createElementVNode)("a",r,[o,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.data.title),1)]),(0,a.createElementVNode)("ul",c,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.data.links,(function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("li",{class:(0,a.normalizeClass)(["menu-item",n.$page.url=="".concat(e.url)?"active":""]),key:t},[(0,a.createVNode)((0,a.unref)(l.Link),{href:e.url,class:"menu-link"},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)((0,a.toDisplayString)(e.link),1)]})),_:2},1032,["href"])],2)})),128))])],2)}}};var d=n(2446),u=n.n(d),m=n(3473),k={insert:"head",singleton:!1};u()(m.Z,k);m.Z.locals;const f=(0,n(3744).Z)(s,[["__scopeId","data-v-035ffeb1"]])},8508:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n(6598),l=n(9038),i=n(6252),r=n(4181),o=function(e){return(0,a.pushScopeId)("data-v-8de1cfb8"),e=e(),(0,a.popScopeId)(),e},c={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},s={class:"app-brand demo"},d={class:"app-brand-logo demo"},u=["src"],m=[o((function(){return(0,a.createElementVNode)("i",{class:"bx bx-chevron-left bx-sm align-middle"},null,-1)}))],k={class:"menu-inner py-1 pb-5 mb-5"},f=o((function(){return(0,a.createElementVNode)("i",{class:"menu-icon tf-icons bx bx-home-circle"},null,-1)})),p=o((function(){return(0,a.createElementVNode)("div",{"data-i18n":"Analytics"},"Dashboard",-1)})),v=o((function(){return(0,a.createElementVNode)("li",{class:"menu-header small text-uppercase"},[(0,a.createElementVNode)("span",{class:"menu-header-text"},"Website")],-1)})),h=o((function(){return(0,a.createElementVNode)("li",{class:"menu-header small text-uppercase"},[(0,a.createElementVNode)("span",{class:"menu-header-text"},"Posts")],-1)})),g=o((function(){return(0,a.createElementVNode)("li",{class:"menu-header small text-uppercase"},[(0,a.createElementVNode)("span",{class:"menu-header-text"},"GIP")],-1)})),y=o((function(){return(0,a.createElementVNode)("li",{class:"menu-header small text-uppercase"},[(0,a.createElementVNode)("span",{class:"menu-header-text"},"Admin")],-1)}));const b={setup:function(e){(0,i.onMounted)((function(){for(var e=document.getElementById("layout-menu").getElementsByTagName("li"),t=function(t){var n=e[t];n.addEventListener("click",(function(e){!function(e){for(var t=0,n=0,a=document.getElementById("layout-menu");null!=e;)t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent,a.scrollTo(t,n)}(n)}))},n=0;n<e.length;n++)t(n)}));var t=function(){document.querySelector("html").classList.toggle("layout-menu-expanded"),console.log("clicked exapnd")},n=[{title:"Carousel",activeKey:1,links:[{link:"Add/Edit Carousel",url:"/admin/carousel"}]},{title:"Partners",activeKey:1.1,links:[{link:"Add/Edit Partner",url:"/admin/partner"}]},{title:"Who We Are",activeKey:1.2,links:[{link:"Add/Edit Who we are",url:"/admin/whoweare"}]},{title:"Core Values",activeKey:1.7,links:[{link:"Add/Edit Core Values",url:"/admin/values"}]},{title:"Vision/Mission",activeKey:1.3,links:[{link:"Add/Edit Vision & Mission",url:"/admin/visionmission"}]},{title:"Our Team",activeKey:1.4,links:[{link:"Add/Edit Team",url:"/admin/team"}]},{title:"Industries",activeKey:1.6,links:[{link:"Add/Edit Industries",url:"/admin/industry"},{link:"Services",url:"/admin/industry/services"}]},{title:"Our Work",activeKey:1.8,links:[{link:"Financing",url:"/admin/financing"},{link:"System Strengthening",url:"/admin/system"},{link:"Demand Generation",url:"/admin/demand"},{link:"Data Analytics",url:"/admin/data-analytics"},{link:"Sections Intro",url:"/admin/ourwork/intro"}]},{title:"Contact Us",activeKey:1.5,links:[{link:"Add/Edit Contact Info",url:"/admin/contact"}]}],o=[{title:"Projects/Insights",activeKey:2,links:[{link:"Create Project",url:"/admin/project"},{link:"Project List",url:"/admin/project/list"},{link:"Project Page Intro",url:"/admin/project/intro"},{link:"--INSIGHT--",url:"#"},{link:"Add/Edit Insight",url:"/admin/insight"}]},{title:"Blog",activeKey:3,links:[{link:"Post Blog",url:"/admin/blog"}]},{title:"Vacancy",activeKey:4,links:[{link:"Post New Job",url:"/admin/vacancy"}]}],b=[{title:"GIP",activeKey:6,links:[{link:"Create Batch",url:"/admin/intern/batch"},{link:"Add New Intern",url:"/admin/intern"},{link:"Upload Images",url:"/admin/intern/upload-images"}]}],E=[{title:"Manage Users",activeKey:5,links:[{link:"Users List",url:"/admin/user"}]}];return function(e,i){return(0,a.openBlock)(),(0,a.createElementBlock)("aside",c,[(0,a.createElementVNode)("div",s,[(0,a.createVNode)((0,a.unref)(l.Link),{href:"/admin/dashboard",class:"app-brand-link"},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("span",d,[(0,a.createElementVNode)("img",{src:"".concat(e.$page.props.asset,"/assets/img/logo.svg"),class:"img-fluid",alt:"Sydani Group",style:{"max-height":"45px"}},null,8,u)])]})),_:1}),(0,a.createElementVNode)("a",{href:"",class:"layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none",onClick:i[0]||(i[0]=(0,a.withModifiers)((function(){return(0,a.unref)(t)&&(0,a.unref)(t).apply(void 0,arguments)}),["prevent"]))},m)]),(0,a.createElementVNode)("ul",k,[(0,a.createElementVNode)("li",{class:(0,a.normalizeClass)(["menu-item","/admin/dashboard"==e.$page.url?"active":""])},[(0,a.createVNode)((0,a.unref)(l.Link),{href:"/admin/dashboard",class:"menu-link"},{default:(0,a.withCtx)((function(){return[f,p]})),_:1})],2),v,((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n,(function(e,t){return(0,a.createVNode)(r.default,{data:e,key:t},null,8,["data"])})),64)),h,((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(o,(function(e,t){return(0,a.createVNode)(r.default,{data:e,key:t},null,8,["data"])})),64)),g,((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(b,(function(e,t){return(0,a.createVNode)(r.default,{data:e,key:t},null,8,["data"])})),64)),y,((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(E,(function(e,t){return(0,a.createVNode)(r.default,{class:"mb-5",data:e,key:t},null,8,["data"])})),64))])])}}};var E=n(2446),N=n.n(E),V=n(1068),x={insert:"head",singleton:!1};N()(V.Z,x);V.Z.locals;const B=(0,n(3744).Z)(b,[["__scopeId","data-v-8de1cfb8"]])}}]);