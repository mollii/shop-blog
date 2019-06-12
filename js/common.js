 
$(function() {

	$('#btn-up').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 400);
  });

	$('.btn-menu').on('click', function(){
		$('.menu-list').slideToggle()
		$('.btn-close').show();
	});

	$('.btn-close').on('click', function(){
		$('.menu-list').slideUp(400);
	});

	$('.btn-ads').on('click', function(){
		$('.ads').slideUp(400);
	});

  $('.accordion-box').on('click', function(){
  	
  	$(this).children('.accordion-list')
  	.slideToggle(300);
  });

  $('.slider').slick({
  	dots: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    responsive: [{

      breakpoint: 1024,
      settings: {
        
      }

    }, {

      breakpoint: 768,
      settings: {
        
        arrows: false,
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  $('.news').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  dots: false,
	  arrows: false,
	  speed: 500,
	  responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }

    }, {

    	breakpoint: 992,
      settings: {
        slidesToShow: 2
      
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2
      
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
	});



  $('.sidebar-wrapper').airStickyBlock({
    debug: false, 
    stopBlock: '.content-wrapper',
    offsetTop: 90 
	});

  VK.Widgets.Group("vk_groups", {mode: 3, width: 'auto', color1: 'fff', color2: '474747', color3: '474747'}, 64604206);

});
