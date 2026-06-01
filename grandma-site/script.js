$('.english-translate').mouseover(function () {
  $(this).find('.en').css('display', 'none');
  $(this).find('.cn').css('display', 'block');
});
$('.english-translate').mouseout(function () {
  $(this).find('.en').css('display', 'block');
  $(this).find('.cn').css('display', 'none');
});

$('.mandarin-translate').mouseover(function () {
  $(this).find('.cn').css('display', 'none');
  $(this).find('.en').css('display', 'block');
});
$('.mandarin-translate').mouseout(function () {
  $(this).find('.cn').css('display', 'block');
  $(this).find('.en').css('display', 'none');
});


document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#popup-window', {
        type: 'x, y'
    });
 });

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#milkplant', {
        type: 'x, y'
    });
 });

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#balcony-1', {
        type: 'x, y'
    });
 });

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#tucked', {
        type: 'x, y'
    });
 });

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#window', {
        type: 'x, y'
    });
 });

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#plants', {
        type: 'x, y'
    });
 });


 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#image', {
        type: 'x, y'
    });
 });

 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Draggable)
  
    Draggable.create('#decoration', {
        type: 'x, y'
    });
 });











