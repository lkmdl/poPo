///////////////////////////////////////////////////// loading area
/////////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("loading complete");  

  /******************************************************
   ******************************************************/
 let enter = document.querySelector(".go");
 /******************************************************
  ******************************************************/
  enter.onclick =
  ()=>{
    location.href = "https://lkmdl.github.io/poPo/html/pg1-1.html";
    
  }

  $(".go").hover(function(){
    $(".bg")
    .toggleClass('smile')
    // .css
    // ("background", "url('../img/join2.png')");
  });

  // $(".go").mouseout(function(){
  //   $(".bg")
  //   .toggleClass('on')
  // });

});////////////////////////////////////////////////// loading area
//////////////////////////////////////////////////////////////////