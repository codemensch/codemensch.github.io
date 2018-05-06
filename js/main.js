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
  
  $('#social, #steadicam, #weather, .close, .close-btn').click(function(){
    if ($(this).attr('id') == 'social'){
      currentProject = $('#social-modal').attr('id');
      currentLabel = $('#socialLabel').attr('id');
      currentInfo = $('.socialInfo').attr('class');
    }
    else if ($(this).attr('id') == 'steadicam') {
      currentProject = $('#steadicam-modal').attr('id');
      currentLabel = $('#steadicamLabel').attr('id');
      currentInfo = $('.steadicamInfo').attr('class');
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
  
  //Highlight Current Nav Button on Scroll
  var sections = $('.section')
    , nav = $('.menu')
    , nav_height = nav.outerHeight();
   
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
   
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
   
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.nav-circle').removeClass('active');
        nav.find('.nav-circle[id="'+$(this).attr('id')+'-btn"]').addClass('active');
      }
      
      var heightCheck = $(window).scrollTop() + $(window).height();
      var pageHeight = $(document).height();
      if(heightCheck === pageHeight) {
        nav.find('.nav-circle').removeClass('active');
        $('#contact-btn').addClass('active');
      }
      
      if (cur_pos <= nav_height * .5) {
        nav.find('.nav-circle').removeClass('active');
      }
    });
  });

});