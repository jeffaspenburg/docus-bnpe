import o from"./TabsHeader.51c82d45.js";import{d as v,O as d,k as u}from"./entry.2810313c.js";const _=(t,r)=>t.type&&t.type.tag&&t.type.tag===r,b=v({data(){return{activeTabIndex:0,counter:0}},render(){var c,p;const t=((p=(c=this.$slots)==null?void 0:c.default)==null?void 0:p.call(c))||[],r=t.map((e,i)=>{var a,n,s;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((n=e==null?void 0:e.props)==null?void 0:n.label)||`${i}`,active:((s=e==null?void 0:e.props)==null?void 0:s.active)||!1,component:e}});return d("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[d(o,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:r,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),d("div",{class:"code-group-content",text:this.activeTabIndex},t.map((e,i)=>{var a,n;return d("div",{style:{display:i===this.activeTabIndex?"block":"none"},class:{"":!_(e,"code")}},[_(e,"code")?e:d("div",{class:{"preview-canvas":!0}},[((n=(a=e.children)==null?void 0:a.default)==null?void 0:n.call(a))||e.children])])}))])}});const m=u(b,[["__scopeId","data-v-577cdd71"]]);export{m as default};
