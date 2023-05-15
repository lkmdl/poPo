window.addEventListener("DOMContentLoaded", () => {
  const empty = document.querySelectorAll(".nav-menu li a");


  for (let i = 0; i < empty.length; i++) {

    function em() {
      alert("준비중입니다...");
      console.log("gd");

    }

    empty[i].addEventListener('click', em);

  }



  ///////////////////////////////////////////////////////////////////////////////////////////////////
});