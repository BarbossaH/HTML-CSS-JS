var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var prevSlide;
var readyToSlide = true;
var interval;

function initializeSlideshow() {
    var productdivs = $('.slideshow-container div.slide-item');
    let slides = productdivs.length;
    for (var i = 0; i < slides; i++) {
        $(".dots-group.grp1")
            .append("<span class='dot' onclick='currentSlide(" + (i + 1) + ")'></span>");
    }
    $('.slideshow-container div.slide-item').first().css("width", "100%");
    $('.dots-group.grp1 span').first().addClass("active");
    interval = setInterval("plusSlides(1)", 7000);
}

function initializeSlideshow2() {
    let imgPerSlide = 0;
    if ($(window).width() <= 478) {
        imgPerSlide = 2;
    } else {
        imgPerSlide = 5;
    }
    $('#slideshow-container2 img').wrap("<div class = 'content'></div>");

    var productdivs = $('#slideshow-container2 div.content');
    let slides = productdivs.length / imgPerSlide;
    console.log(slides);
    for (var i = 0; i < productdivs.length; i += imgPerSlide) {
        productdivs.slice(i, i + imgPerSlide).wrapAll("<div class='mySlides mySlides2'></div>");
    }
    for (var i = 0; i < slides; i++) {
        $(".dots-group.grp2")
            .append("<span class='dot2' onclick='currentSlide2(" + (i + 1) + ")'></span>");

    }
    $('#slideshow-container2 div.mySlides.mySlides2').first().css("display", "flex");
    $('.dots-group.grp2 span').first().addClass("active");
}

function initializeSlideshow3() {
    let imgPerSlide = 0;
    if ($(window).width() <= 478) {
        imgPerSlide = 2;
    } else {
        imgPerSlide = 4;
    }
    $('#slideshow-container3 img').wrap("<div class = 'content'></div>");

    var productdivs = $('#slideshow-container3 div.content');
    let slides = productdivs.length / imgPerSlide;
    console.log(slides);
    for (var i = 0; i < productdivs.length; i += imgPerSlide) {
        productdivs.slice(i, i + imgPerSlide).wrapAll("<div class='mySlides mySlides3'></div>");
    }
    for (var i = 0; i < slides; i++) {
        $(".dots-group.grp3")
            .append("<span class='dot3' onclick='currentSlide3(" + (i + 1) + ")'></span>");

    }
    $('#slideshow-container3 div.mySlides.mySlides3').first().css("display", "flex");
    $('.dots-group.grp3 span').first().addClass("active");
}

/*********************************************
for slideshow 1*******************************
**********************************************/

function plusSlides(n) {
    if (!readyToSlide) {
        return;
    }
    prevSlide = slideIndex;
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    if (!readyToSlide) {
        return;
    }
    prevSlide = slideIndex;
    showSlides(slideIndex = n);
}

function showSlides(n) {

    readyToSlide = false;
    clearInterval(interval);
    var i;
    var slides = document.getElementsByClassName("slide-item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slideIndex);
    console.log(prevSlide);
    //slides[slideIndex - 1].style.width = "100%";

    $(".slide-item:eq(" + (prevSlide - 1) + ") .slide-content").animate({ opacity: 0 }, 500, function () {
        $(".slide-item:eq(" + (prevSlide - 1) + ") ").animate({ width: '0', height:'500px' }, 1000);
        $(".slide-item:eq(" + (slideIndex - 1) + ") ").animate({ width: '100%', height:'500px'}, 1000, function () {
            $(".slide-item:eq(" + (slideIndex - 1) + ") .slide-content").animate({ opacity: 1 }, 500, function () {
                readyToSlide = true; interval = setInterval("plusSlides(1)", 4000);
            });
        });
    })
    dots[slideIndex - 1].className += " active";
}

/*********************************************
for slideshow 1 end*******************************
**********************************************/

/*********************************************
for slideshow 2*******************************
**********************************************/

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "flex";
    dots[slideIndex2 - 1].className += " active";
}

/*********************************************
for slideshow 2 end*******************************
**********************************************/

/*********************************************
for slideshow 3*******************************
**********************************************/

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("dot3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3 - 1].style.display = "flex";
    dots[slideIndex3 - 1].className += " active";
}

/*********************************************
for slideshow 3 end*******************************
**********************************************/