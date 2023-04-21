console.log("Enter JS")


var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}

$('.carousel').bcSwipe({ threshold: 50 });

console.log("Exit JS")