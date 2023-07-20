$(document).ready(function () {
    $("<link/>", { rel: "stylesheet", type: "text/css", href: "../../css/index.css" }).appendTo("head");
    $("#header-parent-div").load("/index.html #header-parent-div");
    $("#footer-body").load("/index.html #footer-body");
});

/* ========================================================= Carousel Start ========================================================= */

/* console.log("Entry in JS "); */

/* var img_count = 2;
var i = 1;
while (i <= img_count) {
    $(".product-imgs").append("<img src=img/product-img/BPO1-45-po-" + i + ".jpg>");
    i++;
} */

// Select all slides
const slides = document.querySelectorAll(".product-imgs img");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
    slide.style.transitionDuration = "10ms";
    slide.style.transitionDelay = "-2s";
});

console.log("ABC");

// select prev slide button
const prevSlideBtn = document.querySelector(".pro-page-btn-prev");
// select next slide button
const nextSlideBtn = document.querySelector(".pro-page-btn-next");

let curSlide = 0;

// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlideBtn.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        /* curSlide = 0; */  /* commented this for preveting reverse slide */
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        slide.style.transitionDuration = "500ms";
        slide.style.transitionDelay = "1ms";

        if (curSlide != 0) {
            prevSlideBtn.style.visibility = "visible";
        }
        if (curSlide === maxSlide) {
            nextSlideBtn.style.visibility = "hidden";
        }
    });
});

// If current slide is the first slide
if (curSlide === 0) {
    prevSlideBtn.style.visibility = "hidden";
}

// add event listener and navigation functionality
prevSlideBtn.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        /*curSlide = maxSlide; */  /* commented this for preveting reverse slide */
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        slide.style.transitionDuration = "500ms";
        slide.style.transitionDelay = "1ms";


        if (curSlide === 0) {
            prevSlideBtn.style.visibility = "hidden";
        }
        if (curSlide != maxSlide) {
            nextSlideBtn.style.visibility = "visible";
        }
    });
});

/* ========================================================= Carousel End | Accordion Start ========================================================= */
const elements = document.querySelectorAll('.element');

elements.forEach(element => {
    let btn = element.querySelector('.question');
    let icon = element.querySelector('.question i');
    var answer = element.lastElementChild;
    var answers = document.querySelectorAll('.element .answer');
/*     var plusIcon = 'plus-ico.png';
    var minusIcon = 'minus-ico.png'; */

    btn.addEventListener('click', () => {
        answers.forEach(ans => {
            let ansIcon = ans.parentElement.querySelector('i');
            if (answer !== ans) {
                ans.classList.add('hideText');
                ansIcon.className = 'fa fa-plus-circle';

            }
        });

        answer.classList.toggle('hideText');
        icon.className === 'fa fa-plus-circle' ? icon.className = 'fa fa-minus-circle' : icon.className = 'fa fa-plus-circle';
    });
    /* btn.addEventListener('click', () => {
        
        answers.forEach(ans => {
            let ansIcon = ans.parentElement.querySelector('i');
            if (answer !== ans) {
                ans.classList.add('hideText');
                ansIcon.className = 'fa fa-plus-circle';
                console.log("ansIcon --> "+ansIcon);
                ansIcon.src = plusIcon;
                console.log("ansIcon.src --> "+ansIcon.src);
            }
        });

        answer.classList.toggle('hideText');

        console.log("answer.className --> "+answer.className);

        if(answer.className == "hideText"){
            console.log("Inside if");
            icon.src === minusIcon
        }
        else{
            console.log("Inside else");
            icon.src === plusIcon
        }

        icon.src === plusIcon ? icon.src =  minusIcon: icon.src = plusIcon; 

    });*/
});
/* ========================================================= Accordion End ========================================================= */
