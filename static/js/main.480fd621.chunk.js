(this.webpackJsonpAssignment3=this.webpackJsonpAssignment3||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(6),r=a.n(i),s=(a(14),a(8)),c=a(1),o=a(2),u=a(4),m=a(3),d=(a(15),function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("p",null,"Your data is being loaded. Please wait."))}),h=function(e){var t=e.taskDetails,a=e.deleteTask,n=t.length?t.map((function(e){var t=e.title,n=e.time,i=e.description,r=e.id;return l.a.createElement("div",{className:"task-card",key:r},l.a.createElement("h3",null,"Course Name: ",t," "),l.a.createElement("p",null,"Time: ",n),l.a.createElement("p",null,"Description:",l.a.createElement("i",null,i)),l.a.createElement("button",{className:"delete",onClick:function(){a(r)}},"Delete"))})):l.a.createElement(d,null);return l.a.createElement("div",{className:"task-display"},n)},p=(a(16),function(e){return l.a.createElement("div",{className:"nav"},l.a.createElement("h2",null,e.heading))}),k=a(7),f=(a(17),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={title:"",time:"",description:""},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTask(e.state),e.setState({title:"",time:"",description:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"add-form",onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"title"},"Task Name"),l.a.createElement("input",{type:"text",id:"title",placeholder:"enter task .....",onChange:this.handleChange,value:this.state.title})," ",l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"time"},"Timings"),l.a.createElement("input",{type:"time",id:"time",placeholder:"select time.....",onChange:this.handleChange,value:this.state.time})," ",l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"description"},"Description"),l.a.createElement("input",{type:"text",id:"description",placeholder:"enter description .....",onChange:this.handleChange,value:this.state.description})," ",l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add Task"}))}}]),a}(n.Component)),E=(a(18),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={heading:"TODO Planner",taskDetails:[]},e.addTask=function(t){console.log("Inside App.js",t),t.id=Math.ceil(100*Math.random());var a=[].concat(Object(s.a)(e.state.taskDetails),[t]);console.log("New Task Details Array",a),e.setState({taskDetails:a})},e.deleteTask=function(t){var a=e.state.taskDetails.filter((function(e){return e.id!==t}));e.setState({taskDetails:a})},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{heading:this.state.heading}),l.a.createElement(h,{taskDetails:this.state.taskDetails,deleteTask:this.deleteTask,editTask:this.editTask}),l.a.createElement(f,{addTask:this.addTask}))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.480fd621.chunk.js.map