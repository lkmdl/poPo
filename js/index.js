window.addEventListener("DOMContentLoaded", () => {

  const empty = document.querySelectorAll(".nav-menu li a");
  for (let i = 0; i < empty.length; i++) {
    function em() {
      alert("준비중입니다...");
      console.log("gd");

    }
    empty[i].addEventListener('click', em);

  }

  const toBtn = document.querySelector('.toBtn');
  const empty_box = document.querySelector('.empty_box');

  toBtn.addEventListener('click', function () {
    toBtn.classList.toggle('on');
    empty_box.classList.toggle('on');
  });

  $(".head_alone span").on("click", function () {
    $(".head_alone span").css("text-decoration-line", "underline")
    $(".head_team span").css("text-decoration-line", "none")
    $(".cont-alone").css("display", "block");
    $(".cont-team").css("display", "none");
  })
  
  $(".head_team span").on("click", function () {
    $(".head_team span").css("text-decoration-line", "underline")
    $(".head_alone span").css("text-decoration-line", "none")
    $(".cont-team").css("display", "block");
    $(".cont-alone").css("display", "none");
  })

  ///////////////////////////////////////////////////////////////////////////////////////////////////
});