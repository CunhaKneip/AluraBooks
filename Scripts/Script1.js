
// Declara as variaveis as quais serao atribuidos os valores das funções window.matchMedia.Essa função retorna um valor booleano dependendo se as especificações colocadas dentro dos () são atendidas
 

const mediaQueryTablet = window.matchMedia("(min-width: 1024px)");
const mediaQueryDesktop = window.matchMedia("(min-width: 1728px)");
const mediaQueryMobile = window.matchMedia("(max-width: 767px )");


//Declara uma variavel para comprovar a existencia ou nao do SWIPER
let swiper = null; 


//Quando chamada, essa função destroi o SWIPER caso ele já exista e cria outro atendendo as especificações para cada dispositivo
function handleMediaQueryChange() {
    if (swiper !== null) {
        swiper.destroy(); 
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
//Chama a função uma primeira vez
handleMediaQueryChange();

//EventListener responsável por perceber a mudança no tamanho da tela e chamar a função handleMediaQueryChange, realizando assim a troca dos tipos de swiper
mediaQueryTablet.addEventListener("change", handleMediaQueryChange);
mediaQueryMobile.addEventListener("change", handleMediaQueryChange);
mediaQueryDesktop.addEventListener("change", handleMediaQueryChange);




// Código responsável por mudar a posição do quadro de categorias, 
// foi necessário pois ele estava mudando de posição em certos tamanhos, agora ele segue o seu elemento "pai" e fica onde deve ficar
function updatePosition() {
    var element1 = document.getElementById('element1');
    var element2 = document.getElementById('element2');
  
    var rect = element1.getBoundingClientRect();
    var top = rect.bottom; 
    var left = rect.left;
  
    element2.style.top = top + 'px';
    element2.style.left = left + 'px';
  }
  
//EventListener que age quando o tamanho da tela é mudado
  updatePosition();
  window.addEventListener('resize', updatePosition);
  
    window.addEventListener('resize', updatePosition);