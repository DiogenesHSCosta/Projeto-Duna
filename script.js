let logo = document.getElementById("logo")
logo.addEventListener("mouseout", diminuirImg)
function diminuirImg(){
    logo.classList.add('diminuirImg')
}




/**/
//info filme
let imgFilme = document.getElementsByName("imgFilme")[0]
let txtFilme = document.getElementById("TextoFilme")
let TiFilme = document.getElementById("TituloFilme")

//info Livro
let imgLivro = document.getElementsByName("imgLivro")[0]
let txtLivro = document.getElementById("TextoLivro")
let TiLivro = document.getElementById("TituloLivro")
let contF = 0
let contL = 0


document.getElementsByName("buttonE")[0].addEventListener("click", NavEsquerdaF)
document.getElementsByName("buttonD")[0].addEventListener("click", NavDireitaF)
document.getElementsByName("buttonE")[1].addEventListener("click", NavEsquerdaL)
document.getElementsByName("buttonD")[1].addEventListener("click", NavDireitaL)


function NavEsquerdaF(){
    TiFilme.innerHTML = "Duna 1984"
    txtFilme.innerHTML = "No ano de 10191, a humanidade se espalhou pelo universo, mas, politicamente, regrediu para um regime feudal. A moeda desse universo é chamada especiaria, um produto com a capacidade de aumentar a expectativa de vida e os poderes de presciência de alguns usuários. Neste universo cheio de intrigas e batalhas, no planeta Arrakis, único lugar onde a especiaria pode ser colhida, entram em conflito os interesses de diversas casas nobres pelo controle da produção da especiaria Melange, para, dessa forma, controlar todo o poder do Universo."
    imgFilme.src = "src/img/Duna1984.jpg"
}

function NavDireitaF(){
    TiFilme.innerHTML = "Duna - 2021"
    txtFilme.innerHTML = "O filme estrelado por Timothée chalamet, zendaya e Oscar Isac é uma reimaginação do primeiro livro da saga. Apesar da sua longa duração o filme só adapta metada do primeiro livro. Ganhou diversos prêmios como: Oscar de Melhor Trilha Sonora Original, Oscar de Melhor Fotografia, Oscar de Melhor Montagem, etc. Arregadou cerca de 401,8 milhões USD e é considerado um dos maiores sucessos dos ultimos anos"
    imgFilme.src = "src/img/Duna2021.jpg"
    contF++

    if(contF>1){
        NavEsquerdaF()
        contF = 0
    }
    
}
function NavEsquerdaL(){
    TiLivro.innerHTML = "Primeira Trilogia"
    txtLivro.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci iste, reprehenderit consectetur laboriosam quasi architecto veniam dicta necessitatibus et tenetur, obcaecati libero facere? Sed possimus hic recusandae. Ducimus, cupiditate ipsum."
    imgLivro.src = "src/img/TriloDunaInicial.png"
}
function NavDireitaL(){
    TiLivro.innerHTML = "Segunda Trilogia"
    txtLivro.innerHTML = "A segunda trilogia da saga é composta pelos livros: O imperador-Deus de duna, Os hereges de Duna e As herdeiras de Duna. Nessa saga, vemos as consequencia do mandato de Paul Atreides no trono e temos a introdução de novos personagens e de conceitos que fazem dessa, a melhor trilogia da saga."
    imgLivro.src = "src/img/SegundaTriloDuna.png"

    contL++

    if(contL>1){
        NavEsquerdaL()
        contL = 0
    }
    
}
/*fim mudar informações*/


//inicio Informações aparecendo durante o scroll
const alvo = document.querySelectorAll('[data-animacao]')
const animacao = 'animado'


function animacaoScroll(){
   
    const alturaPag = window.pageYOffset + (window.innerHeight *3)/4
    
    alvo.forEach(function(elemento){
        if(alturaPag > elemento.offsetTop){
            elemento.classList.add(animacao)
        }
        else{
            elemento.classList.remove(animacao)
        }
    })
    
}

window.addEventListener("scroll", animacaoScroll)

//FIM Informações aparecendo durante o scroll



//scroll suave de terceirooosss

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 10;
  scrollToPosition(to);
}

function scrollToPosition(to) {

  smoothScrollTo(0, to, 1000);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

//fim scroll suave