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

// --------------------------------------------------------- //

let button = document.querySelector('.submit-email')

button.addEventListener('touchstart', function() {
    button.style.backgroundColor = '#fff'
} )

button.addEventListener('touchend', function() {
    button.style.backgroundColor = '#E32454'
} )

// --------------------------------------------------------- //

let buttonBar = document.querySelector('.login-button2')

buttonBar.addEventListener('touchstart', function() {
    buttonBar.style.backgroundColor = '#28293E'
    buttonBar.style.color = '#fff'
} )

buttonBar.addEventListener('touchend', function() {
    buttonBar.style.backgroundColor = '#E32454'
    buttonBar.style.color = '#fff'
} )
