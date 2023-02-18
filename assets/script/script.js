// Move on Top
function moveOnTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
          $('.move-on-top-btn').fadeIn();
        }
        else{
          $('.move-on-top-btn').fadeOut();
        }
    });
    
    $('.move-on-top-btn').click(function() {
      $('html, body').animate({scrollTop: 0}, 1500);
    });
}