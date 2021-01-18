(function () {
    'use strict';

    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');

    openMenu.addEventListener('click', showMenuMobile);
    closeMenu.addEventListener('click', closeMenuMobile);

    function showMenuMobile(){
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }

    function closeMenuMobile(){
        mainMenu.style.top = '-100%';
    }

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    var swiperProjetos = new Swiper('.swiper-container-projeto', {
        autoplay: {
            delay: 5000,
        },
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
})();

// Filtro Projetos

(function ($) {
	"use strict";
  
	var $filters = $(".filtro-lista [data-filter]"),
	$boxes = $(".grid-images [data-category]");
  
	$filters.on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
  
		$filters.removeClass("active");
		$this.addClass("active");
  
	  	var $filterColor = $this.attr("data-filter");
  
			if ($filterColor == "todos") {
				$boxes
				.removeClass("is-animated")
				.fadeOut()
				.promise()
				.done(function () {
					$boxes.addClass("is-animated").fadeIn();
				});
			} else {
				$boxes
				.removeClass("is-animated")
				.fadeOut()
				.promise()
				.done(function () {
					$boxes
					.filter('[data-category = "' + $filterColor + '"]')
					.addClass("is-animated")
					.fadeIn();
			});
		}
	});
})(jQuery);
  

