
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
$(document).ready(function() {
    $('.parallax-window').parallax({imageSrc: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/B6HO7KQH2O.jpg'});
    $('.parallax-window-two').parallax({imageSrc: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/WLSFZJ3W9M.jpg'});
    $('.parallax-window-three').parallax({imageSrc: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U3W2SHOLWQ.jpg'});
    $('.parallax-window-four').parallax({imageSrc: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/26E6OTLJ7L.jpg'});
});
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled')
          }
        } else {
          selectHeader.classList.remove('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled')
          }
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    var btn = $('#backButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  

  
    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
  
        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  
    /**
     * Initiate Pure Counter 
     */
    new PureCounter();
  
  })()

  $(document).ready(function() {
    // --- VARIABLES ---
    var swiperSide = new Swiper('.product-photos-side .swiper-container', {
      direction: 'horizontal',
      centeredSlides: true,
      spaceBetween: 30,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    })
    var swiperProduct = new Swiper('.product-photo-main .swiper-container', {
      direction: 'horizontal',
      pagination: '.swiper-pagination',
      paginationClickable: true,
      // keyboardControl: true,
    })
    var galleryTop = new Swiper('.product-gallery-full-screen .gallery-top', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationType: 'fraction',
      spaceBetween: 10,
      keyboardControl: true,
      noSwiping: true,
      zoom: true,
    })
    swiperSide.params.control = swiperProduct || galleryTop;
    swiperProduct.params.control = swiperSide || galleryTop;
    galleryTop.params.control = swiperProduct || swiperSide;
  
    var galleryOpen = false,
        fullscreen = false,
        fsTrigger = $('.gallery-nav .fullscreen')[0],
        fsGallery = $('.product-gallery-full-screen')[0],
        fsFunction = fsGallery.requestFullscreen;
    // browser support check
    if (!fsFunction) {
      ['webkitRequestFullScreen',
        'mozRequestFullscreen',
        'msRequestFullScreen'
      ].forEach(function(req) {
        fsFunction = fsFunction || fsGallery[req];
      });
    }
  
    // --- FUNCTIONS ---
    function openImageGallery(slide) {
      galleryOpen = true;
      var galleryX = $('.product-photo-main').offset().left,
        galleryY = $('.product-photo-main').offset().top,
        galleryHeight = $('.product-photo-main').height(),
        galleryWidth = $('.product-photo-main').width(),
        activeIndex = slide.index(),
        indexes = $('.product-photo-main').find('.swiper-slide').length;
      $('body').css('overflow', 'hidden');
      $('.main, .product-gallery-full-screen').css('overflow-y', 'scroll');
      $('.product-gallery-full-screen').addClass('opened');
      galleryTop.activeIndex = activeIndex;
      galleryTop.onResize();
    }
  
    function goFs() {
      fullscreen = true;
      $('.product-gallery-full-screen').css('overflow-y', 'auto');
      $('.fullscreen').addClass('leavefs');
      fsFunction.call(fsGallery);
    }
  
    function leaveFs() {
      fullscreen = false;
      $('.product-gallery-full-screen').css('overflow-y', 'scroll');
      $('.fullscreen').removeClass('leavefs');
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  
    function closeImageGallery() {
      // if(zoomed) {
      //   zoom($('.product-gallery-full-screen .swiper-slide-active img'));
      // }
      $('body').css('overflow', 'auto');
      $('.main, .product-gallery-full-screen').css('overflow-y', 'auto');
      galleryOpen = false;
      leaveFs();
      $('.product-gallery-full-screen').removeClass('opened');
    }
  
    // --- EVENTS ---
    // open the large image gallery
    $('.product-photo-main .swiper-slide').on('click touch', function() {
      var slide = $(this);
      openImageGallery(slide);
    });
    // close the large image gallery
    $('.gallery-nav .close').on('click touch', function() {
      closeImageGallery();
    });
    // zoom in / out
    $('.zoom').on('click touch', function() {
      // zoom
    });
    // fullscreen toggle
    $(fsTrigger).on('click touch', function() {
      if (fullscreen) {
        leaveFs();
      } else {
        goFs();
      }
    });
  
    // keyboard controls
    $(document).on('keydown', function(e) {
      e.preventDefault();
      var code = e.keyCode || e.which;
      // open the large image gallery
      if (code == 13 && !galleryOpen) {
        var slide = $('.product-photo-main .swiper-slide.swiper-slide-active');
        openImageGallery(slide);
      }
      // close the large image gallery
      if (code == 27 && galleryOpen) {
        closeImageGallery();
      }
      if (code == 122) {
        if(galleryOpen) {
          if (fullscreen) {
            leaveFs();
          } else {
            goFs();
          }
        }
      }
    });
  
    $(window).on('resize', function() {
      galleryTop.onResize();
      swiperSide.onResize();
      swiperProduct.onResize();
    });
  });
$('#myCarousel').carousel({
    interval: false
});
$('#carousel-thumbs').carousel({
    interval: false
});

// handles the carousel thumbnails
// https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
$('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr('id');
    var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
    $('#myCarousel').carousel(id);
});
// Only display 3 items in nav on mobile.
if ($(window).width() < 575) {
    $('#carousel-thumbs .row div:nth-child(4)').each(function() {
        var rowBoundary = $(this);
        $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
    });
    $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
        var boundary = $(this);
        $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
    });
}
// Hide slide arrows if too few items.
if ($('#carousel-thumbs .carousel-item').length < 2) {
    $('#carousel-thumbs [class^=carousel-control-]').remove();
    $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
}
// when the carousel slides, auto update
$('#myCarousel').on('slide.bs.carousel', function(e) {
    var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
});
// when user swipes, go next or previous
$('#myCarousel').swipe({
    fallbackToMouseEvents: true,
    swipeLeft: function(e) {
        $('#myCarousel').carousel('next');
    },
    swipeRight: function(e) {
        $('#myCarousel').carousel('prev');
    },
    allowPageScroll: 'vertical',
    preventDefaultEvents: false,
    threshold: 75
});
/*
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
*/
let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

$('#myCarousel .carousel-item img').on('click', function(e) {
    var src = $(e.target).attr('data-remote');
    if (src) $(this).ekkoLightbox();
});
$(function() {

    var $parallaxContainer = $('.parallax'),
        $parallaxLayers = $('.parallaxLayer');

    $(window).scroll(function() {

        var scrollTop = $(window).scrollTop(),
            containerOffset = $parallaxContainer.offset().top,
            offset = (containerOffset - scrollTop);

        $parallaxLayers.each(function() {
            var depth = $(this).attr('data-depth'),
                move = -(offset * depth);

            $(this).css('transform','translate3d(0,' + move + 'px, 0)');

        });
    });
});
const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
    })
}