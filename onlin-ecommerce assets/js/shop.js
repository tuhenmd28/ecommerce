window.onload = function() {
  sliderOne();
  sliderTwo();
}




let sliderone = document.getElementById('slider-1');
let slidertwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range1');
let displayValTwo = document.getElementById('range2');
let minGap = 0 ;
let sliderTrack = document.querySelector(".slider-track")
let sliderMaxValue = document.getElementById("slider-1").max;
function sliderOne(){
  if(parseInt(slidertwo.value) - parseInt(sliderone.value) <= minGap){
      sliderone.value = parseInt(slidertwo.value) - minGap;
  }
  displayValOne.value = sliderone.value;
  fillcolor();
}

function sliderTwo(){
  if(parseInt(slidertwo.value) - parseInt(sliderone.value) <= minGap){
      slidertwo.value = parseInt(sliderone.value) + minGap;
  }
  displayValTwo.value = slidertwo.value;
  fillcolor();
}
function fillcolor(){
  percent1 = (sliderone.value/ sliderMaxValue) * 100;
  percent2 = (slidertwo.value/ sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%,#DD2222 ${percent1}%,#DD2222 ${percent2}%,#dadae5 ${percent2}%)`;
}







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
  
       