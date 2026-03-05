import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-XmSzAYXp.js";import{F as m}from"./close-DYsdekYp.js";import{I as f}from"./Input-CyUwvhFg.js";import"./preload-helper-PPVm8Dsz.js";const g=({title:e,titleId:r,...n},t)=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",ref:t,"aria-labelledby":r,...n},e?o.createElement("title",{id:r},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})),v=o.forwardRef(g),w="_searchInputContainer_1nwry_1",_="_label_1nwry_7",C="_inputRow_1nwry_12",b="_searchIcon_1nwry_16",x="_clearButton_1nwry_23",I="_searchInput_1nwry_1",s={searchInputContainer:w,label:_,inputRow:C,searchIcon:b,clearButton:x,searchInput:I},c=({className:e,id:r,label:n="Search",placeholder:t="Search",value:u="",onChange:p,onClear:i,showLabel:d=!1,...h})=>a.jsxs("div",{className:`${s.searchInputContainer} ${e??""}`,children:[d&&n&&a.jsx("label",{htmlFor:r,className:s.label,children:n}),a.jsxs("div",{className:s.inputRow,children:[a.jsx(v,{id:"search-icon",className:s.searchIcon,height:20,width:20}),a.jsx(f,{id:r,className:s.searchInput,placeholder:t,value:u,onChange:p,label:d?void 0:n,showLabel:!1,...h}),u&&i&&a.jsx("button",{type:"button",className:s.clearButton,"aria-label":"Clear search",onClick:()=>i(),children:a.jsx(m,{id:"close-icon",height:16,width:16})})]})]});c.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{defaultValue:{value:"'Search'",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};const V={title:"Components/SearchInput",component:c,parameters:{layout:"centered"},args:{id:"search-input-id","data-test":"search-input-test"},tags:["autodocs"]},l={render:e=>{const[r,n]=o.useState("");return a.jsxs("div",{children:[a.jsx(c,{...e,value:r,onChange:t=>{n(t.target.value),e?.onChange&&e.onChange(t)},onClear:()=>{n(""),e?.onClear&&e.onClear()}}),a.jsxs("div",{style:{marginTop:"12px",background:"rgba(0, 0, 0, 0.1)"},children:["Search value: ",r]})]})},args:{placeholder:"Search",showLabel:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div>
      <SearchInput {...args} value={value} onChange={e => {
        setValue(e.target.value);
        if (args?.onChange) args.onChange(e);
      }} onClear={() => {
        setValue('');
        if (args?.onClear) args.onClear();
      }} />

      <div style={{
        marginTop: '12px',
        background: 'rgba(0, 0, 0, 0.1)'
      }}>Search value: {value}</div>

      </div>;
  },
  args: {
    placeholder: 'Search',
    showLabel: true
  }
}`,...l.parameters?.docs?.source}}};const k=["Default"];export{l as Default,k as __namedExportsOrder,V as default};
