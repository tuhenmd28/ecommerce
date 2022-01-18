$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if(value == 'all'){
      $('.filterItem').show('2000')
    }else{
      $('.filterItem').not('.'+value).hide('2000')
      $('.filterItem').filter('.'+value).show('2000')
    }
  })
  //active class
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
});





  var acc = document.querySelector(".alldeparmeant button");
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
  

    } 
  });
  let i = document.querySelector('.manu-wraper label i');
  var acc = document.querySelector(".manu-wraper label");
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    i.classList.toggle('active');
    console.log(this);
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });

  var acc = document.querySelector(".toggle-area");
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    console.log(this);
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });


  // var swiper = new Swiper(".mySwiper", {
  //       slidesPerView: 4,
  //       spaceBetween: 30,
  //       slidesPerGroup: 1,
  //       loop: true,

  //       autoplaySpeed:3000,
  //       //centeredSlides:true,
  //       slidesPerView: "auto",
  //       autoplay:{
  //       delay:3000,
  //       disableOnInteraction:false
  //   },
  //       loopFillGroupWithBlank: true,
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },
  //     });

       let aside = document.querySelector('.aside')

  


      function on() {
        document.getElementById("overlay").style.display = "block";
        aside.classList.add('active');
      }
      
      function off() {
        document.getElementById("overlay").style.display = "none";
        aside.classList.remove('active');

      }

     