(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),r=(a(0),a(92));const c={id:"crud-saga",title:"CRUD Saga Helper",sidebar_label:"CRUD Saga"},b={unversionedId:"helpers/crud-saga",id:"helpers/crud-saga",isDocsHomePage:!1,title:"CRUD Saga Helper",description:"crudSaga(options, extend) \u21d2 function",source:"@site/docs/helpers/crud-saga.md",permalink:"/docs/helpers/crud-saga",editUrl:"https://github.com/saga-slice/saga-slice.github.io/edit/master/website/docs/helpers/crud-saga.md",sidebar_label:"CRUD Saga",sidebar:"docs",previous:{title:"Reducer Helpers",permalink:"/docs/helpers/reducers"},next:{title:"CRUD Slice Helper",permalink:"/docs/helpers/crud-slice"}},l=[{value:"crudSaga(options, extend) \u21d2 <code>function</code>",id:"crudsagaoptions-extend-\u21d2-function",children:[{value:"REST implementation",id:"rest-implementation",children:[]}]}],i={rightToc:l};function o({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"crudsagaoptions-extend-\u21d2-function"},"crudSaga(options, extend) \u21d2 ",Object(r.b)("inlineCode",{parentName:"h2"},"function")),Object(r.b)("p",null,"This helper implements an entire REST sagas flow based on minimal configuration. As long as your endpoint follows standard REST, this helper can establish a basic starting point for CRUD functionality. It is extensible, and its defaults can be overwritten. The only requirements are a name and a ",Object(r.b)("inlineCode",{parentName:"p"},"sagaApi"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("inlineCode",{parentName:"p"},"function")," - Function that accepts redux actions object"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Options to pass to saga helper")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options.name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"REST resource name")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"options.sagaApi"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A ",Object(r.b)("inlineCode",{parentName:"td"},"sagaApi")," instance")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"extend"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"function")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A function to pass actions and add extra sagas")))),Object(r.b)("h4",{id:"simple-example"},"Simple Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { createModule } from 'saga-slice';\nconst { crudInitialState, crudReducers } from 'saga-slice-helpers';\nconst { sagaApi } from './myApiFile';\n\nconst name = 'todos'; // should be rest api endpoint name\nconst initialState = crudInitialState();\nconst reducers = crudReducers();\nconst sagas = crudSaga({ name, sagaApi });\n\nconst { actions } = createModule({ name, initialState, reducers, sagas });\n")),Object(r.b)("h4",{id:"extended-example"},"Extended Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const { takeLatest } from 'redux-sagas/effects';\nconst { createModule } from 'saga-slice';\nconst { crudInitialState, crudReducers, lifecycleReducers } from 'saga-slice-helpers';\nconst { sagaApi } from './myApiFile';\nconst { history } from './utils';\n\nconst name = 'todos'; // should be rest api endpoint name\nconst initialState = crudInitialState();\nconst reducers = crudReducers({\n    ...lifecycleReducers('associateUser')\n});\nconst sagas = crudSaga({\n    name,\n    sagaApi,\n    reducers\n}, (A) => ({\n    [A.deleteDone]: function* () {\n        yield history.push('/todos');\n    },\n    [A.associateUser]: function* ({ payload }) {\n        const { userId, todoId } = payload;\n        yield sagaApi.put(\n            `/todos/${todoId}/user/${userId}`,\n            A.associateUserSuccess,\n            A.associateUserFail\n        )\n    }\n}));\n\nconst { actions } = createModule({ name, initialState, reducers, sagas });\n")),Object(r.b)("h3",{id:"rest-implementation"},"REST implementation"),Object(r.b)("p",null,"crudSaga will implement the following based on ",Object(r.b)("inlineCode",{parentName:"p"},"name: 'todos'"),":"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Action Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Method"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Path"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Success"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Fail"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Done"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readAll"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GET"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"/todos")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readAllSuccess"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readAllFail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readAllDone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readOne"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"GET"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"/todos/{id}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readOneSuccess"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readOneFail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"readOneDone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"create"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"POST"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"/todos")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"createSuccess"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"createFail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"createDone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"update"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PUT"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"/todos/{id}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"updateSuccess"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"updateFail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"updateDone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"patch"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"PATCH"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"/todos/{id}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"patchSuccess"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"patchFail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"patchDone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"delete"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"DELETE"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"/todos/{id}")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"deleteSuccess"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"deleteFail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"deleteDone")))))}o.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=d(a),O=n,j=s["".concat(b,".").concat(O)]||s[O]||p[O]||c;return a?r.a.createElement(j,l(l({ref:t},o),{},{components:a})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);