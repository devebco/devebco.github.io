/* ========================================================= Carousel Start ========================================================= */
/* var dir = "img/img/";
var fileextension = ".jpg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .jpg file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $(".img-viewer").append("<img src='" + filename + "'>");
        });
    }
}); */

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
    slide.style.transitionDuration = "10ms";
    slide.style.transitionDelay = "-2s";    
});

// select prev slide button
const prevSlideBtn = document.querySelector(".btn-prev");
// select next slide button
const nextSlideBtn = document.querySelector(".btn-next");

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



/* ========================================================= Carousel End ========================================================= */
/* ========================================================= Accordion Start ========================================================= */
const elements = document.querySelectorAll('.element');

elements.forEach(element => {
    let btn = element.querySelector('.question div');
    let icon = element.querySelector('.question div i');
    var answer = element.lastElementChild;
    var answers = document.querySelectorAll('.element .answer');

    btn.addEventListener('click', () => {
        answers.forEach(ans => {
            let ansIcon = ans.parentElement.querySelector('div i');
            if (answer !== ans) {
                ans.classList.add('hideText');
                ansIcon.className = 'fa fa-plus-circle';
            }
        });

        answer.classList.toggle('hideText');
        icon.className === 'fa fa-plus-circle' ? icon.className = 'fa fa-minus-circle'
            : icon.className = 'fa fa-plus-circle';
    });
});
/* ========================================================= Accordion Start ========================================================= */
