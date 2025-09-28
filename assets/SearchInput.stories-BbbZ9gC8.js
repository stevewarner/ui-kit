import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-B_Gte2mw.js";import"./preload-helper-D9Z9MdNV.js";const h=({title:e,titleId:a,...t},s)=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",ref:s,"aria-labelledby":a,...t},e?r.createElement("title",{id:a},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})),m=r.forwardRef(h),g=({title:e,titleId:a,...t},s)=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",ref:s,"aria-labelledby":a,...t},e?r.createElement("title",{id:a},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})),v=r.forwardRef(g),f="_searchInputContainer_141kn_1",C="_searchIcon_141kn_4",x="_clearButton_141kn_11",_="_searchInput_141kn_1",I="_visuallyHidden_141kn_41",o={searchInputContainer:f,searchIcon:C,clearButton:x,searchInput:_,visuallyHidden:I},c=({className:e,id:a,label:t="Search",placeholder:s="Search",value:u="",onChange:d,onClear:i,...p})=>n.jsxs("div",{className:o.searchInputContainer,children:[n.jsx(m,{className:o.searchIcon,height:20,width:20}),n.jsx("label",{htmlFor:a,className:o.visuallyHidden,children:t}),n.jsx("input",{id:a,className:`${o.searchInput} ${e}`,placeholder:s,value:u,onChange:d,...p}),u&&i&&n.jsx("button",{type:"button",className:o.clearButton,"aria-label":"Clear search",onClick:()=>i(),children:n.jsx(v,{height:16,width:16})})]});c.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{defaultValue:{value:"'Search'",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};const y={title:"Components/SearchInput",component:c,parameters:{layout:"centered"},args:{id:"search-input-id","data-test":"search-input-test"},tags:["autodocs"]},l={render:e=>{const[a,t]=r.useState("");return n.jsxs("div",{children:[n.jsx(c,{...e,value:a,onChange:s=>{t(s.target.value),e.onChange&&e.onChange(s)},onClear:()=>{t(""),e.onClear&&e.onClear()}}),n.jsxs("div",{style:{marginTop:"12px",background:"rgba(0, 0, 0, 0.1)"},children:["Search value: ",a]})]})},args:{placeholder:"Search Input"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div>
      <SearchInput {...args} value={value} onChange={e => {
        setValue(e.target.value);
        if (args.onChange) args.onChange(e);
      }} onClear={() => {
        setValue('');
        if (args.onClear) args.onClear();
      }} />

      <div style={{
        marginTop: '12px',
        background: 'rgba(0, 0, 0, 0.1)'
      }}>Search value: {value}</div>

      </div>;
  },
  args: {
    placeholder: 'Search Input'
  }
}`,...l.parameters?.docs?.source}}};const b=["Default"];export{l as Default,b as __namedExportsOrder,y as default};
