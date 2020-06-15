window.onscroll =  function() {menuScrollFunction()};

function menuScrollFunction(){
  if (document.body.scrollTop > 20 ||document.documentElement.scrollTop > 20) {
    document.getElementById('headerBox').style.top = "-17%";
    document.getElementById('scrollLogo').style.visibility = "visible";
    document.getElementById('topMenuSection').style.paddingTop = "85px";
  } else {
    document.getElementById("headerBox").style.top = "0";
    document.getElementById('scrollLogo').style.visibility = "hidden";
    document.getElementById('topMenuSection').style.paddingTop = "220px";

  }
}

function openMobileMenu(){
  document.getElementById('mobileMenu').style.height = "auto";
}

function closeMobileMenu(){
  document.getElementById('mobileMenu').style.height = "30px";
}
