  function menuShow() {
      let menuMobile = document.querySelector('.mobile-menu');
      if (menuMobile.classList.contains('open')) {
          menuMobile.classList.remove('open');
          document.querySelector('.icon').src = "hamburguer.png";
      } else {
          menuMobile.classList.add('open');
          document.querySelector('.icon').src = "iconx22.png";
      }
  }
