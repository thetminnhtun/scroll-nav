function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}module.exports=function(t){void 0===t&&(t={});var n,o=e({},{navElements:"",activeClass:"current",inititalTop:0},t);if("string"==typeof o.navElements){try{n=document.querySelector(o.navElements).querySelectorAll("a")}catch(e){return void console.error('options.navElements "'+t.navElements+'" must has child "A" Tag.')}window.addEventListener("scroll",function(e){var t=window.scrollY+o.inititalTop;n.forEach(function(e){var r=document.querySelector(e.hash);r?r.offsetTop<=t&&(n.forEach(function(e){e.classList.remove(o.activeClass)}),e.classList.add(o.activeClass)):console.error('The element with ID "'+e.hash+'" not found.')})}),n.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.querySelector(e.target.hash);t&&window.scrollTo({top:t.offsetTop-o.inititalTop,behavior:"smooth"})})})}else console.error('options.navElements "'+t.navElements+'" must be string.')};
//# sourceMappingURL=scrollnav.js.map
