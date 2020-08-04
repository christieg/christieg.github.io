
var offset = $('#navbar').height() + 20;

console.log(offset);
$('body').scrollspy({
    target: '#navbar',
    offset: offset
});


function createProgressBar(node)
{
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    // If you aren't using any module loader, progressbar.js exposes
    // global variable: window.ProgressBar
    var bar = new ProgressBar.Circle(node, {
      color: '#E5E5E5',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 8,
      trailWidth: 1,
      easing: 'bounce',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#A9A9A9', width: 3 },
      to: { color: '#F45B69', width: 7 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + "%");
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';
    return bar;
    
}


var bars = []
const skillbars = document.getElementsByClassName("skill-bar")
for(let skillbar of skillbars)
{
    bars.push(createProgressBar(skillbar))

}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
        for(let bar of bars) {
            
            bar.animate((Math.random() * 100)/100)
        }
    }
    
    


  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();
