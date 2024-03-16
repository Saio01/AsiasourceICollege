const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;


initializeSlider();

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");

}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;

    }
    else if(index < 0){
        slideIndex = slides.length - 1;


    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");

    } );
    slides[slideIndex].classList.add("displaySlide");


}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}










const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const images = document.querySelectorAll('.fade-in');
images.forEach((image) => {
    observer.observe(image);
});


















