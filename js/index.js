window.addEventListener("DOMContentLoaded", () => {
  const empty = document.querySelectorAll(".nav-menu li a");
  for (let i = 0; i < empty.length; i++) {
    function em() {
      alert("준비중입니다...");
      console.log("gd");
    }
    empty[i].addEventListener('click', em);
  }

  // const toBtn = document.querySelector('.toBtn');
  // const empty_box = toBtn.parentNode.nextElementSibling;
  // toBtn.addEventListener('click', function () {
  //   this.classList.toggle('on');
  //   console.log(this)
  //   empty_box.classList.toggle('on');
  //   console.log(empty_box)

  // });

  const s3_toBtn = document.querySelector('#section-3 .toBtn');
  const s3_empty_box = document.querySelector('#section-3 .empty_box');
  s3_toBtn.addEventListener('click', function () {
    s3_toBtn.classList.toggle('on');
    s3_empty_box.classList.toggle('on');
  });

  const s4_toBtn = document.querySelector('#section-4 .toBtn');
  const s4_empty_box = document.querySelector('#section-4 .empty_box');
  s4_toBtn.addEventListener('click', function () {
    s4_toBtn.classList.toggle('on');
    s4_empty_box.classList.toggle('on');
  });



  ///////////////////////////////////////////////////////////////////////////////////////////////////
});