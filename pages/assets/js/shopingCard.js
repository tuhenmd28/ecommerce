
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

  let add1 = document.querySelector(".add1");
  let add2 = document.querySelector(".add2");
  let add3 = document.querySelector(".add3");
  let display1 = document.querySelector(".display1");
  let display2 = document.querySelector(".display2");
  let display3 = document.querySelector(".display3");
  let remove1 = document.querySelector(".remove1");
  let remove2 = document.querySelector(".remove2");
  let remove3 = document.querySelector(".remove3");
  let priceAdd1 = document.querySelector(".priceAdd1");
  let priceAdd2 = document.querySelector(".priceAdd2");
  let priceAdd3 = document.querySelector(".priceAdd3");
  let number = 1;
 let ami  = priceAdd2.innerHTML;
  function counter(add,diaplay, remove){
    add.addEventListener("click",()=>{
      number++;
      // let value = Number(priceAdd.innerText);
      //  let get = value;
      // let price = value  +  get;
      // console.log(value);
      
      // priceAdd.innerText = price;
      diaplay.innerText = number;
    })
    remove.addEventListener("click",()=>{
      if(number>0 ){
        number--;
       
        diaplay.innerText = number;
      }
    })
  }
  counter(add1,display1,remove1)
  counter(add2,display2,remove2)
  counter(add3,display3,remove3)