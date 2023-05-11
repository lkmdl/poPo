window.addEventListener("DOMContentLoaded", () => {

  const empty = document.querySelectorAll(".nav-menu li a")

  for (let i = 0; i < empty.length; i++) {
    empty[i].addEventListener('click', function () {
      console.log("gd");
      alert("준비중입니다...");
    })
  }



///////////////////////////////////////////////////////////////////////////////////////////////////
});