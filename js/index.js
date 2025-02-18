window.addEventListener("DOMContentLoaded", () => {
    const empty = document.querySelectorAll(".nav-menu li a");
    for (let i = 0; i < empty.length; i++) {
      function em() {
        alert("empty...");
        console.log("gd");
      }
      empty[i].addEventListener('click', em);
    }
  
    const toBtn = document.querySelectorAll('.toBtn');
    for (let i = 0; i < toBtn.length; i++) {
        toBtn[i].addEventListener("click", function () {
          this.classList.toggle('on');
          const Folding_box = this.parentNode.nextElementSibling;
          Folding_box.classList.toggle('on');
  
        })    
    }
  
    ///////////////////////////////////////////////////////////////////////////////////////////////////
  });