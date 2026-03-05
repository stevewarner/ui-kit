import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-CIcO0bsH.js";import{I as s}from"./Input-CyUwvhFg.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Components/Input",component:s,parameters:{layout:"centered"},args:{id:"input-id","data-test":"input-test"},tags:["autodocs"]},e={render:a=>{const[t,o]=u.useState("");return n.jsxs("div",{children:[n.jsx(s,{...a,value:t,onChange:r=>{o(r.target.value),a.onChange&&a.onChange(r)}}),n.jsxs("div",{style:{marginTop:"12px",background:"rgba(0, 0, 0, 0.1)"},children:["Input value: ",t]})]})},args:{placeholder:"Bob",label:"First name",showLabel:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div>
      <Input {...args} value={value} onChange={e => {
        setValue(e.target.value);
        if (args.onChange) args.onChange(e);
      }} />

      <div style={{
        marginTop: '12px',
        background: 'rgba(0, 0, 0, 0.1)'
      }}>Input value: {value}</div>

      </div>;
  },
  args: {
    placeholder: 'Bob',
    label: 'First name',
    showLabel: true
  }
}`,...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,c as default};
