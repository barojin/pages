(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(8),i=s.n(c),r=(s(13),s(2)),l=s(3),o=s(5),j=s(4),b=s(0);function d(e){return Object(b.jsx)("h3",{children:e.date.toLocaleTimeString()})}var h=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={date:new Date},n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)(d,{date:this.state.date}),Object(b.jsx)("br",{})]})}}]),s}(a.a.Component),m=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(r.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"resume-section",id:"about",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsxs)("h1",{className:"mb-0",children:["Hojin",Object(b.jsx)("span",{className:"text-primary",children:" Nam"})]}),Object(b.jsxs)("div",{className:"subheading mb-5",children:[Object(b.jsxs)("a",{children:["San Mateo, California, United States",Object(b.jsx)("br",{})]}),Object(b.jsx)("a",{href:"mailto:name@email.com",children:" barojins@gmail.com"})]}),Object(b.jsxs)("p",{className:"lead mb-5",children:["Software engineer based on CS fundamentals,",Object(b.jsx)("br",{}),"deliver a solid software product with frameworks and tools."]}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)("a",{className:"social-icon",href:"https://www.linkedin.com/in/barojin/",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(b.jsx)("a",{className:"social-icon",href:"https://github.com/barojin/",children:Object(b.jsx)("i",{className:"fab fa-github"})})]}),Object(b.jsx)(h,{})]})}),Object(b.jsx)("hr",{className:"m-0"})]})}}]),s}(n.Component),u=s(6),O=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("li",{children:this.props.value})}}]),s}(a.a.PureComponent),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return this.props.show?Object(b.jsx)("ul",{children:this.props.contents.map((function(e){return Object(b.jsx)(O,{value:e},e.toString())}))}):null}}]),s}(a.a.Component),p=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={showContent:!0},n.handleToggleClick=n.handleToggleClick.bind(Object(u.a)(n)),n}return Object(l.a)(s,[{key:"handleToggleClick",value:function(){this.setState((function(e){return{showContent:!e.showContent}}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5",children:[Object(b.jsxs)("div",{className:"flex-grow-1",children:[Object(b.jsx)("div",{className:"subheading",type:"button",onClick:this.handleToggleClick,children:this.props.jobTitle}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("a",{href:this.props.url,children:this.props.company})," | ",this.props.location]}),Object(b.jsx)(x,{contents:this.props.contents,show:this.state.showContent}),Object(b.jsx)("button",{type:"button",class:"btn btn-light",onClick:this.handleToggleClick,children:this.state.showContent?"-":"+"})]}),Object(b.jsx)("div",{className:"flex-shrink-0",children:Object(b.jsx)("span",{className:"text-primary",children:this.props.date})})]})}}]),s}(a.a.Component),f=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={contents:["Create task automation(dynamic-link library, C#, .NET) on Windows server with an open-source(selenium). The service reduced the time for the laborious task in the accounting department, which manually fetched bank statements of various online banking services, from a few hours to a second, and released it to production.","Build the test automation environment in various Operating Systems (OS) on VMware for operational acceptance and regression testing in an exploratory approach. The corner, critical, and custom cases by analyzing error logs and defects from the beta users are considered. It cut off the beta version error rate by 99%.","Create new UIs, modify legacy functions in Windows Apps and query statements for Oracle SQL, write the documentation for the creation, and modification that I made.","Build a responsive web page with AngularJS to support several dashboards in order to monitor server health and enable controlling the on-Premises service on the local server remotely for on-call team members."]},n}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"resume-section",id:"experience",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsx)("h2",{className:"mb-5",children:"Experience"}),Object(b.jsx)(p,{jobTitle:"Software Developer",url:"http://gscms.co.kr/",company:"GSCMS Corporation",location:"Seoul, South Korea",date:"Feburary 2017 - December 2018",contents:this.state.contents})]})}),Object(b.jsx)("hr",{className:"m-0"})]})}}]),s}(n.Component),v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"resume-section",id:"education",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsx)("h2",{className:"mb-5",children:"Education"}),Object(b.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5",children:[Object(b.jsxs)("div",{className:"flex-grow-1",children:[Object(b.jsx)("h3",{className:"mb-0",children:"Cal State University East-bay, Hayward, CA"}),Object(b.jsx)("div",{className:"subheading mb-3",children:"M.S. in Computer Science"})]}),Object(b.jsx)("div",{className:"flex-shrink-0",children:Object(b.jsx)("span",{className:"text-primary",children:"Jan 2019 - May 2021"})})]}),Object(b.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5",children:[Object(b.jsxs)("div",{className:"flex-grow-1",children:[Object(b.jsx)("h3",{className:"mb-0",children:"Samsung Multicampus, Seoul, South Korea"}),Object(b.jsx)("div",{className:"subheading mb-3",children:"Android developer course"})]}),Object(b.jsx)("div",{className:"flex-shrink-0",children:Object(b.jsx)("span",{className:"text-primary",children:"May 2016 - Nov 2016"})})]}),Object(b.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between mb-5",children:[Object(b.jsxs)("div",{className:"flex-grow-1",children:[Object(b.jsx)("h3",{className:"mb-0",children:"Sejong University, Seoul, South Korea"}),Object(b.jsx)("div",{className:"subheading mb-3",children:"B.S in Electronic Engineering"})]}),Object(b.jsx)("div",{className:"flex-shrink-0",children:Object(b.jsx)("span",{className:"text-primary",children:"Mar 2009 - Aug 2015"})})]})]})}),Object(b.jsx)("hr",{className:"m-0"})]})}}]),s}(n.Component),g=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"resume-section",id:"skills",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsx)("h2",{className:"mb-5",children:"Skills"}),Object(b.jsx)("div",{className:"subheading mb-3",children:"Programming Languages"}),Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Proficient: Python"})}),Object(b.jsx)("p",{children:"Java, C#, Javascript, HTML5, CSS, MySQL"}),Object(b.jsx)("div",{className:"subheading mb-3",children:"Framework & Library"}),Object(b.jsx)("p",{children:"Django, React, .NET, Spring, node.js"}),Object(b.jsx)("div",{className:"subheading mb-3",children:"Tools"}),Object(b.jsx)("p",{children:"Git, AWS(EC2, Dynamodb, S3, Lambda), Docker, VMware"}),Object(b.jsxs)("ul",{className:"list-inline dev-icons",children:[Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-java"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-python"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-microsoft"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-js-square"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-html5"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-css3-alt"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-react"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fab fa-node-js"})})]})]})}),Object(b.jsx)("hr",{className:"m-0"})]})}}]),s}(n.Component),N=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"resume-section",id:"interests",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsx)("h2",{className:"mb-5",children:"Interests"}),Object(b.jsx)("p",{children:"Rock climbing, Dancing, Singing, Cooking, Biking"}),Object(b.jsxs)("ul",{className:"list-inline dev-icons",children:[Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fas fa-bicycle"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fas fa-music"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fas fa-microphone"})}),Object(b.jsx)("li",{className:"list-inline-item",children:Object(b.jsx)("i",{className:"fas fa-bread-slice"})})]})]})}),Object(b.jsx)("hr",{className:"m-0"})]})}}]),s}(n.Component),k=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("section",{className:"resume-section",id:"awards",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsx)("h2",{className:"mb-5",children:"Awards & Certifications"}),Object(b.jsx)("ul",{className:"fa-ul mb-0",children:Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"fa-li",children:Object(b.jsx)("i",{className:"fas fa-trophy text-warning"})}),"AWS Certified Cloud Practitioner"]})})]})})})}}]),s}(n.Component),y=s.p+"static/media/profile.57fc99ab.jpg",w=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav",children:[Object(b.jsxs)("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top",children:[Object(b.jsx)("span",{className:"d-block d-lg-none",children:"Hojin Nam"}),Object(b.jsx)("span",{className:"d-none d-lg-block",children:Object(b.jsx)("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:y,alt:"..."})})]}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#about",children:"About"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#experience",children:"Experience"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#projects",children:"Projects"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#skills",children:"Skills"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#education",children:"Education"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#interests",children:"Interests"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#awards",children:"Awards"})})]})})]})})}}]),s}(n.Component),C=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={showContent:!1},n.handleToggleClick=n.handleToggleClick.bind(Object(u.a)(n)),n}return Object(l.a)(s,[{key:"handleToggleClick",value:function(){this.setState((function(e){return{showContent:!e.showContent}}))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"d-flex flex-column flex-md-row justify-content-between",children:Object(b.jsxs)("div",{className:"flex-grow-1",children:[Object(b.jsxs)("h4",{className:"mb-0",type:"button",onClick:this.handleToggleClick,children:[Object(b.jsx)("a",{className:"social-icon",href:this.props.gitUrl,children:Object(b.jsx)("i",{className:"fab fa-github"})})," ",this.props.title," ",Object(b.jsx)("span",{className:"text-primary",children:this.props.techStack})]}),Object(b.jsx)(x,{contents:this.props.content,show:this.state.showContent}),Object(b.jsx)("button",{type:"button",class:"btn btn-light",onClick:this.handleToggleClick,children:this.state.showContent?"-":"+"})]})})}}]),s}(a.a.Component),S=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){return Object(r.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("section",{className:"resume-section",id:"projects",children:Object(b.jsxs)("div",{className:"resume-section-content",children:[Object(b.jsx)("h2",{className:"mb-5",children:"Projects"}),Object(b.jsx)(C,{gitUrl:"https://github.com/barojin/DjangoTutorial",title:"Polls Web App",techStack:"[python, Django framework, Sqlite3]",content:["Create the website that shows polls and vote in them and admin site provide the add, change, and delete polls. It contains how to handle the route, models in the Database, automated testing, views and templates, admin page conventions, packaging to deploy and patching with git."]}),Object(b.jsx)(C,{gitUrl:"#Projects",title:"Covid Case Tracker",techStack:"[AWS(Lambda, S3, Step functions, CloudWatch, Lightsail), Python]",content:["Covid Case Tracker, Implemented a covid case tracker that pulls the number of new cases all over the world everyday from CDC website and displays the plotted trend graph on WordPress website using AWS lightsail. Used AWS Lambda to run .py code and stored files in S3. Implemented AWS Cloudwatch once the numbers increase significantly for a certain country."]}),Object(b.jsx)(C,{gitUrl:"https://github.com/barojin/Microservice_Spring",title:"Microservices on Spring",techStack:"[Java, Spring framework, JPA, h2, HATEOAS, Netflix Eureka]",content:["Implemented Login service which stores user info and validates the request invoked and Post service which is for CRUD of the post and communication of each service via Eureka server dispatcher."]}),Object(b.jsx)(C,{gitUrl:"https://github.com/barojin/DuckNQuiz",title:"Strategy Pattern implementation",techStack:"[Java, JUnit]",content:["Contains the abstract class which is HAS-A relation and the interface which is extended to concrete implementation classes. The objects for the client are assigned at runtime and it is tested based on equivalence classes in JUnit jupiter."]}),Object(b.jsx)(C,{gitUrl:"https://github.com/barojin/WRN",title:"Web App with React.js, Node.js",techStack:"[JavaScript, React, Node, NeDB, RESTful]",content:["Implemented CRUD table, role-based access control, session cookies on the front-end with Reactjs, encrypted password, REST architecture, test functions with Promise to manage asynchronous executions on the back-end with Nodejs."]}),Object(b.jsx)(C,{gitUrl:"https://github.com/barojin/PMC",title:"Bounded-buffer problem",techStack:"[C, semaphore, Ubuntu]",content:["Used the POSIX Threads(pthreads), semaphore to control access to shared resources. There are three functions such that producer which writes an element in buffer A, consumer which removes an element in buffer B, middleman which moves an element from A to B."]}),Object(b.jsx)(C,{gitUrl:"https://github.com/barojin/MMSMCUDA",title:"Compute Unified Device Architecture(CUDA) programming with shared memory",techStack:"[C++, CUDA Toolkit]",content:["Optimized the use of memory between threads on parallel computing to maximize the bandwidth. It avoids redundant transfers by loading and storing data in a coalesced pattern to shared memory from global memory."]}),Object(b.jsx)(C,{gitUrl:"https://github.com/barojin/PTEMPI/blob/main/cpi.c",title:"Prouhet\u2013Tarry\u2013Escott problem on Message Passing Interface(MPI)",techStack:"[C, Message Passing Interface library]",content:["Implemented MPI parallel program  parallelizing the operation between 16 threads on a computer cluster and compared the performance of  O(2n) computation between on single laptop and cluster computers."]})]})})})}}]),s}(n.Component);var T=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{}),Object(b.jsxs)("div",{className:"container-fluid p-0",children:[Object(b.jsx)(m,{}),Object(b.jsx)(f,{}),Object(b.jsx)(S,{}),Object(b.jsx)(k,{}),Object(b.jsx)(g,{}),Object(b.jsx)(v,{}),Object(b.jsx)(N,{})]})]})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),A()}},[[15,1,2]]]);
//# sourceMappingURL=main.d528f5dc.chunk.js.map