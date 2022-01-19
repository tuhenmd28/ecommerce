$(document).ready(function(){
  // $('.filterLI').click(function(){
  //   const value = $(this).attr('data-filter');
  //   if(value == "Description"){
  //     $(".Description").show(1000)
  //   }else{
  //     $(".Description").hide(1000)
  //   }
  //   if(value == "Information"){
  //     $(".Information").show(1000)
  //   }else{
  //     $(".Information").hide(1000)
  //   }
  //   if(value == "Reviews"){
  //     $(".Reviews").show(1000)
  //   }else{
  //     $(".Reviews").hide(1000)
  //   }
   
  // })
  //active class
  $('.filterLI').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
});

let list = document.querySelectorAll(".")

// image  change js
let bigImg = document.querySelector(".img-show-area img");
let allImg = document.querySelectorAll(".slider img");

allImg.forEach((a)=>{
  a.addEventListener("click",()=>{
    let getsrc = a.src;
    bigImg.src = getsrc;
    console.log(getsrc);
  })
})

// incriment and decriment js
let remove = document.querySelector(".remove");
let number = document.querySelector("#number");
let add = document.querySelector(".add");
let count = 0;

let getValue = Number(number.innerHTML)

remove.addEventListener("click",()=>{
  if(count>0){
    count = count - 1;
    number.textContent = count;
  }
})
add.addEventListener("click",()=>{
  
    count = count + 1;
    number.textContent = count;

  
})


//   itemIlist area js
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



// aside area js
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



     let aside = document.querySelector('.aside')

    function on() {
      document.getElementById("overlay").style.display = "block";
      aside.classList.add('active');
    }
    
    function off() {
      document.getElementById("overlay").style.display = "none";
      aside.classList.remove('active');

    }

   