const onMobile = window.matchMedia("(max-width: 768px)").matches;

const isElementLoaded = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return true;
};


const useMenuMobile = {
  setEventClick: function () {
    const btnMenu = document.querySelector('.openmenu');
    btnMenu.addEventListener('click', ()=>{
      document.querySelector('.links').classList.add('show-menu-mobile')
    })
    
    const btnClose = document.querySelector('.topo-links .close');
    btnClose.addEventListener('click', ()=>{
      document.querySelector('.links').classList.remove('show-menu-mobile')
    });
  },
  init: function() {
    this.setEventClick();
  }
}

function showFiltro() {
  document.querySelector('.filtro-suspenso').classList.toggle('open-filtro-suspenso');
}
function hiddenFiltro() {
  document.querySelector('.filtro-suspenso').classList.remove('open-filtro-suspenso');
}


window.addEventListener('load', ()=>{
  onMobile ? useMenuMobile.init() : null;
})

console.log('dev 4.0');