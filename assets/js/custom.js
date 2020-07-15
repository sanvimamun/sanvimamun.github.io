$(document).ready(function () {
		// active js
	$('ul.navbar-nav .nav-item').click(function(){
    $('ul.navbar-nav .nav-item').removeClass("active");
    $(this).addClass("active");
	});
	
      // sticky js
	$(window).on('scroll',function(){
		if($(window).scrollTop()){
			$('nav').addClass('stickytop');
		}
		else
		{
			$('nav').removeClass('stickytop');
		}
	});
  
	  // typed js
	var typed = new Typed('.type', {
	  strings: [
		"Sanvi Rahaman..",
		"A Web Designer..",
		"A Web Developer..",
	  ],
	  typeSpeed: 60,
	  backSpeed: 60,
	  loop: true,
	});
	// typed js end

	// owl-carousel js
  $(".owl-carousel").owlCarousel({
		loop:true,
                margin:0,
                items: 2,
                autoplay: true,
                smartSpeed: 2000,
                responsiveClass:true,
                nav: false,
                dots: true,
                stagePadding: 320,
                responsive:{
                    0:{
                        items:1,
                        stagePadding: 0,
                    },
                    690:{
                        items:2,
                        stagePadding: 0,
                    },
                    992:{
                        items:2, 
                        stagePadding: 80,
                    },
                    1199:{
                        items:2, 
                        stagePadding: 100,
                    },
                    1300:{
                        items:2,
                        stagePadding: 200,
                    }, 
                    1500:{
                        items:2,  
                        stagePadding: 320,
                    }
                },
  });
  
	// Isotope js	
	var $grid = $('.grid').isotope({
		  // options
		});
		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
	});
	
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

		// active js
	$('.button-group button').click(function(){
    $('button').removeClass("active");
    $(this).addClass("active");
	});
	
	// magnificPopup js
	$(document).ready(function() {
	$('.popup-img').magnificPopup({
		type:'image',
		 gallery:{
			enabled:true
		  }
		});
	});
	// wow js
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
		  // the callback is fired every time an animation is started
		  // the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null,    // optional scroll container selector, otherwise use window,
		resetAnimation: true,     // reset animation on end (default is true)
	  }
	);
	wow.init();
});
