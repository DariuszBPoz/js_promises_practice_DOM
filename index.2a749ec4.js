var e=document.querySelector("body");function n(n,t){var o=document.createElement("div");o.dataset.qa="notification",o.className=t,o.textContent=n,e.appendChild(o)}var t=new Promise(function(e,n){document.addEventListener("click",function(){e()}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}),o=new Promise(function(e){document.addEventListener("click",function(){e()}),document.addEventListener("contextmenu",function(){e()})}),r=new Promise(function(e,n){var t=!1,o=!1;document.addEventListener("mousedown",function(n){0===n.button&&(t=!0),2===n.button&&(o=!0),t&&o&&e("Third promise was resolved")})});t.then(function(){return n("First promise was resolved","success")}).catch(function(){return n("First promise was rejected","error")}),o.then(function(){return n("Second promise was resolved","success")}),r.then(function(){return n("Third promise was resolved","success")});
//# sourceMappingURL=index.2a749ec4.js.map