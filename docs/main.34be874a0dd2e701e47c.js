(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{L:()=>p});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.task=t,this.id=(new Date).getTime(),this.complete=!1,this.createAt=new Date}var n,o,r;return n=e,r=[{key:"fromJSON",value:function(t){var n=t.task,o=t.id,r=t.complete,a=t.createAt,i=new e(n);return i.id=o,i.complete=r,i.createAt=a,i}}],(o=null)&&t(n.prototype,o),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var t,r,a;return t=e,(r=[{key:"newTodo",value:function(e){this.todos.push(e),this.saveLocalStorage()}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"checkCompleted",value:function(e){var t=this;this.todos.forEach((function(n){n.id==e&&(n.complete=!n.complete,t.saveLocalStorage())}))}},{key:"getTotalPending",value:function(){return this.todos.filter((function(e){return!e.complete})).length}},{key:"deleteCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.complete})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){this.todos=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],this.todos=this.todos.map(n.fromJSON)}}])&&o(t.prototype,r),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=document.querySelector(".todo-list"),c=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),u=document.querySelector(".filters"),d=document.querySelectorAll(".filtro"),f=document.querySelector(".total-pending"),v=function(e){var t='\n        <li class="'.concat(e.complete?"completed":"",'" data-id="').concat(e.id,'">\n\t\t\t<div class="view">\n\t\t\t\t<input class="toggle" type="checkbox" ').concat(e.complete?"checked":"",">\n\t\t\t\t<label>").concat(e.task,'</label>\n\t\t\t\t<button class="destroy"></button>\n\t\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t    </li>\n    '),n=document.createElement("div");return n.innerHTML=t,l.append(n.firstElementChild),m(),n.firstElementChild};c.addEventListener("keyup",(function(e){if(13===e.keyCode&&c.value.length>0){var t=new n(c.value);p.newTodo(t),v(t),c.value=""}})),l.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");t.includes("input")?(p.checkCompleted(o),n.classList.toggle("completed")):t.includes("button")&&(p.deleteTodo(o),l.removeChild(n)),m()})),s.addEventListener("click",(function(){p.deleteCompleted();for(var e=l.children.length-1;e>=0;e--){var t=l.children[e];t.classList.contains("completed")&&l.removeChild(t)}})),u.addEventListener("click",(function(e){var t=e.target.text;if(t){d.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,o=a(l.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var i=r.classList.contains("completed");switch(t){case"Pendientes":i&&r.classList.add("hidden");break;case"Completados":i||r.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}}}));var m=function(){f.innerHTML=p.getTotalPending()},p=new r;p.todos.forEach(v)})();