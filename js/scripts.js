$(document).ready(function() {
  $('.door').on('click', function(){
      $(this).toggleClass('active');
  });

  $(function() {
  var date = new Date(),
    currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  $(".door").each(function() {
    var specifiedDate = $(this).data('date');
    if (specifiedDate <= currentDate) {
      $(this).addClass('enabled');
    }
  });
});
});
