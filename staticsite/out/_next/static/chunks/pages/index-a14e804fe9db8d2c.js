(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(770)}])},770:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var s=n(5893),r=n(7294),a=n(891),i=JSON.parse('{"S9":{"name":"Kigzag","logo":"/assets/images/logo.png"},"G":[{"name":"Product","href":"product"},{"name":"Features","href":"features"},{"name":"Pricing","href":"pricing"},{"name":"Contact Us","href":"about"}],"PL":{"title":"One Stop Shop For","subtitle":"Creator Monetization","description":"Empower Creators to Monetize their Passion, One Sale at a Time","manifesto":"","img":"/assets/images/t2.jpg","primaryAction":{"text":"Become A Creator","href":"https://app.kigzag.com/"},"secondaryAction":{"text":"Email us","href":"mailto:issaafakattan@gmail.com?subject=I like react landing page!"}},"O7":{"title":"At 0% Revenue share we offer","items":[{"title":"Monetize your Services with One Page Website","description":"In less than 10 minutes you can setup your One Page Website to:","points":["Sell Premium Video Membership","Sell Courses","Sell Merchandise","Receive Tips"],"img":"/assets/images/product1.jpg"},{"title":"We take care of digital infra!","description":"Create, Share, and Profit with Ease while we take care of everything digital:","points":["Video Streaming","Ecommerce","UPI, Rupay and other Payment Integrations","Shipping Provider Integration","Sales Analytics"],"img":"/assets/images/infrastructure.png"}]},"R2":{"title":"","subtitle":"Features To Monetize your Fanbase","description":"We plan to add more features goin forward.","items":[{"name":"Videos","description":"Sell subscription based access to premium video content.","icon":"/assets/images/react.png"},{"name":"Courses","description":"Sell subscription based access to courses, lectures or tutorials.","icon":"/assets/images/tailwindcss.svg"},{"name":"Merchandise","description":"Sell your merchandise and we handle the shipping.","icon":"/assets/images/nextjs.svg"},{"name":"Tip","description":"Receive tip from your fan with a message.","icon":"/assets/images/ts.png"}]},"D":{"title":"Pricing","extra":"14 Day Free Trial of Basic Plan, No Credit/Debit Card Needed","items":[{"name":"Free","price":"\u20b90","priceDetails":"/ month","features":["Unlimited Tips","x","x","x","x","x","x","x","x"]},{"name":"Basic","price":"\u20b9500","priceDetails":"/ month","features":["Premium Videos","Sell 20 different Courses","Sell 20 different Merchandise","Shipping Provider Integration","Unlimited Tips with User Messages","Free 100 GB of storage","Free 1000 hours of Video Views","Phone and Email support","x"]},{"name":"Pro","price":"\u20b912000","priceDetails":"/ month","features":["Premium Videos","Sell Unlimited Courses","Sell Unlimited Merchandise","Popular Ship Provider Integrations","Unlimited Tips with User Messages","Unlimited storage","Unlimited watch hours","Phone and Email support","Dedicated POC","Customizations"]}]}}'),l=function(){return(0,s.jsx)("div",{id:"about",className:"mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:(0,s.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:(0,s.jsxs)("a",{href:i.PL.secondaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10",children:[(0,s.jsx)(a.Z,{fontSize:"large",className:"text-primary"}),i.PL.secondaryAction.text]})})}),(0,s.jsx)("div",{className:"flex items-center mt-6",children:(0,s.jsxs)("p",{className:"mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50",children:["\xa9 ",(new Date).getFullYear()," all right reserved"," ",(0,s.jsx)("span",{className:"text-primary",children:i.S9.name})]})})]})})},o=n(1163),c=n(4298),d=n(4155).env.NEXT_PUBLIC_GOOGLE_ADS_ID,m=n(4155).env.NEXT_PUBLIC_GOOGLE_ANALYTICS,u=function(){var e=(0,o.useRouter)();return(0,r.useEffect)((function(){var t=function(e){!function(e){window.gtag("config",m,{page_path:e})}(e)};return e.events.on("routeChangeComplete",t),function(){e.events.off("routeChangeComplete",t)}}),[e.events]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.default,{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(m)}),(0,s.jsx)(c.default,{id:"gtag-init",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(m,"', {\n              page_path: window.location.pathname,\n            });\n          ")}}),(0,s.jsx)(c.default,{async:!0,src:d,crossOrigin:"anonymous"})]})},x=(0,r.createContext)({context:void 0}),h=function(){var e=(0,r.useState)(0),t=e[0],n=e[1],s=(0,r.useState)(0),a=s[0],i=s[1],l=(0,r.useCallback)((function(){n(window.innerWidth),i(window.innerHeight)}),[n,i]);return(0,r.useEffect)((function(){window.addEventListener("resize",l),l()}),[l]),{width:t,height:a}};var f=function e(t,n){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.draw=function(e,t,n,r){if(e.beginPath(),e.moveTo(0,n),!(s.waveLength.length<3)){for(var a=0;a<t;a++){var i,l,o,c,d=Math.sin(a*(null!==(l=null===(i=s)||void 0===i?void 0:i.waveLength[0])&&void 0!==l?l:0)-r),m=Math.sin(a*(null!==(o=s.waveLength[1])&&void 0!==o?o:0)-r),u=Math.sin(a*(null!==(c=s.waveLength[2])&&void 0!==c?c:0)-r);e.lineTo(2.5*a,n-400+d*m*u*200)}e.lineTo(t,n),e.fillStyle=s.color,e.fill(),e.closePath()}},this.waveLength=t,this.color=n};function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],s=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(o){r=!0,a=o}finally{try{s||null==l.return||l.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(){var e=(0,r.useContext)(x).context,t=h().width,n=.013,s={frontWave:new f([.0211,.028,.015],"rgb(60,167,212, 0.2)"),backWave:new f([.0122,.018,.005],"rgb(60,167,212, 0.1)")},a=function(){null===e||void 0===e||e.clearRect(0,0,t,600),Object.entries(s).forEach((function(s){g(s,2)[1].draw(e,t,600,n)})),n+=.013,requestAnimationFrame(a)};return e&&a(),null},p=function(){var e=(0,r.useRef)(null),t=h().width,n=(0,r.useState)(),a=n[0],i=n[1];return(0,r.useEffect)((function(){var t,n=null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getContext("2d");n&&i(n)}),[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(x.Provider,{value:{context:a},children:[(0,s.jsx)("canvas",{id:"canvas",ref:e,width:t,height:220}),(0,s.jsx)(v,{})]})})},j=n(7621),y=n(4167),b=n(7563),w=n(1859),N=function(){var e=i.R2,t=e.title,n=e.subtitle,r=e.description,a=e.items;return(0,s.jsx)("div",{className:"py-12 bg-background",id:"features",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"lg:text-center",children:[(0,s.jsx)("h2",{className:"text-base text-primary font-semibold tracking-wide uppercase",children:t}),(0,s.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:n}),(0,s.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:r})]}),(0,s.jsx)("div",{className:"mt-10",children:(0,s.jsx)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:a.map((function(e){return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-15 w-15 rounded-md bg-background text-tertiary",children:"Videos"==e.name?(0,s.jsx)(j.Z,{fontSize:"large",className:"text-secondary"}):"Courses"==e.name?(0,s.jsx)(y.Z,{fontSize:"large",className:"text-secondary"}):"Merchandise"==e.name?(0,s.jsx)(b.Z,{fontSize:"large",className:"text-secondary"}):(0,s.jsx)(w.Z,{fontSize:"large",className:"text-secondary"})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:e.name})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:e.description})]},e.name)}))})})]})})},k=n(1203),S=n(5685),P=n(3801),C=n(6261),E=function(){var e=i.G,t=i.S9,n=t.name,a=t.logo;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:(0,s.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),(0,s.jsxs)(k.J,{children:[(0,s.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[(0,s.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:(0,s.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[(0,s.jsxs)("a",{href:"#",children:[(0,s.jsx)("span",{className:"sr-only",children:n}),(0,s.jsx)("img",{alt:"logo",className:"h-16 w-auto sm:h-16",src:a})]}),(0,s.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:(0,s.jsxs)(k.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,s.jsx)(P.Oqj,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,s.jsx)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:e.map((function(e){return(0,s.jsx)(C.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)}))})]})}),(0,s.jsx)(S.u,{as:r.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsx)(k.J.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,s.jsxs)("div",{className:"rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden",children:[(0,s.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"h-8 w-auto",src:a,alt:""})}),(0,s.jsx)("div",{className:"-mr-2",children:(0,s.jsxs)(k.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,s.jsx)("span",{className:"sr-only",children:"Close main menu"}),(0,s.jsx)(P.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,s.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return(0,s.jsx)(C.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:e.name},e.name)}))})]})})})]})]})},T=n(6513),_=n(2688);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],s=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(o){r=!0,a=o}finally{try{s||null==l.return||l.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(e){var t=e.children,n=(0,T._)(),a=(0,r.useRef)(null),i=function(e,t){var n=void 0===t?"0px":t,s=(0,r.useState)(!1),a=s[0],i=s[1];return(0,r.useEffect)((function(){var t=null,s=new IntersectionObserver((function(e){var t=A(e,1)[0];(null===t||void 0===t?void 0:t.isIntersecting)&&i(null===t||void 0===t?void 0:t.isIntersecting)}),{rootMargin:n});return e&&(null===e||void 0===e?void 0:e.current)&&(t=e.current,s.observe(t)),function(){s.unobserve(t)}}),[e,n]),a}(a);return(0,r.useEffect)((function(){i&&n.start({x:0,opacity:1,transition:{duration:.5,ease:"easeOut"}})}),[i,n]),(0,s.jsx)(_.E.div,{className:"lazy-div",ref:a,initial:{opacity:0,x:-50},animate:n,children:t})},L=function(){var e=i.PL;return(0,s.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:(0,s.jsxs)("div",{className:"sm:text-center lg:text-left",children:[(0,s.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[(0,s.jsx)("span",{className:"block xl:inline",children:e.title})," ",(0,s.jsx)("span",{className:"block text-primary xl:inline",children:e.subtitle})]}),(0,s.jsx)("p",{className:"mt-3 text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:e.description}),(0,s.jsx)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:(0,s.jsx)("div",{className:"rounded-md shadow",children:(0,s.jsx)("a",{href:e.primaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10",children:e.primaryAction.text})})})]})})},O=function(){var e=i.PL;return(0,s.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:(0,s.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:e.img,alt:"happy team image"})})};function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],s=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(o){r=!0,a=o}finally{try{s||null==l.return||l.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(){var e=i.D,t=e.items,n=e.title,r=e.extra,a=F(t,3),l=a[0],o=a[1],c=a[2];return(0,s.jsx)("section",{className:"bg-background py-8",id:"pricing",children:(0,s.jsxs)("div",{className:"container mx-auto px-2 pt-4 pb-12 text-primary",children:[(0,s.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:n}),(0,s.jsx)("div",{className:"w-full p-4 text-xl text-green-400 font-bold text-center",children:r}),(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsx)("div",{className:"h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"})}),(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4",children:[(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4",children:[(0,s.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===l||void 0===l?void 0:l.name}),(0,s.jsx)("ul",{className:"w-full text-center text-sm",children:null===l||void 0===l?void 0:l.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(l.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center",children:[null===l||void 0===l?void 0:l.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===l||void 0===l?void 0:l.priceDetails]})]})})]}),(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10",children:[(0,s.jsxs)("div",{className:"flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"w-full p-8 text-3xl font-bold text-center",children:null===o||void 0===o?void 0:o.name}),(0,s.jsx)("div",{className:"h-1 w-full bg-primary my-0 py-0 rounded-t"}),(0,s.jsx)("ul",{className:"w-full text-center text-base font-bold",children:null===o||void 0===o?void 0:o.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===o||void 0===o?void 0:o.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-4xl font-bold text-center",children:[null===o||void 0===o?void 0:o.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===o||void 0===o?void 0:o.priceDetails]})]})})]}),(0,s.jsxs)("div",{className:"flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4",children:[(0,s.jsxs)("div",{className:"flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow",children:[(0,s.jsx)("div",{className:"p-8 text-3xl font-bold text-center border-b-4",children:null===c||void 0===c?void 0:c.name}),(0,s.jsx)("ul",{className:"w-full text-center text-sm",children:null===c||void 0===c?void 0:c.features.map((function(e){return(0,s.jsx)("li",{className:"border-b py-4",children:e},"".concat(null===c||void 0===c?void 0:c.name,"-").concat(e))}))})]}),(0,s.jsx)("div",{className:"flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6",children:(0,s.jsxs)("div",{className:"w-full pt-6 text-3xl text-gray-600 font-bold text-center",children:[null===c||void 0===c?void 0:c.price,(0,s.jsxs)("span",{className:"text-base",children:[" ",null===c||void 0===c?void 0:c.priceDetails]})]})})]})]})]})})},M=function(e){var t=e.width,n=void 0===t?"w-64":t;return(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsx)("div",{className:"h-1 mx-auto bg-primary ".concat(n," opacity-25 my-0 py-0 rounded-t mb-10")})})};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],s=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(s=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(o){r=!0,a=o}finally{try{s||null==l.return||l.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=function(){var e,t,n=i.O7,r=D(n.items,2),a=r[0],l=r[1];return(0,s.jsx)("section",{className:"bg-background py-8",id:"product",children:(0,s.jsxs)("div",{className:"container max-w-5xl mx-auto m-8",children:[(0,s.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:n.title.split(" ").map((function(e,t){return(0,s.jsxs)("span",{className:t%2?"text-primary":"text-border",children:[e," "]},t)}))}),(0,s.jsx)(M,{}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsxs)("div",{className:"w-5/6 sm:w-1/2 p-6 mt-20",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===a||void 0===a?void 0:a.title}),(0,s.jsx)("p",{className:"text-gray-700",children:null===a||void 0===a?void 0:a.description}),null===a||void 0===a||null===(e=a.points)||void 0===e?void 0:e.map((function(e){return(0,s.jsx)("li",{children:e})}))]}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6",src:null===a||void 0===a?void 0:a.img,alt:null===a||void 0===a?void 0:a.title})})]}),(0,s.jsxs)("div",{className:"flex flex-wrap flex-col-reverse sm:flex-row",children:[(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,s.jsx)("img",{className:"h-6/6",src:null===l||void 0===l?void 0:l.img,alt:null===l||void 0===l?void 0:l.title})}),(0,s.jsx)("div",{className:"w-full sm:w-1/2 p-6 mt-20",children:(0,s.jsxs)("div",{className:"align-middle",children:[(0,s.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===l||void 0===l?void 0:l.title}),(0,s.jsx)("p",{className:"text-gray-700 mb-8",children:null===l||void 0===l?void 0:l.description}),null===l||void 0===l||null===(t=l.points)||void 0===t?void 0:t.map((function(e){return(0,s.jsx)("li",{children:e})}))]})})]})]})})},R=function(){return(0,s.jsxs)("div",{className:"bg-background grid gap-y-16 overflow-hidden",children:[(0,s.jsxs)("div",{className:"relative bg-background",children:[(0,s.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,s.jsxs)("div",{className:"relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[(0,s.jsx)(E,{}),(0,s.jsx)(L,{})]})}),(0,s.jsx)(O,{})]}),(0,s.jsx)(I,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(U,{}),(0,s.jsx)(p,{})]})}),(0,s.jsx)(I,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(N,{}),(0,s.jsx)(p,{})]})}),(0,s.jsx)(I,{children:(0,s.jsx)(z,{})}),(0,s.jsx)(I,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(l,{})]})}),(0,s.jsx)(u,{})]})}}},function(e){e.O(0,[774,587,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);