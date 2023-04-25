import{S as c}from"./SubPageHero.e4565634.js";import{Q as h}from"./vue-quill.snow.9179ab4f.js";import{_ as p,d as v,o as _,c as u,a as d,b as t,u as g,w as n,F as w,h as r,p as f,k as m}from"./index.381d5be6.js";const o=e=>(f("data-v-3d5082e2"),e=e(),m(),e),b={class:"container div-main-text"},z=r('<div id="divSearchLine" data-v-3d5082e2><select data-totalsearch-select data-v-3d5082e2><option value="cd-total" data-v-3d5082e2>\uC804\uCCB4</option><option value="cd-title" data-v-3d5082e2>\uC81C\uBAA9</option><option value="cd-day" data-v-3d5082e2>\uB0A0\uC9DC</option></select><div class="line-vr" data-v-3d5082e2></div><input data-totalsearch-input type="text" data-v-3d5082e2><button data-search-button data-v-3d5082e2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-3d5082e2><path fill="none" d="M0 0h24v24H0z" data-v-3d5082e2></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" data-v-3d5082e2></path></svg></button></div>',1),x={id:"divDataRoomDetail"},H=r('<p class="text-write-top" data-v-3d5082e2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-3d5082e2><path fill="none" d="M0 0h24v24H0z" data-v-3d5082e2></path><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" data-v-3d5082e2></path></svg><span data-v-3d5082e2>\uAC8C\uC2DC\uBB3C \uC791\uC131</span></p><div id="divTitleWrite" data-v-3d5082e2><p data-v-3d5082e2>\uC81C \uBAA9</p><input data-title-input type="text" placeholder="\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694..." data-v-3d5082e2></div>',2),M={id:"editorWr"},k={id:"divUploadedFiles"},V={class:"section-upload-drag",ref:"uploadSection"},B={class:"dotline-inner-drag"},S=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"32",height:"32"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z"})],-1)),L=o(()=>t("p",{class:"title-sub-strong"},"Drag file here",-1)),y=o(()=>t("p",null,"or",-1)),D={for:"buttonUploadOrigin",id:"btnUpload",class:"button-dark",ref:"btnUpload"},U=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18",height:"18"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z",fill:"rgba(255,255,255,1)"})],-1)),E=o(()=>t("span",null,"Browse",-1)),N=[U,E],C={type:"file",name:"button-upload",id:"buttonUploadOrigin",ref:"inputFile",multiple:""},F={class:"section-upload-list"},O=o(()=>t("p",null,"Uploaded file list",-1)),W={"data-uploaded-list":""},$={"data-uploaded-file":""},A=o(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"12",height:"12"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6-5.997zM5.83 8H9V4.83L5.83 8zM11 4v5a1 1 0 0 1-1 1H5v10h14V4h-8z"})],-1)),I={"data-uploaded-title":""},R={ref:"uploadedName"},T={"data-uploaded-size":"",ref:"uploadedSize"},j=o(()=>t("svg",{class:"button-trash-basket",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z"})],-1)),Q={class:"detail-btm-buttons"},q=o(()=>t("button",{class:"button-white"},[t("p",null,"\uBAA9 \uB85D")],-1)),P=o(()=>t("button",{class:"button-dark"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16"},[t("path",{fill:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z",fill:"rgba(255,255,255,1)"})]),t("p",null,"\uC791\uC131\uC644\uB8CC")],-1)),G={components:{QuillEditor:h},data(){return{editorOption:{placeholder:"place holder test",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{font:[]}],[{color:[]},{background:[]}],[{align:[]}],["link","image","video"]],syntax:{highlight:e=>hljs.highlightAuto(e).value}}},content:""}},mounted(){this.$refs.btnUpload,this.$refs.inputFile;const e=this.$refs.uploadSection,s=this.$refs.uploadedName,l=this.$refs.uploadedSize;e.addEventListener("dragenter",function(a){console.log("dragenter")}),e.addEventListener("dragover",function(a){a.preventDefault(),console.log("dragover"),this.style.backgroundColor="rgba(var(--clr-inter-shade), .15)"}),e.addEventListener("dragleave",function(a){console.log("dragleave"),this.style.backgroundColor="rgba(var(--clr-inter-shade), .05)"}),e.addEventListener("drop",function(a){a.preventDefault(),console.log("drop");var i=a.dataTransfer.files[0];console.dir(i),s.innerHTML=i.name,l.innerHTML=i.size+"kb"})}},J=Object.assign(G,{__name:"DataRoomWr",setup(e){return(s,l)=>{const a=v("router-link");return _(),u(w,null,[d(c),t("section",b,[z,t("div",x,[H,t("div",M,[d(g(h),{options:s.editorOption,theme:"snow"},null,8,["options"])]),t("div",k,[t("div",V,[t("div",B,[S,L,y,t("label",D,N,512),t("input",C,null,512)])],512),t("div",F,[O,t("ul",W,[t("li",$,[A,t("p",I,[t("label",R,"\uD30C\uC77C\uC608\uC2DC.xls",512),t("span",T,"324kb",512)]),j])])])])]),t("div",Q,[d(a,{to:"/csnotice/\uC790\uB8CC\uC2E4"},{default:n(()=>[q]),_:1}),d(a,{to:"/csnotice/\uC790\uB8CC\uC2E4"},{default:n(()=>[P]),_:1})])])],64)}}}),Z=p(J,[["__scopeId","data-v-3d5082e2"]]);export{Z as default};