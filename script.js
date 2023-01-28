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

  var myButton = document.getElementsByClassName('submit-email')[0]

  myButton.addEventListener("touchstart", function(){
    myButton.classList.add("submit-emailActive")
  })

  myButton.addEventListener("touchend", function(){
    myButton.classList.remove("submit-emailActive")
  })