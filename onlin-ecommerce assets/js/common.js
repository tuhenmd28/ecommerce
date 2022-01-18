
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

   