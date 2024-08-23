$(document).ready(function(){
    

  //Hover Interactions
  $('.overlay').on({
    'touchstart': function () {
      $(this).css('opacity', 0.75);
    },

    'touchend': function () {
      $(this).css('opacity', 0);
    }
  });

  $('.project-container').on({
    'touchstart': function () {
      $(this).css('background-color', '#d8dfe5');
    },

    'touchend': function () {
      $(this).css('background-color', '#c0c6cc');
    }
  });

  $('a .fa-envelope-o, a .fa-linkedin, a .fa-github-alt').on({
    'touchstart': function () {
      $(this).css('color', '#fa8072');
    },

    'touchend': function () {
      $(this).css('color', '#c0c6cc');
    }
  });

  //Nav Show/Hide
  $('#toggle').click(function(e){
    //e.preventDefault();
    $('nav').slideToggle();
    $('.fa-chevron-up').toggleClass('toggleDown');
  });
    
  //Porfolio Project Overlay Click Events
  
  $(".modal-fullscreen").on('show.bs.modal', function () {
    setTimeout( function() {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
        }, 0);
  });
  
  $(".modal-fullscreen").on('hidden.bs.modal', function () {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  });
  
  /* Select Which Modal to View */
  var currentProject = "";
  var currentLabel = "";
  var currentInfo = "";
  
  $('#social, #space, #weather, .close, .close-btn').click(function(){
    if ($(this).attr('id') == 'social'){
      currentProject = $('#social-modal').attr('id');
      currentLabel = $('#socialLabel').attr('id');
      currentInfo = $('.socialInfo').attr('class');
    }
    else if ($(this).attr('id') == 'space') {
      currentProject = $('#space-modal').attr('id');
      currentLabel = $('#spaceLabel').attr('id');
      currentInfo = $('.spaceInfo').attr('class');
    }
    else if ($(this).attr('id') == 'weather'){
      currentProject = $('#weather-modal').attr('id');
      currentLabel = $('#weatherLabel').attr('id');
      currentInfo = $('.weatherInfo').attr('class');
    }
    
    $('#' + currentLabel).toggle();
    $('#' + currentProject).toggle();
    $('.' + currentInfo).toggle();
  });

  //Smooth Scrolling from links 
  // Select all links with hashes
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  //Active Nav Button
  let scrollTop = $(window).scrollTop();

  function removeAllActiveClasses() {
    const sections = $('.section');

    sections.each(function (index, value) {
      const navBtn = `#${this.id}-btn`;
      if ($(navBtn).hasClass("active")) {
        $(navBtn).removeClass("active");
      }
    });
  }

  $(window).on('scroll resize', function () {
    scrollTop = $(window).scrollTop();

    if (scrollTop === 0) {
      removeAllActiveClasses();
    }

    var vpHeight = window.innerHeight;

    $('.section').each(function (index, value) {
      var elementTop = this.getBoundingClientRect().top;
      var navBtn = `${this.id}-btn`;

      switch (this.id) {
        case 'portfolio':
          if (scrollTop > 0 && elementTop <= vpHeight / 2) {
            removeAllActiveClasses();
            $(`#${navBtn}`).addClass("active");
          }
          break;
        case 'education':
          if (elementTop <= vpHeight / 2) {
            removeAllActiveClasses();
            $(`#${navBtn}`).addClass("active");
          }
          break;
        case 'about':
          if (elementTop <= vpHeight / 2) {
            removeAllActiveClasses();
            $(`#${navBtn}`).addClass("active");
          }
          break;
        case 'contact':
          const scrolledTo = window.scrollY + window.innerHeight;
          const isReachBottom = document.body.scrollHeight === scrolledTo;
    
          if (isReachBottom) {
            removeAllActiveClasses();
            $('#contact-btn').addClass("nav-circle active");
          }
          break;
      }
    });
  });
});