$(document).ready(function() {
    $('.paging__item--link').mouseover(function() {
        $('span', this).stop(true,true).fadeIn();
    });
    $('.paging__item--link').mouseleave(function() {
        $('span', this).stop(true,true).hide();
    });


    $('.cookie__close').on('click', function() {
      $('.cookie').hide();
      return false;
    });
});

$(document).on('click', '.paging__item--link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

// Anchors
$(document).scroll(function(){
	 scrollLink();
});

function scrollLink(){
  	var scroll_top = $(document).scrollTop();
  	var d = $(window).height() / 3;
  	var id;
  	$('[data-scroll]').removeClass('active');
  	$('[data-onscroll="1"]').each(function(){
      if (scroll_top >= $(this).offset().top - d) {
  			id = $(this).attr('id');
  		}
  	});
  	$('[data-scroll="' + id + '"]').addClass('active');
};


(function($) {
    $(function() {
        if (!$.cookie('was')) {
            $('.cookie').show();
        }
        $('.cookie__close').click(function() {
            $('.cookie').hide();
            $.cookie('was', true, {
                expires: 365,
                path: '/'
            });
            return false;
        });
    })
})(jQuery)