const onMobile = window.matchMedia("(max-width: 768px)").matches;

const isElementLoaded = async (selector) => {
  while (document.querySelector(selector) === null) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  return true;
};

const useMenuMobile = {
  setSubMenuMobile: function () {
    document.querySelectorAll('nav li:has(.drop) > a').forEach(element => {
      element.addEventListener('click', e => {
          e.preventDefault();
          element.parentElement.classList.toggle('sub-menu-mobile-ativo')
          element.nextElementSibling.classList.toggle('show-sub-menu-mobile')
      })
    })

    // Set submenu3
    document.querySelectorAll('li ul[submenu3]:has(li)').forEach(element => {
      const arrow = document.createElement('span');
      arrow.classList = 'fa fa-angle-down';
      element.parentElement.children[0].appendChild(arrow);


      element.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        element.classList.toggle('show-submenu3')
      })
    })
    console.log('submenu16')
  },
  
  setEventClick: function () {
    const btnMenu = document.querySelector(".openmenu");
    btnMenu.addEventListener("click", () => {
      document.querySelector(".links").classList.add("show-menu-mobile");
    });

    const btnClose = document.querySelector(".topo-links .close");
    
    btnClose.addEventListener("click", () => {
      document.querySelector(".links").classList.remove("show-menu-mobile");
      document.querySelector('body').classList.remove('no-scroll');
    });
  },
  init: function () {
    this.setEventClick();
    this.setSubMenuMobile();
  },
};

function showFiltro() {
  document
    .querySelector(".filtro-suspenso")
    .classList.toggle("open-filtro-suspenso");
}
function hiddenFiltro() {
  document
    .querySelector(".filtro-suspenso")
    .classList.remove("open-filtro-suspenso");
}

const createVariantsButtonFromProductList = {
  setEventButton: function () {
    document.querySelectorAll('.btn-cores').forEach(element =>{
      element.addEventListener('click', (e) => {
        e.target.previousSibling.classList.toggle('show-colors');
      })
    })
    document.querySelectorAll('.btn-tamanhos').forEach(element =>{
      element.addEventListener('click', (e) => {
        e.target.previousSibling.classList.toggle('show-tamanhos');
      })
    })
  },
  createButtons: function () {
    document.querySelectorAll(".produtos .item .cores").forEach((element) => {
      const btnCores = document.createElement("div");
      btnCores.classList.add("btn-cores");
      btnCores.textContent = "mais cores";
      element.after(btnCores.cloneNode(true));
    });
    document.querySelectorAll(".produtos .item .variacoes").forEach((element) => {
      const btnCores = document.createElement("div");
      btnCores.classList.add("btn-tamanhos");
      btnCores.textContent = "ver tamanhos";
      element.after(btnCores.cloneNode(true));
    });
  },
  init: function () {
    this.createButtons();
    this.setEventButton();
  },
};

window.addEventListener("load", () => {
  onMobile ? useMenuMobile.init() : null;

  isElementLoaded(".produtos .item .cores").then(() => {
    document.querySelector('#page_home') || window.location.pathname === '/busca/' ? createVariantsButtonFromProductList.init() : null;
  });
});

console.log("dev 7.0");
