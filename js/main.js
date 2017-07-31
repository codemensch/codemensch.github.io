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
    
    $('#social, #steadicam, .close, .close-btn').click(function(){
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
      
      $('#' + currentLabel).toggle();
      $('#' + currentProject).toggle();
      $('.' + currentInfo).toggle();
    });

  //Smooth Scrolling from links 
  // Select all links with hashes
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
             scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
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