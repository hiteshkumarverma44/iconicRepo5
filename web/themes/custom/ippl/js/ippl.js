;(function ($, Drupal, once) {
  Drupal.behaviors.ippl = {
    attach: function (context, settings) {
      $('.toggler').click(function () {
        $('.responsive-menus-simple').animate({ right: '0px' })
      })
      $('.menu-item span').click(function () {
        $('.responsive-menus-simple').animate({ right: '-700px' })
      })

      $('.panel-heading h4').on('click', function () {
        console.log('heading 4 working')
        $(this).parent().parent().find('.panel-collapse').toggle()
      })

      function checkScroll() {
        var startY = $('.featured-top').height() * 2

        if ($(window).scrollTop() > startY) {
          $('.featured-top').addClass('scrolled')
        } else {
          console.log('enter in else')
          $('.featured-top').removeClass('scrolled')
        }
      }
      window.onscroll = function () {
        checkScroll()
      }

      $('.responsive-menus-simple span').hover(
        function () {
          $(this).addClass('animate__animated animate__flip')
        },
        function () {
          $(this).removeClass('animate__animated animate__flip')
        },
      )

      $(window).resize(function () {
        if ($(window).width() < 2000 && $(window).width() > 992) {
          $('.home .banner-text').css('top', '-27%')
        } else if ($(window).width() <= 991 && $(window).width() >= 768) {
          $('.home .banner-text').css('top', '-16%')
          console.log('16')
        } else if ($(window).width() <= 767 && $(window).width() > 400) {
          $('.home .banner-text').css('top', '-12%')
        } else if ($(window).width() <= 400 && $(window).width() > 200) {
          $('.home .banner-text').css('top', '-11%')
        } else {
          $('.home .banner-text').css('top', '-27%')
        }
      })

      $(window).resize(function () {
        if ($(window).width() < 991) {
          $(
            '.animate_field_home_para_one_left,.animate_field_home_para_one_right,.animate_field_home_para_two_right,.animate_field_home_para_two_left,.animate_field_home_para_three_left,.animate_field_home_para_three_right,.animate_field_home_para_four_right,.animate_field_home_para_four_left',
          ).removeClass('col-md-6')
        } else {
          $(
            '.animate_field_home_para_one_left,.animate_field_home_para_one_right,.animate_field_home_para_two_right,.animate_field_home_para_two_left,.animate_field_home_para_three_left,.animate_field_home_para_three_right,.animate_field_home_para_four_right,.animate_field_home_para_four_left',
          ).addClass('col-md-6 !important')
        }
      })

      function animateScroll() {
        var start = $('.featured-top').height() * 4

        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_one_left').addClass(
            'animate__animated animate__slideInLeft animate__delay-1s animate__slow',
          )
        }

        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_one_right').addClass(
            'animate__animated animate__slideInUp animate__delay-1s animate__slow',
          )
        }

        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_two_left').addClass(
            'animate__animated animate__slideInLeft animate__delay-1s animate__slower',
          )
        }

        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_two_right').addClass(
            'animate__animated animate__slideInRight animate__delay-1s animate__slower',
          )
        }

        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_three_left').addClass(
            'animate__animated animate__slideInLeft animate__delay-1s animate__slower',
          )
        }
        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_three_right').addClass(
            'animate__animated animate__slideInUp animate__delay-1s animate__slower',
          )
        }

        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_four_right').addClass(
            'animate__animated animate__slideInLeft animate__delay-.5s animate__slower',
          )
        }

        if ($(window).scrollTop() > start) {
          $('.animate_field_home_para_four_left').addClass(
            'animate__animated animate__slideInUp animate__delay-.5s animate__slower',
          )
        }
      }
      window.onscroll = function () {
        animateScroll()
        checkScroll()
      }
    },
  }
})(jQuery, Drupal, once)
