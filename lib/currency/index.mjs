import{createSectionFactory as e,createBaseSections as a}from"../index.mjs";const n=/* #__PURE__ */e("cr"),{outer:l,inner:t,wrapper:d,label:o,prefix:r,suffix:i,help:u,messages:s,message:c,icon:p}=/* #__PURE__ */a(n),$=n("input",(()=>({$el:"input",bind:"$attrs",attrs:{name:"$node.name",autocomplete:"$attrs.autocomplete || off",id:"$id",onChange:"$handlers.handleInput",onInput:"$handlers.handleInput",onKeydown:"$handlers.handleKeyDown",onBeforeinput:"$handlers.handleBeforeInput",readonly:"$readonly",disabled:"$disabled",placeholder:"$placeholder || $unitParts.unit",inputmode:"decimal","data-unit":"$unit","data-currency":"$currency","data-display-locale":"$displayLocale","data-value-locale":"$valueLocale","data-decimals":"$decimals","data-trailing":"$trailingZeros","data-numeric-value":"$_numericValue","data-align":"$_valueAlignAuto"}})));export{n as createSection,u as help,p as icon,t as inner,$ as input,o as label,c as message,s as messages,l as outer,r as prefix,i as suffix,d as wrapper};
