function handleTabletMediaQuery(mediaQueryTablet) {
    if (mediaQueryTablet.matches) {
        const swiper = new Swiper('.swiper', {
            spaceBetween: 0,
            slidesPerView: 3,
            centeredSlides: false,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    }
}

function handleMobileMediaQuery(mediaQueryMobile) {
    if (mediaQueryMobile.matches) {
        const swiper = new Swiper('.swiper', {
            spaceBetween: 50,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    }
}

function handleDesktopMediaQuery(mediaQueryDesktop) {
    if (mediaQueryDesktop.matches) {
        const swiper = new Swiper('.swiper', {
            spaceBetween: 50,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    }
}

const mediaQueryTablet = window.matchMedia("(min-width: 1024px)");
const mediaQueryDesktop = window.matchMedia("(min-width: 1728px)");
const mediaQueryMobile = window.matchMedia("(max-width: 1727px)");

let swiper = null; // Declare a variable to hold the Swiper instance

function handleMediaQueryChange() {
    if (swiper !== null) {
        swiper.destroy(); // Destroy the existing Swiper instance
    }

    if (mediaQueryTablet.matches) {
        swiper = new Swiper('.swiper', {
            spaceBetween: 0,
            slidesPerView: 3,
            centeredSlides: false,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    } else if (mediaQueryMobile.matches) {
        swiper = new Swiper('.swiper', {
            spaceBetween: 50,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    } else if (mediaQueryDesktop.matches) {
        swiper = new Swiper('.swiper', {
            spaceBetween: 50,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
    }
}

handleMediaQueryChange();

mediaQueryTablet.addEventListener("change", handleMediaQueryChange);
mediaQueryMobile.addEventListener("change", handleMediaQueryChange);
mediaQueryDesktop.addEventListener("change", handleMediaQueryChange);

function updatePosition() {
    var element1 = document.getElementById('element1');
    var element2 = document.getElementById('element2');
  
    var rect = element1.getBoundingClientRect();
    var top = rect.bottom; /* Use rect.bottom to position element2 below element1 */
    var left = rect.left;
  
    element2.style.top = top + 'px';
    element2.style.left = left + 'px';
  }
  
  // Call the updatePosition function initially and whenever the window is resized
  updatePosition();
  window.addEventListener('resize', updatePosition);
  
    window.addEventListener('resize', updatePosition);