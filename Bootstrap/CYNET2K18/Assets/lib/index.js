  AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
  });

  $(window).scroll(function() {
      var offset = $(window).scrollTop();
      console.log(offset);
      $('.navbar').toggleClass('trans', offset > 50);
  });