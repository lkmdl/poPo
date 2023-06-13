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

  $(".cont_head span").hover(function () {
    $(this).css("text-decoration-line", "underline");

  })

  $("#section-2 cont-alone:nth-child(1)").hover(function () {
    
  })

  $("#section-2 cont-alone:nth-child(2)").hover(function () {
    
  })

  $("#section-2 cont-alone:nth-child(3)").hover(function () {
    
  })


  $("#section-2 cont-team:nth-child(1)").hover(function () {
    
  })

  $("#section-2 cont-team:nth-child(2)").hover(function () {
    
  })

  $("#section-2 cont-team:nth-child(3)").hover(function () {
    
  })


  $(".head_alone span").on("click", function () {
    $("#section-2 img:nth-child(1)").css("display", "block");
    $("#section-2 img:nth-child(2)").css("display", "none");
    $(".head_alone span").css("text-decoration-line", "underline");
    $(".head_team span").css("text-decoration-line", "none");
    $(".head_team span:nth-child(2)").text(" asdf");
    $(".cont-alone").css("display", "block");
    $(".cont-team").css("display", "none");

  })

  $(".head_team span").on("click", function () {
    $("#section-2 text-gred img:nth-child(1)").css("display", "none");
    $("#section-2 text-gred img:nth-child(2)").css("display", "block");
    $(".head_team span").css("text-decoration-line", "underline")
    $(".head_alone span").css("text-decoration-line", "none")
    $(".cont-team").css("display", "block");
    $(".cont-alone").css("display", "none");

  })

  ///////////////////////////////////////////////////////////////////////////////////////////////////
});