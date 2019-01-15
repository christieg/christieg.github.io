
var offset = $('#navbar').height() + 20;

console.log(offset);
$('body').scrollspy({
    target: '#navbar',
    offset: offset
  });

