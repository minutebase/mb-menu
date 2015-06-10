define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/mb-menu",["exports","ember-mb-menu/components/mb-menu"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({items:["One","Two","Three"],singleSelected:null,multiSelected:[],actions:{selectSingle:function(e){this.set("singleSelected",e)},selectMulti:function(e){this.get("multiSelected").pushObject(e)},deselectMulti:function(e){this.get("multiSelected").removeObject(e)}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!r){var d=a(i.toString());n["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function a(e,a){var r=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[r]&&(window[r]=a)}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n,a){var r=t.dom,i=t.hooks,d=i.set,c=i.content;r.detectNamespace(n);var l;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var o=r.createMorphAt(l,1,1,n);return d(t,e,"item",a[0]),c(t,o,e,"item"),l}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n,a){var r=t.dom,i=t.hooks,d=i.set,c=i.content;r.detectNamespace(n);var l;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var o=r.createMorphAt(l,1,1,n);return d(t,e,"item",a[0]),c(t,o,e,"item"),l}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("MB Menu");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Single Selection");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Multiple Selection");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},render:function(n,a,r){var i=a.dom,d=a.hooks,c=d.get,l=d.block;i.detectNamespace(r);var o;a.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(o=this.build(i),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=i.cloneNode(this.cachedFragment,!0))):o=this.build(i);var s=i.createMorphAt(o,4,4,r),m=i.createMorphAt(o,8,8,r);return i.insertBoundary(o,null),l(a,s,n,"mb-menu",[],{items:c(a,n,"items"),selected:c(a,n,"singleSelected"),"on-select":"selectSingle","class":"menu"},e,null),l(a,m,n,"mb-menu",[],{items:c(a,n,"items"),selected:c(a,n,"multiSelected"),multiple:"true","on-select":"selectMulti","on-deselect":"deselectMulti","class":"menu"},t,null),o}}}())}),define("dummy/templates/components/mb-menu",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:1,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createElement("li"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n,a){var r=t.dom,i=t.hooks,d=i.set,c=i.get,l=i.subexpr,o=i.concat,s=i.attribute,m=i.element,u=i.inline;r.detectNamespace(n);var h;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(h=this.build(r),this.hasRendered?this.cachedFragment=h:this.hasRendered=!0),this.cachedFragment&&(h=r.cloneNode(this.cachedFragment,!0))):h=this.build(r);var p=r.childAt(h,[1]),f=r.createMorphAt(p,1,1),v=r.createAttrMorph(p,"class");return d(t,e,"item",a[0]),s(t,v,p,"class",o(t,[c(t,e,"item-class")," ",l(t,e,"if",[c(t,e,"item.isSelected"),c(t,e,"selected-class")],{})])),m(t,p,e,"action",["select",c(t,e,"item")],{}),u(t,f,e,"yield",[c(t,e,"item.content"),c(t,e,"item.isSelected")],{}),h}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},render:function(t,n,a){var r=n.dom,i=n.hooks,d=i.get,c=i.block;r.detectNamespace(a);var l;n.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var o=r.createMorphAt(l,0,0,a);return r.insertBoundary(l,null),r.insertBoundary(l,0),c(n,o,t,"each",[d(n,t,"wrapped")],{},e,null),l}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-mb-menu",version:"v0.1.1"});