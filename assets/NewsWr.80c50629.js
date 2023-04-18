import{S as m}from"./SubPageHero.0a3d1359.js";import{Q as _}from"./vue-quill.snow.8c1d44ae.js";import{_ as w,d as x,o as z,c as H,a as l,b as t,u as k,w as u,F as y,h as g,p as L,l as E}from"./index.3ccd0784.js";const o=a=>(L("data-v-b1fa2035"),a=a(),E(),a),M={class:"container div-main-text"},C=g('<div id="divSearchLine" data-v-b1fa2035><select data-totalsearch-select data-v-b1fa2035><option value="cd-total" data-v-b1fa2035>\uC804\uCCB4</option><option value="cd-title" data-v-b1fa2035>\uC81C\uBAA9</option><option value="cd-day" data-v-b1fa2035>\uB0A0\uC9DC</option></select><div class="line-vr" data-v-b1fa2035></div><input data-totalsearch-input type="text" data-v-b1fa2035><button data-search-button data-v-b1fa2035><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-b1fa2035><path fill="none" d="M0 0h24v24H0z" data-v-b1fa2035></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" data-v-b1fa2035></path></svg></button></div>',1),B={id:"divNewsDetail"},S=g('<p class="text-write-top" data-v-b1fa2035><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-b1fa2035><path fill="none" d="M0 0h24v24H0z" data-v-b1fa2035></path><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" data-v-b1fa2035></path></svg><span data-v-b1fa2035>\uAC8C\uC2DC\uBB3C \uC791\uC131</span></p><div id="divTitleWrite" data-v-b1fa2035><p data-v-b1fa2035>\uC81C \uBAA9</p><input data-title-input type="text" placeholder="\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694..." data-v-b1fa2035></div>',2),N={id:"editorWr"},U={id:"divUploadedFiles"},$={class:"section-upload-drag",ref:"uploadSection"},F={class:"dotline-inner-drag"},A=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32",height:"32"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"})],-1)),D=o(()=>t("p",{class:"title-sub-strong"},"Drag image here",-1)),I=o(()=>t("p",null,"or",-1)),O={for:"buttonUploadOrigin",id:"btnUpload",class:"button-dark",ref:"btnUpload"},V=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z",fill:"rgba(255,255,255,1)"})],-1)),W=o(()=>t("span",null,"Browse",-1)),T=[V,W],j={type:"file",name:"button-upload",id:"buttonUploadOrigin",ref:"inputFile",multiple:""},Q={class:"section-upload-list"},R=o(()=>t("p",null,"Uploaded image list",-1)),q={id:"multipleContainer",ref:"multipleContainer"},P={class:"detail-btm-buttons"},G=o(()=>t("button",{class:"button-white"},[t("p",null,"\uBAA9 \uB85D")],-1)),J=o(()=>t("button",{class:"button-dark"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z",fill:"rgba(255,255,255,1)"})]),t("p",null,"\uC791\uC131\uC644\uB8CC")],-1)),K={components:{QuillEditor:_},data(){return{editorOption:{placeholder:"place holder test",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["link","image","video"]],syntax:{highlight:a=>hljs.highlightAuto(a).value}},placeholder:"\uB0B4\uC6A9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694..."},content:""}},mounted(){this.$refs.btnUpload,this.$refs.inputFile;const a=this.$refs.uploadSection,d=this.$refs.uploadedName,c=this.$refs.uploadedSize;a.addEventListener("dragenter",function(e){console.log("dragenter")}),a.addEventListener("dragover",function(e){e.preventDefault(),console.log("dragover"),this.style.backgroundColor="rgba(var(--clr-inter-shade), .15)"}),a.addEventListener("dragleave",function(e){console.log("dragleave"),this.style.backgroundColor="rgba(var(--clr-inter-shade), .05)"}),a.addEventListener("drop",function(e){e.preventDefault(),console.log("drop");var n=e.dataTransfer.files[0];console.dir(n),d.innerHTML=n.name,c.innerHTML=n.size+"kb"});const s=this.$refs.multipleContainer;function f(e){if(e.files){console.log(e.files);const n=Array.from(e.files);document.createElement("div"),n.forEach((h,Y)=>{const p=new FileReader,v=document.createElement("div"),i=document.createElement("img");i.classList.add("image");const r=document.createElement("label");r.classList.add("image-label"),r.textContent=h.name,v.appendChild(i),v.appendChild(r),p.onload=b=>{i.src=b.target.result},s.appendChild(i),p.readAsDataURL(h),i.style.height="10rem",i.style.objectFit="cover",i.style.width="100%"})}}document.getElementById("buttonUploadOrigin").addEventListener("change",e=>{f(e.target)})}},X=Object.assign(K,{__name:"NewsWr",setup(a){return(d,c)=>{const s=x("router-link");return z(),H(y,null,[l(m),t("section",M,[C,t("div",B,[S,t("div",N,[l(k(_),{options:d.editorOption,theme:"snow"},null,8,["options"])]),t("div",U,[t("div",$,[t("div",F,[A,D,I,t("label",O,T,512),t("input",j,null,512)])],512),t("div",Q,[R,t("div",q,null,512)])])]),t("div",P,[l(s,{to:"/csnotice/\uC18C\uC2DD"},{default:u(()=>[G]),_:1}),l(s,{to:"/csnotice/\uC18C\uC2DD"},{default:u(()=>[J]),_:1})])])],64)}}}),at=w(X,[["__scopeId","data-v-b1fa2035"]]);export{at as default};