console.log("Enter JS")


var quadimages = document.querySelectorAll("#quad figure");
for(i=0; i<quadimages.length; i++) {
  quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
}

/* For swipe feature  */

/* $('.carousel').bcSwipe({ threshold: 50 }); */

/* $(document).ready(function() {
   $("#myCarousel").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#myCarousel").swipeleft(function() {
      $(this).carousel('next');
   });
}); */

/* $(document).on("pagecreate","#myCarousel",function(){
  $("p").on("swipe",function(){
    $(this).hide();
  });                       
}); */

console.log("Exit JS")