(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(163)},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),s=(a(124),a(31)),l=a(9),c=a(10),u=a(12),h=a(11),d=a(13),m=(a(125),a(18)),g=(a(126),a(17)),p=a(60),f=a.n(p),b=(a(84),a(201)),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"text",width:"50%",height:"30px",animation:"wave"}),r.a.createElement(b.a,{variant:"text",width:"100%",height:"100px",animation:"wave"}),r.a.createElement(b.a,{variant:"text",width:"100%",height:"50px",animation:"wave"}),r.a.createElement(b.a,{variant:"text",width:"50%",height:"30px",animation:"wave"}),r.a.createElement(b.a,{variant:"text",width:"100%",height:"100px",animation:"wave"}),r.a.createElement(b.a,{variant:"text",width:"100%",height:"50px",animation:"wave"}))}}]),t}(n.Component),y=a(63),v=a.n(y),O=a(64),j=a.n(O),S=a(54),x=a(219);var C=function(e){var t=e.open,a=e.message,n=e.handleClose,o=e.autoHideDuration;return r.a.createElement("div",null,r.a.createElement(x.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t,onClose:n,message:a,autoHideDuration:o||5e3}))},k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleCopy=function(){e.setState({snackbar:!0,message:"copied.",autoHideDuration:2e3})},e.handleSnackbarClose=function(){e.setState({snackbar:!1,message:""})},e.handleTranslateEnglish=function(t,a){e.setState({snackbar:!0,message:"translating...",autoHideDuration:3e4});var n=document.getElementsByClassName("div".concat(a))[3].innerHTML;Object(S.setCORS)("https://cors-anywhere.herokuapp.com/")(n,{to:"en"}).then(function(t){e.setState({message:t.text,snackbar:!0})}).catch(function(e){console.error(e)})},e.handleTranslateUrdu=function(t,a){e.setState({snackbar:!0,message:"translating...",autoHideDuration:5e4});var n=document.getElementsByClassName("div".concat(a))[3].innerHTML;Object(S.setCORS)("https://cors-anywhere.herokuapp.com/")(n,{to:"ur"}).then(function(t){e.setState({message:t.text,snackbar:!0})}).catch(function(e){console.error(e)})},e.state={pageSize:3,snackbar:!1,message:"",autoHideDuration:2e3},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.state.pageSize,a=this.props,n=a.title,o=a.content,i=a.poet,s=a.relatedTags,l=a.totalShayaris,c=a.theme,u={backgroundColor:"#363537",color:"white",transition:"0.5s",border:"none"},h={boxShadow:"0 0 4px 1px gainsboro"};return n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center",fontFamily:"Alconica"}},10*Math.floor(l/10),"+ Shayaris"),n.slice(0,t).map(function(t,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{className:"shayariCard div".concat(a),style:"dark"===c?h:null},r.a.createElement("div",{className:"shayariCardHeader div".concat(a)},r.a.createElement("button",{style:"dark"===c?u:null,className:"translateBtn",onClick:function(t){return e.handleTranslateEnglish(t,a)}},"English"),r.a.createElement("button",{style:"dark"===c?u:null,className:"translateBtn",onClick:function(t){return e.handleTranslateUrdu(t,a)}},"Urdu"),r.a.createElement(v.a,{style:"dark"===c?u:null,className:"copyBtn","data-clipboard-text":t.charAt(0).toUpperCase()+t.slice(1)+"\n"+o[a].charAt(0).toUpperCase()+o[a].slice(1)+"\nbestshayaris.com",onClick:e.handleCopy},r.a.createElement(j.a,null))),r.a.createElement("div",{className:"shayariCardTitle div".concat(a)},t),r.a.createElement("br",null),r.a.createElement("div",{className:"shayariCardContent div".concat(a)},o[a]),r.a.createElement("div",{className:"div".concat(a),style:{textAlign:"center"}},r.a.createElement("span",null,i[a]))),r.a.createElement("hr",null),r.a.createElement(f.a,{slidesPerPage:4,slidesPerScroll:4,keepDirectionWhenDragging:!0},s[a].map(function(e){return r.a.createElement(g.b,{to:"/tags/".concat(e,"/"),style:"dark"===c?u:null,className:"tagCards",key:e},e)})),r.a.createElement("hr",null))}),t<n.length?r.a.createElement("div",{className:"seeMoreDiv",onClick:function(t){return e.setState(function(e){return{pageSize:e.pageSize+3}})}},r.a.createElement("span",{className:"seeMoreSpan"},"see more")):null,r.a.createElement(C,{autoHideDuration:this.state.autoHideDuration,open:this.state.snackbar,message:this.state.message,handleClose:this.handleSnackbarClose})):r.a.createElement(E,null)}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Error404"))}}]),t}(n.Component),T=a(15),A=a.n(T),N=(a(45),a(92)),z=(a(158),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).fetchContent=function(){var e={},t={},n={},r={};A.a.firestore().collection("tags").doc(a.props.tag).collection("shayaris").limit(10).orderBy("timestamp","desc").get().then(function(o){var i=0;o.forEach(function(a){Object.assign(e,Object(s.a)({},i,a.data().title)),Object.assign(t,Object(s.a)({},i,a.data().content)),Object.assign(n,Object(s.a)({},i,a.data().poet)),Object.assign(r,Object(s.a)({},i,a.data().tags.map(function(e){return e.toLowerCase()}))),i++}),A.a.firestore().collection("tags").doc(a.props.tag).get().then(function(o){a.setState(function(i){return{shayariObject:Object.assign({},i.shayariObject,Object(s.a)({},a.props.tag,Object(N.a)({},i.shayariObject[a.props.tag],{titleObject:e,contentObject:t,poetObject:n,relatedTagsObject:r,totalShayaris:o.data().totalShayaris})))}},function(){a.props.putIntoShayariObject(a.state.shayariObject)})})})},a.handleContentClick=function(e,t){e.target.innerHTML=t},a.handleSnackbarClose=function(){a.setState({snackbar:!1,message:""})},a.handleCopy=function(){a.setState({snackbar:!0,message:"copied.",autoHideDuration:2e3})},a.handleTranslateEnglish=function(e,t){a.setState({snackbar:!0,message:"translating...",autoHideDuration:5e4});var n=document.getElementsByClassName("div".concat(t))[3].innerHTML;Object(S.setCORS)("https://cors-anywhere.herokuapp.com/")(n,{to:"en"}).then(function(e){a.setState({message:e.text,snackbar:!0})}).catch(function(e){console.error(e)})},a.handleTranslateUrdu=function(e,t){a.setState({snackbar:!0,message:"translating...",autoHideDuration:3e4});var n=document.getElementsByClassName("div".concat(t))[3].innerHTML;Object(S.setCORS)("https://cors-anywhere.herokuapp.com/")(n,{to:"ur"}).then(function(e){a.setState({message:e.text,snackbar:!0})}).catch(function(e){console.error(e)})},a.handleSeeMore=function(){a.setState(function(e){return{pageSize:e.pageSize+5}})},a.state={shayariObject:Object.assign({},e.shayariObject),snackbar:!1,pageSize:5,message:"",autoHideDuration:2e3},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(){this.setState(function(e){return{pageSize:5}}),window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=this.props,a=t.tag,n=t.theme,o=this.state,i=o.shayariObject,s=o.pageSize,l=o.message,c=o.autoHideDuration,u={backgroundColor:"#363537",color:"white",transition:"0.5s",border:"none"},h={boxShadow:"0 0 4px 1px gainsboro"};if(i[a]){var d=i[a].titleObject,m=i[a].contentObject,p=i[a].poetObject,b=i[a].relatedTagsObject;return r.a.createElement("div",{id:"tagPage"},r.a.createElement("h2",{style:{textAlign:"center",textTransform:"capitalize"}},a,"(",i[a].totalShayaris,")"),r.a.createElement("hr",null),i[a].titleObject[0]?Object.keys(d).slice(0,s).map(function(t,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{className:"shayariCard div".concat(a),style:"dark"===n?h:null},r.a.createElement("div",{className:"shayariCardHeader div".concat(a)},r.a.createElement("button",{style:"dark"===n?u:null,className:"translateBtn",onClick:function(t){return e.handleTranslateEnglish(t,a)}},"English"),r.a.createElement("button",{style:"dark"===n?u:null,className:"translateBtn",onClick:function(t){return e.handleTranslateUrdu(t,a)}},"Urdu"),r.a.createElement(v.a,{style:"dark"===n?u:null,className:"copyBtn","data-clipboard-text":d[a].charAt(0).toUpperCase()+d[a].slice(1)+"\n"+m[a].charAt(0).toUpperCase()+m[a].slice(1)+"\nbestshayaris.com",onClick:e.handleCopy},r.a.createElement(j.a,null))),r.a.createElement("div",{className:"div".concat(a," shayariCardTitle")},d[a].charAt(0).toUpperCase()+d[a].slice(1)),r.a.createElement("br",null),r.a.createElement("div",{className:"div".concat(a," shayariCardContent"),onClick:function(t){return e.handleContentClick(t,m[a])}},m[a].length>200?m[a].substring(0,200)+"....":m[a]),r.a.createElement("div",{className:"shayariCardPoet"},r.a.createElement("span",null,p[a]))),r.a.createElement("hr",null),r.a.createElement(f.a,{slidesPerPage:4,slidesPerScroll:4,keepDirectionWhenDragging:!0},b[a].map(function(e){return r.a.createElement(g.b,{style:"dark"===n?u:null,to:"/tags/".concat(e),className:"tagCards",key:e},e)})),r.a.createElement("hr",null))}):r.a.createElement(r.a.Fragment,null,this.fetchContent(),r.a.createElement(E,null)),i[a].totalShayaris>s?r.a.createElement("div",{className:"seeMoreDiv",onClick:function(){return e.handleSeeMore()}},r.a.createElement("span",{className:"seeMoreSpan"},"See more")):null,r.a.createElement(C,{autoHideDuration:c,open:this.state.snackbar,message:l,handleClose:this.handleSnackbarClose}))}return this.fetchContent(),r.a.createElement(E,null)}}]),t}(n.Component)),D=a(104),I=a(211),H=a(207),F=a(215),L=a(220),M=a(208),B=a(217),U=a(221),P=a(222),W=(a(159),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleTagChange=function(e){a.setState(function(t){return{tags:e.target.value}})},a.handleTitleChange=function(e){a.setState({title:e.target.value,titleAvailable:!0}),a.props.tags.map(function(t){A.a.firestore().collection("tags").doc(t).collection("shayaris").where("title","==",e.target.value).get().then(function(e){e.forEach(function(e){e.exists&&a.setState({titleAvailable:!1})})}).catch(function(e){alert(e.message)})})},a.handleContentChange=function(e){a.setState({content:e.target.value})},a.handlePoetChange=function(e){a.setState({poet:e.target.value})},a.searchStringInArray=function(e,t){for(var a=0;a<t.length;a++)if(t[a].match(e))return a;return 0},a.finalUpload=function(){var e=a.state.tags,t=a.state.title.trim(),n=a.state.content.trim(),r=a.state.poet.trim();a.state.tags.forEach(function(o,i){A.a.firestore().collection("tags").doc(o).update({totalShayaris:A.a.firestore.FieldValue.increment(1)}).then(function(){A.a.firestore().collection("tags").doc(o).collection("shayaris").doc().set({title:t,content:n,timestamp:A.a.firestore.FieldValue.serverTimestamp(),tags:e,poet:r}).then(function(){i===e.length-1&&(a.setState({title:"",content:"",poet:"",tags:[],newTagInput:!1,newTagInputValue:"",uploading:!1}),alert("uploaded"))}).catch(function(e){alert(e.message)})}).catch(function(e){alert("cannot upload due to some error.")})})},a.upload=function(){var e=a.state.title.trim(),t=a.state.content.trim(),n=a.state.newTagInputValue.trim();e?t?(a.setState({uploading:!0}),""!==n?a.searchStringInArray(n,a.props.tags)?(alert("Your new tag is not new.It is already available."),a.setState({uploading:!1})):(a.setState(function(e){return{tags:[].concat(Object(D.a)(e.tags),[n])}}),A.a.firestore().collection("tags").doc(n).set({totalShayaris:0}).then(function(){a.finalUpload()})):a.finalUpload()):(alert("content cannot be empty."),console.log("empty content")):(alert("title cannot be empty"),console.log("empty title"))},a.showNewTagInput=function(){a.setState({newTagInput:!a.state.newTagInput})},a.handleNewTag=function(e){a.setState({newTagInputValue:e.target.value})},a.authMe=function(e){""!==a.state.password&&a.state.password===e.target.value&&a.setState({authenticated:!0})},a.state={authenticated:!0,password:"",title:"",content:"",poet:"",tags:[],newTagInput:!1,newTagInputValue:"",uploading:!1,titleAvailable:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.a.firestore().collection("password").doc("auth").get().then(function(t){e.setState({password:t.data().password})})}},{key:"render",value:function(){var e=this;return this.state.authenticated?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(H.a,null,r.a.createElement(L.a,{htmlFor:"select-multiple-chip"},"Tag"),r.a.createElement(F.a,{multiple:!0,value:this.state.tags,onChange:function(t){return e.handleTagChange(t)},input:r.a.createElement(M.a,{id:"select-multiple-checkbox"}),renderValue:function(e){return e.join(", ")}},this.props.tags.map(function(t){return r.a.createElement(I.a,{key:t,value:t},r.a.createElement(B.a,{checked:e.state.tags.indexOf(t)>-1}),r.a.createElement(U.a,{primary:t}))})),r.a.createElement("button",{className:"newTagBtn",onClick:this.showNewTagInput},"New Tag"),this.state.newTagInput?r.a.createElement(P.a,{label:"New Tag",placeholder:"type your tag",value:this.state.newTagInputValue.toLowerCase(),onChange:this.handleNewTag}):null,r.a.createElement(P.a,{label:"Title",placeholder:"Choose title wisely",margin:"normal",value:this.state.title,onChange:function(t){return e.handleTitleChange(t)}}),this.state.titleAvailable?null:r.a.createElement("div",{style:{color:"red"}},"This title is not available."),r.a.createElement(P.a,{label:"Content",placeholder:"Write beyond imagination",multiline:!0,margin:"normal",value:this.state.content,onChange:function(t){return e.handleContentChange(t)}}),r.a.createElement(P.a,{label:"Poet",placeholder:"Poet",margin:"normal",value:this.state.poet,onChange:function(t){return e.handlePoetChange(t)}}),r.a.createElement("button",{type:"submit",onClick:this.upload,className:"uploadBtn",disabled:this.state.uploading},"Upload"))):r.a.createElement("input",{placeholder:"password",onChange:function(t){return e.authMe(t)}})}}]),t}(n.Component)),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){console.log(a.props.relatedTags),a.props.relatedTags.forEach(function(e,t){A.a.firestore().collection("tags").doc(e).collection("shayaris").where("title","==",a.props.title).get().then(function(n){n.forEach(function(n){n.ref.delete().then(function(){A.a.firestore().collection("tags").doc(e).update({totalShayaris:A.a.firestore.FieldValue.increment(-1)}).then(function(){A.a.firestore().collection("tags").doc(e).get().then(function(t){0===t.data().totalShayaris&&A.a.firestore().collection("tags").doc(e).delete()}),t===a.props.relatedTags.length-1&&a.props.closeEditing()})}).catch(function(e){alert(e.message)})})})})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.content,o=t.relatedTags;return r.a.createElement("div",null,r.a.createElement("div",{id:"editTitle"},a),r.a.createElement("div",{id:"editContent"},n),r.a.createElement("div",null,o.join(", ")),r.a.createElement("button",{onClick:function(t){return e.handleDelete(t)}},"Delete"))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleTagChange=function(e){a.setState({tag:e.target.value})},a.fetchPosts=function(){var e=[],t=[],n=[],r=[],o={};A.a.firestore().collection("tags").doc(a.state.tag).collection("shayaris").get().then(function(i){var l=0;i.forEach(function(a){e.push(a.data().title),t.push(a.data().content),n.push(a.id),r.push(a.data().timestamp),Object.assign(o,Object(s.a)({},l,a.data().tags)),l++}),a.setState(function(a){return{title:e,content:t,timestamp:r,id:n,relatedTags:o}})})},a.authMe=function(e){""!==a.state.password&&a.state.password===e.target.value&&a.setState({authenticated:!0})},a.closeEditing=function(){a.setState({editing:!1,open:!0,message:"successfully deleted",title:[],content:[],id:[],relatedTags:{}})},a.handleSnackbarClose=function(){a.setState({open:!1,message:""})},a.state={tag:"",title:[],content:[],timestamp:[],id:[],authenticated:!1,password:"",relatedTags:{},editing:!1,i:-1,open:!1,message:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.a.firestore().collection("password").doc("auth").get().then(function(t){e.setState({password:t.data().password})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.i,n=t.title,o=t.content,i=t.relatedTags,s=t.id,l=t.timestamp,c=t.tag;return this.state.authenticated?this.state.editing?r.a.createElement(V,{tag:c,relatedTags:i[a],title:n[a],content:o[a],timestamp:l[a],id:s[a],closeEditing:this.closeEditing}):r.a.createElement("div",null,r.a.createElement("select",{value:c,onChange:function(t){return e.handleTagChange(t)}},r.a.createElement("option",{value:""},"--select a tag--"),this.props.tags.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("button",{onClick:this.fetchPosts,disabled:!c},"Fetch posts"),n.map(function(t,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("div",{className:"div".concat(a),onClick:function(t){return e.setState({editing:!0,i:a})}},r.a.createElement("div",{className:"div".concat(a)},t),r.a.createElement("br",null),r.a.createElement("div",{className:"div".concat(a)},o[a]),r.a.createElement("div",null,i[a].join(", "))),r.a.createElement("hr",null))}),r.a.createElement(C,{open:this.state.open,message:this.state.message,handleClose:this.handleSnackbarClose})):r.a.createElement("input",{placeholder:"password",onChange:function(t){return e.authMe(t)}})}}]),t}(n.Component),_=a(97),Z=a.n(_),G=a(218),J=a(93),K=a.n(J),Y=a(94),$=a.n(Y),q=a(72),Q=a.n(q),X=a(95),ee=a.n(X),te=a(212),ae=a(213),ne=a(210),re=a(165),oe=a(96),ie=a.n(oe),se=a(4),le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).toggleDrawer=function(){a.setState({open:!a.state.open})},a.state={open:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a={textDecoration:"none",color:"black"};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{fontSize:"large",onClick:this.toggleDrawer}),r.a.createElement(G.a,{classes:{paper:"dark"===this.props.theme?t.paper:null},anchor:"left",open:this.state.open,onClose:this.toggleDrawer},r.a.createElement("div",{role:"presentation",onClick:function(){return e.toggleDrawer()},onKeyDown:function(){return e.toggleDrawer()}},r.a.createElement(ne.a,null,r.a.createElement(g.b,{to:"/",style:a},r.a.createElement(re.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(K.a,null)),r.a.createElement(U.a,null,"Home"))),r.a.createElement(g.b,{to:"/about",style:a},r.a.createElement(re.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement($.a,null)),r.a.createElement(U.a,null,"About Us"))),r.a.createElement(g.b,{to:"/suggest",style:a},r.a.createElement(re.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(ee.a,null)),r.a.createElement(U.a,null,"Suggestions?"))),r.a.createElement(ae.a,null),r.a.createElement(g.b,{to:"/tags/sher",style:a},r.a.createElement(re.a,{button:!0},r.a.createElement(U.a,null,"Sher"),r.a.createElement(te.a,null,r.a.createElement(Q.a,null)))),r.a.createElement(g.b,{to:"/tags/ghazal",style:a},r.a.createElement(re.a,{button:!0},r.a.createElement(U.a,null,"Ghazal"),r.a.createElement(te.a,null,r.a.createElement(Q.a,null)))),r.a.createElement(g.b,{to:"/tags/poems",style:a},r.a.createElement(re.a,{button:!0},r.a.createElement(U.a,null,"Poems"),r.a.createElement(te.a,null,r.a.createElement(Q.a,null)))),r.a.createElement(ae.a,null),r.a.createElement("a",{href:"https://www.facebook.com/hindishayarisbest/?modal=admin_todo_tour",target:"_blank",rel:"noopener noreferrer",style:a},r.a.createElement(re.a,{button:!0},r.a.createElement(te.a,null,r.a.createElement(ie.a,null))))))))}}]),t}(n.Component),ce=Object(se.a)({paper:{background:"#A9A9A9"}})(le),ue=(a(160),a(98)),he=a.n(ue),de=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleInputFocus=function(e){a.setState({searching:!0})},a.handleInputChange=function(e){a.setState({searchingWord:e.target.value,searchingList:a.props.tags.filter(function(t){return 0===t.toLowerCase().indexOf(e.target.value.toLowerCase())})})},a.handleInputClick=function(e){a.setState({searching:!0,searchingWord:e.target.value,searchingList:a.props.tags,showCross:!0})},a.closeSearch=function(){a.setState({searching:!1,searchingWord:"",searchingList:a.props.tags,showCross:!1})},a.state={searching:!1,searchingWord:"",searchingList:"",showCross:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.shayariObject,a={color:"white"};return r.a.createElement(r.a.Fragment,null,this.state.searching?window.addEventListener("popstate",function(){return e.setState({searching:!1,searchingWord:""})}):null,this.state.searching?r.a.createElement("input",{autoFocus:!0,style:"dark"===this.props.theme?{position:"absolute",boxSizing:"border-box",padding:"5px",border:"none",left:"0",width:"100%",margin:"0",height:"35px",color:"white",backgroundColor:"#363537"}:{position:"absolute",boxSizing:"border-box",padding:"5px",border:"none",left:"0",width:"100%",margin:"0",height:"35px"},placeholder:"search tag...",maxLength:"30",value:this.state.searchingWord||"",onChange:function(t){return e.handleInputChange(t)}}):r.a.createElement("div",{style:{position:"absolute",right:"12px",top:"6px",width:"40px",textAlign:"center"},onClick:function(t){return e.handleInputClick(t)}},r.a.createElement(he.a,null)),r.a.createElement("div",{style:{color:"red",paddingTop:"6px",textAlign:"center"},hidden:!this.state.showCross,onClick:function(){return e.closeSearch()}},"close search",r.a.createElement("hr",null)),this.state.searching?r.a.createElement("div",{id:"searchingListParent"},r.a.createElement("ul",{className:"searchingList",onClick:function(){return e.closeSearch()}},this.state.searchingList.map(function(n,o){return r.a.createElement(g.b,{key:n,to:"/tags/".concat(n),className:"searchingListItemLink"},r.a.createElement("li",{className:"searchingListItem",style:"dark"===e.props.theme?a:null},n.toLowerCase(),r.a.createElement("span",null," (",t[n].totalShayaris,")")))}))):null)}}]),t}(n.Component),me=Object(m.f)(de),ge=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.tags,n=e.shayariObject;return r.a.createElement("div",{style:"light"===t?{position:"sticky",top:0,backgroundColor:"white",zIndex:10}:{position:"sticky",top:0,backgroundColor:"#363537",zIndex:10,transition:".5s"}},r.a.createElement(ce,{theme:t}),r.a.createElement(g.b,{to:"/",style:{fontSize:"28px",position:"absolute",bottom:"4px",fontFamily:"Alconica",textDecoration:"none",color:"crimson",marginLeft:"5px"}},"bestshayaris.com"),r.a.createElement(me,{theme:t,tags:a,shayariObject:n}))}}]),t}(n.Component),pe=(a(161),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(g.b,{to:"/about",className:"footerAbout"},"About Us"),r.a.createElement("div",{className:"footerContact"},"Contact Us:",r.a.createElement("span",{style:{letterSpacing:"1px"}},"\u2002",r.a.createElement("a",{href:"mailto:bestshayari4u@gmail.com"},"bestshayari4u@gmail.com"))))}}]),t}(n.Component)),fe=(a(162),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{style:{textAlign:"center"}},"About Us"),r.a.createElement("p",{className:"about-para"},"Shayari is something that starts from the heart and eyes of the writer and  remains in the heart and eyes of the listeners for many years! This travel a long path from tears of happiness to tears of loneliness, the beauty of the early sunshine to sleepless nights. Shayari expresses our love for loved ones. So in the series of this love , we the team ",r.a.createElement("span",{style:{color:"crimson"}},'"bestshayaris.com"')," provide the best shero-shayari in hindi and urdu for our visitors."),r.a.createElement("p",{className:"about-para"},"Need not to mention, in this new era of readers, we always focus on their interest. Our features are we provide unique as well as interesting content with ease in searching through tags, we have faster page loading time, translation of Shayari in English and the option of directly copying the Shayari, So our visitors can read desired Shayari without any interruption which makes our visitors happy."),r.a.createElement("p",{className:"about-para"},"We always treat our visitors as a part of our family and their views as an honor. So if you have any suggestions to make our family stronger than you are free and open to contact us."))}}]),t}(n.Component)),be=["sher","ghazal","ghalib","poems","love","dosti"],Ee=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.mainTags,t={0:{textDecoration:"none",fontSize:"20px",textTransform:"capitalize",border:"1px solid white",color:"white",boxSizing:"border-box",textAlign:"center",lineHeight:"80px",flex:"0 50%",background:"linear-gradient(to right, #43cea2, #185a9d)"},1:{textDecoration:"none",fontSize:"20px",textTransform:"capitalize",border:"1px solid white",color:"white",boxSizing:"border-box",textAlign:"center",lineHeight:"80px",flex:"0 50%",background:"linear-gradient(to right, #870000, #190a05)"},2:{textDecoration:"none",fontSize:"20px",textTransform:"capitalize",border:"1px solid white",color:"white",boxSizing:"border-box",textAlign:"center",lineHeight:"80px",flex:"0 50%",background:"linear-gradient(to right, #fe8c00, #f83600)"},3:{textDecoration:"none",fontSize:"20px",textTransform:"capitalize",border:"1px solid white",color:"white",boxSizing:"border-box",textAlign:"center",lineHeight:"80px",flex:"0 50%",background:"linear-gradient(to right, #ff0084, #33001b)"},4:{textDecoration:"none",fontSize:"20px",textTransform:"capitalize",border:"1px solid white",color:"white",boxSizing:"border-box",textAlign:"center",lineHeight:"80px",flex:"0 50%",background:"linear-gradient(to right, #00c6ff, #0072ff)"},5:{textDecoration:"none",fontSize:"20px",textTransform:"capitalize",border:"1px solid white",color:"white",boxSizing:"border-box",textAlign:"center",lineHeight:"80px",flex:"0 50%",background:"linear-gradient(to right, #fbd3e9, #bb377d)"},6:{textDecoration:"none",fontSize:"20px",textTransform:"capitalize",border:"1px solid white",color:"white",boxSizing:"border-box",textAlign:"center",lineHeight:"80px",flex:"0 50%",background:"linear-gradient(to right, #870000, #190a05)"}};return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},e.map(function(e,a){return r.a.createElement(g.b,{to:"/tags/".concat(e),key:a,style:t[a]},e)}))}}]),t}(n.Component),ye=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleSuggestionChange=function(t){e.setState({suggestion:t.target.value})},e.handleEmailChange=function(t){e.setState({email:t.target.value})},e.validateEmail=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},e.handleSendClick=function(t){""!==e.state.suggestion?e.validateEmail(e.state.email)?(e.setState({sending:!0}),A.a.firestore().collection("suggestions").doc().set({timestamp:A.a.firestore.FieldValue.serverTimestamp(),suggestion:e.state.suggestion,email:e.state.email}).then(function(){e.setState({open:!0,message:"feedback sent.",suggestion:"",email:"",sending:!1})}).catch(function(t){e.setState({open:!0,message:"cannot send due to some error."})})):e.setState({open:!0,message:"email is not valid."}):e.setState({open:!0,message:"suggestion cannot be empty."})},e.handleSnackbarClose=function(t){e.setState({open:!1})},e.state={suggestion:"",email:"",open:!1,message:"",sending:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Suggestions"),r.a.createElement("p",null,"Your suggestion help us to improve this platform.:)"),r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("textarea",{rows:5,cols:30,style:{padding:"5px",margin:"10px"},placeholder:"suggestion",value:this.state.suggestion,onChange:this.handleSuggestionChange}),r.a.createElement("br",null),r.a.createElement("input",{style:{padding:"5px",margin:"10px"},placeholder:"email",value:this.state.email,type:"email",onChange:this.handleEmailChange}),r.a.createElement("br",null),r.a.createElement("button",{style:{padding:"5px",margin:"10px",width:"60px"},onClick:function(t){return e.handleSendClick()},disabled:this.state.sending},"Send"),r.a.createElement("hr",null),r.a.createElement(C,{open:this.state.open,message:this.state.message,handleClose:this.handleSnackbarClose})))}}]),t}(n.Component),ve=a(69),Oe=a(99);function je(){var e=Object(Oe.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;\n    transition: all 0.50s linear;\n  }\n  "]);return je=function(){return e},e}var Se=Object(ve.b)(je(),function(e){return e.theme.body},function(e){return e.theme.text}),xe={body:"#FFF",text:"#363537",toggleBorder:"#FFF",background:"#363537"},Ce={body:"#121212",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},ke=a(214),we=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).putIntoShayariObject=function(t){e.setState(function(e){return{shayariObject:Object.assign(e.shayariObject,t)}})},e.themeToggler=function(){"light"===e.state.theme?e.setState({theme:"dark"}):e.setState({theme:"light"})},e.state={theme:"dark",tags:[],shayariObject:{},title:[],content:[],poet:[],id:[],relatedTags:{},totalShayaris:0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[],a={},n=0;A.a.firestore().collection("tags").get().then(function(r){var o=0;r.forEach(function(e){var r=e.id;n=e.data().totalShayaris,o+=n,t.push(r),a[r]={totalShayaris:n}}),t.forEach(function(e){a[e].relatedTagsObject={},a[e].titleObject={},a[e].contentObject={},a[e].poetObject={};for(var t=0;t<n;t++)a[e].titleObject[t]="",a[e].contentObject[t]="",a[e].poetObject[t]="",a[e].relatedTagsObject[t]=[]}),e.setState(function(e){return{tags:t,totalShayaris:o,shayariObject:Object.assign({},e.shayariObject,a)}})}).catch(function(e){console.log(e),alert("error in app.js did mount")});var r=[],o=[],i=[],l=[],c={},u=0;A.a.firestore().collection("tags").doc("sher").collection("shayaris").orderBy("timestamp","desc").limit(9).get().then(function(t){t.forEach(function(e){l.push(e.id),r.push(e.data().title),o.push(e.data().content),i.push(e.data().poet),Object.assign(c,Object(s.a)({},u,e.data().tags)),u++}),e.setState({title:r,content:o,poet:i,id:l,relatedTags:Object.assign(e.state.relatedTags,c)})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.theme,n=t.tags,o=t.shayariObject,i=t.title,s=t.content,l=t.poet,c=t.id,u=t.relatedTags,h=t.totalShayaris;return r.a.createElement(ve.a,{theme:"light"===this.state.theme?xe:Ce},r.a.createElement(Se,null),r.a.createElement("div",{className:"App"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(ke.a,{checked:"dark"===a,onChange:this.themeToggler,name:"checkedA"})),r.a.createElement(ge,{theme:a,tags:n,shayariObject:o}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(k,{tags:n,title:i,content:s,poet:l,id:c,relatedTags:u,totalShayaris:h,theme:a})}}),r.a.createElement(m.a,{path:"/tags/:tag/",render:function(t){return r.a.createElement(z,{tag:t.match.params.tag,theme:a,shayariObject:o,putIntoShayariObject:e.putIntoShayariObject})}}),r.a.createElement(m.a,{exact:!0,path:"/upload",render:function(e){return r.a.createElement(W,{tags:n})}}),r.a.createElement(m.a,{exact:!0,path:"/edit",render:function(e){return r.a.createElement(R,{tags:n})}}),r.a.createElement(m.a,{exact:!0,path:"/about",render:function(e){return r.a.createElement(fe,null)}}),r.a.createElement(m.a,{exact:!0,path:"/suggest",render:function(e){return r.a.createElement(ye,null)}}),r.a.createElement(m.a,{path:"*",component:w})),r.a.createElement("h2",{style:{fontFamily:"Alconica",textAlign:"center"}},"Top Tags"),r.a.createElement(Ee,{mainTags:be}),r.a.createElement(pe,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(164);A.a.initializeApp({apiKey:"AIzaSyCEMfOB5_j1hIdpxVXOduBuUMTwj5txVZo",authDomain:"bestshayari-7f672.firebaseapp.com",databaseURL:"https://bestshayari-7f672.firebaseio.com",projectId:"bestshayari-7f672",storageBucket:"bestshayari-7f672.appspot.com",messagingSenderId:"1001640034721",appId:"1:1001640034721:web:251a9065628579fe518be0",measurementId:"G-EQP9800NT3"}),A.a.analytics(),i.a.render(r.a.createElement(g.a,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,1,2]]]);
//# sourceMappingURL=main.6f58ff3f.chunk.js.map