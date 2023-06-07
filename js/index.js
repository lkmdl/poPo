window.addEventListener("DOMContentLoaded", () => {
  const empty = document.querySelectorAll(".nav-menu li a");

  for (let i = 0; i < empty.length; i++) {
    function em() {
      alert("준비중입니다...");
      console.log("gd");

    }

    empty[i].addEventListener('click', em);

  }

  const section = document.querySelector('section');
  const toggleBtn = document.querySelector('.toggleBtn');
  const icons = document.querySelector('.navbar__icons');

  toggleBtn.addEventListener('click', () => {
    section.classList.toggle('active');
    icons.classList.toggle('active');
    //menu의 클래스리스트에 'active' 클래스가 있다면 없애주고, 없다면 'active' 클래스를 추가는 역활을 한다.
  });



  ///////////////////////////////////////////////////////////////////////////////////////////////////
});