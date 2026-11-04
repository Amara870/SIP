// Slidshow

// slideshow image array
let arrImages = [
    "../images/download (1).jpg",
    "../images/download (18).jpg",
    "../images/images.png",
    "../images/Company_logo.png"
];

let currImg = 0;

function showSlide(index) {
    let image = document.getElementById("slides");
    image.src = arrImages[index];
}

showSlide(currImg);

function prevSlide() {
    currImg--;

    if (currImg < 0) {
        currImg = arrImages.length - 1;
    }

    showSlide(currImg);
}

function nextSlide() {
    currImg++;

    if (currImg >= arrImages.length) {
        currImg = 0;
    }

    showSlide(currImg);
}