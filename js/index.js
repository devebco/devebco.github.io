/* ========================================================= Header Start ========================================================= */
/* console.log("entry : header"); */
/* This block of code is for only when navbar is working on click action only, hover makes another action which ends click action */

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
        /* console.log("PQR"); */
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
        /* console.log("XYZ"); */
    })
})

/* console.log("exit : header"); */
/* ========================================================= Header End ========================================================= */
/* ======================================================= Carousel1 Start ======================================================= */

// Select all slides
const slides = document.querySelectorAll(".carousel2slide");
/* console.log("slides -->",slides); */
// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((carousel2slide, indx) => {
    carousel2slide.style.transform = `translateX(${indx * 100}%)`;
});
// select next slide button
const prevSlide = document.querySelector(".btn-prev");
// select next slide button
const nextSlide = document.querySelector(".btn-next");
// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;
/* ================================================== Actual Working ================================================== */

prevSlide.style.visibility = "hidden";

// add event listener and navigation functionality - For NextBtn
nextSlide.addEventListener("click", function () {

    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        /* curSlide = 0; */  /* commented this for preveting reverse slide */
    } else {
        curSlide++;
    }
    //   move slide by -100%
    slides.forEach((carousel2slide, indx) => {
        carousel2slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;

        if (curSlide != 0) {
            prevSlide.style.visibility = "visible";
        }
        if (curSlide === maxSlide) {
            nextSlide.style.visibility = "hidden";
        }
    });
});

// add event listener and navigation functionality - For PrevBtn
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        /*curSlide = maxSlide; */  /* commented this for preveting reverse slide */
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((carousel2slide, indx) => {
        carousel2slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        if (curSlide === 0) {
            prevSlide.style.visibility = "hidden";
        }
        if (curSlide != maxSlide) {
            nextSlide.style.visibility = "visible";
        }
    });
});


/* ======================================================= Carousel1 End ======================================================= */
/* ========================================================= Icon Box Slider Start ========================================================= */
/* console.log("Entry : iconboxslider"); */

function prev() {
    document.getElementById('iconboxslider-container').scrollLeft -= 270;
}

function next() {
    document.getElementById('iconboxslider-container').scrollLeft += 270;
}

/* $(".iconboxslide img").on("click", function () {
    $(this).toggleClass('zoomed');
    $(".overlay").toggleClass('active');
    console.log("ABCD");
}) */

var parent = document.querySelector("#iconboxslider-container");
var children = document.querySelector(".iconboxslide");

/* console.log("parent is : ", parent);
console.log("children is : ", children);
console.log("parent.children.length is : ", parent.children.length); */

for (var i = 0; i < parent.children.length; i++) {
    parent.appendChild(parent.children[Math.random() * i | 0]);
}


/* console.log("Exit : iconboxslider"); */
/* ========================================================= Icon Box Slider End ========================================================= */
/* ========================================================= Random Grid Start ========================================================= */
/* console.log("entry : random-grid"); */

var parent = document.querySelector(".random-grid-body");
var children = document.querySelector(".random-grid-item");

/* console.log("parent is : ", parent);
console.log("children is : ", children);
console.log("parent.children.length is : ", parent.children.length); */

for (var i = 0; i < parent.children.length; i++) {
    parent.appendChild(parent.children[Math.random() * i | 0]);
}

/* console.log("exit : random-grid"); */
/* ========================================================= Random Grid End ========================================================= */
