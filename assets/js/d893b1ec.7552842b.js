"use strict";(self.webpackChunkdashdot=self.webpackChunkdashdot||[]).push([[645],{944:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},s="Quick Setup",p={unversionedId:"quick-setup",id:"quick-setup",title:"Quick Setup",description:"Images are hosted on DockerHub,",source:"@site/docs/quick-setup.md",sourceDirName:".",slug:"/quick-setup",permalink:"/docs/quick-setup",editUrl:"https://github.com/MauriceNino/dashdot/edit/dev/apps/docs/docs/quick-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation Options",permalink:"/docs/install/"}},u=[],l={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-setup"},"Quick Setup"),(0,a.kt)("p",null,"Images are hosted on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/mauricenino/dashdot"},"DockerHub"),",\nand are available for both AMD64 and ARM devices."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker container run -it \\\n  -p 80:3001 \\\n  -v /etc/os-release:/etc/os-release:ro \\\n  -v /proc/1/ns/net:/mnt/host_ns_net:ro \\\n  -v /media:/mnt/host_media:ro \\\n  -v /mnt:/mnt/host_mnt:ro \\\n  --privileged \\\n  mauricenino/dashdot\n")),(0,a.kt)("p",null,"To get more information on why which flag is needed, or if you want to use other\ninstall options instead (",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),", or from source), have a look at the ",(0,a.kt)("a",{parentName:"p",href:"./install/docker"},"installation section"),"."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);