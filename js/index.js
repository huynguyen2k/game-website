/* ====================== start-section-top-bar ====================== */

const toggleMenuBtn = document.querySelector("#top-bar .nav-toggle");
const navMenu = document.querySelector("#top-bar .menu");

toggleMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active-menu");
});

/* ====================== end-section-top-bar ====================== */

/* ====================== start-section-hero-image ====================== */

const heroImage = document.getElementById("hero-image");
const dotsList = document.querySelectorAll("#hero-image .dots li");
const heroTitle = document.querySelector("#hero-image .title");
const heroContent = document.querySelector("#hero-image .content");
const heroReadMoreBtn = document.querySelector("#hero-image .read-more-btn");

window.addEventListener("load", showTextHeroImage);
dotsList.forEach((item, index) => {
    item.addEventListener("click", function () {
        chooseDots(index);
    });
});

const timeNextSlide = 5000;
let indexImage = 0;
let autoNextHeroImage = setInterval(nextHeroImage, timeNextSlide);


function nextHeroImage() {
    indexImage++;

    if (indexImage == 2) {
        indexImage = 0;
    }

    updateHeroImage();
    updateDots();
}

function updateHeroImage() {

    hideTextHeroImage();
    setTimeout(showTextHeroImage, 100);

    if (indexImage === 0) {
        heroImage.style.background = "url('images/slider-1.jpg') no-repeat center";
    } else {
        heroImage.style.background = "url('images/slider-2.jpg') no-repeat center";
    }
}

function resetTimeInterval() {
    clearInterval(autoNextHeroImage);
    autoNextHeroImage = setInterval(nextHeroImage, 5000);
}

function chooseDots(index) {
    if (index != indexImage) {
        indexImage = index;

        resetTimeInterval();
        updateHeroImage();
        updateDots();
    }
}

function updateDots() {
    dotsList.forEach(item => item.classList.remove("active-dot"));
    dotsList[indexImage].classList.add("active-dot");
}

function showTextHeroImage() {

    heroTitle.style.transition = ".5s 1s";
    heroContent.style.transition = ".5s .75s";
    heroReadMoreBtn.style.transition = ".5s .5s";

    heroTitle.classList.add("show-text");
    heroContent.classList.add("show-text");
    heroReadMoreBtn.classList.add("show-text");
}


function hideTextHeroImage() {

    heroTitle.style.transition = "none";
    heroContent.style.transition = "none";
    heroReadMoreBtn.style.transition = "none";

    heroTitle.classList.remove("show-text");
    heroContent.classList.remove("show-text");
    heroReadMoreBtn.classList.remove("show-text");
}

/* ====================== end-section-hero-image ====================== */

/* ====================== start-section-latest-news ====================== */

const latestNews = document.querySelector("#latest-news .latest-news__news");
const newsContainer = document.querySelector("#latest-news .news-container");
const newsList = document.querySelectorAll("#latest-news .news-list");

const textAnimationTime = 13;

window.addEventListener("load", animationText);

function animationText() {
    let firstTimeAnimation = latestNews.clientWidth * textAnimationTime / newsList[0].clientWidth;

    newsContainer.style.width = newsList[0].clientWidth * 2 + "px";
    latestNews.style.animation = `animationStart ${firstTimeAnimation + "s"} linear`;
    newsContainer.style.animation = `animationText ${textAnimationTime + "s"} linear ${firstTimeAnimation + "s"} infinite`;
}

/* ====================== end-section-latest-news ====================== */
