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
