
var offset = $('#navbar').height() + 20;
console.log("scrolled by " + offset);
var shiftWindow = function () { scrollBy(0, -offset)
                              console.log("scrolled by " + offset);};
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow();}

console.log(offset);
$('body').scrollspy({
    target: '#navbar',
    offset: offset
  });
  
