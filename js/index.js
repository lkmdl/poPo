window.addEventListener("DOMContentLoaded", () => {

  const empty = document.querySelectorAll(".nav-menu li a");
  for (let i = 0; i < empty.length; i++) {
    function em() {
      alert("준비중입니다...");
      console.log("gd");

    }
    empty[i].addEventListener('click', em);

  }

  const empty_box = document.querySelector('.empty_box');
  const toBtn = document.querySelector('.toBtn');
  toBtn.addEventListener('click', function () {
    toBtn.classList.toggle('on');
    empty_box.classList.toggle('on');

  });

  const aloneBtn = document.querySelector(".head-alone");
  const teamBtn = document.querySelector(".nead-team");
  const aloneCont = document.querySelector(".cont-alone");
  const teamCont = document.querySelector(".cont-team");
  aloneBtn.addEventListener('click', function () {
    console.log("a");
  });
  teamBtn
  aloneCont
  teamCont







  ///////////////////////////////////////////////////////////////////////////////////////////////////
});