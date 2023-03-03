function menuHover() {

  
  //Trabalha o border radius do menu
  const subMenuDep = document.querySelector(".menu-dep .sub-menu");

  subMenuDep.addEventListener("mouseover", function(e) {
    const hoverEl = e.target.closest("li");

    if(hoverEl.classList.contains("iterable")){
      this.style.borderBottomRightRadius = "0px";
    }
  });

  subMenuDep.addEventListener("mouseout", function(e) {
    const hoverEl = e.target.closest("li");

    if(hoverEl.classList.contains("iterable")){
      this.style.borderBottomRightRadius = "5px";
    }
  }); 

}



//Código principal
menuHover();
