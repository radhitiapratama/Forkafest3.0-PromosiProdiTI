"use strict";

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const cardAnimation = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("show-card-animation");
        } else {
            element.target.classList.remove("show-card-animation");
        }
    });
})

// Text Scroll Animation
const scroolTextAnimation = new IntersectionObserver(elements => {
    elements.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add("show-text");
        } else {
            el.target.classList.remove("show-text");
        }
    })
});

const scroolAnimationFadeLeft = new IntersectionObserver(elements => {
    elements.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add("show-animation-fade-left");
        } else {
            el.target.classList.remove("show-animation-fade-left");
        }
    });
});

const scroolAnimationFadeRight = new IntersectionObserver(elements => {
    elements.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add("show-animation-fade-right");
        } else {
            el.target.classList.remove("show-animation-fade-right");
        }
    });
});

const scroolAnimationSuprise = new IntersectionObserver(elements => {
    elements.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add("show-animation-suprise");
        } else {
            el.target.classList.remove('show-animation-suprise');
        }
    });
});

const animationFadeLeft = document.querySelectorAll(".hide-animation-fade-left");
if (animationFadeLeft) {
    animationFadeLeft.forEach(el => scroolAnimationFadeLeft.observe(el));
}

const animationFadeRight = document.querySelectorAll(".hide-animation-fade-right");
if (animationFadeRight) {
    animationFadeRight.forEach(el => scroolAnimationFadeRight.observe(el));
}

const textAnimation = document.querySelectorAll(".hide-text");
if (textAnimation) {
    textAnimation.forEach(el => scroolTextAnimation.observe(el));
}

const cards = document.querySelectorAll(".card");


const hamburgerMenu = document.querySelector(".hamburger-menu");
const navItems = document.querySelector("nav .nav-items");
const navListItems = document.querySelectorAll("nav .nav-items ul li");

if (hamburgerMenu != null) {
    hamburgerMenu.addEventListener("click", function (e) {
        navItems.classList.toggle("active");
        hamburgerMenu.classList.toggle('active');
    });
}

if (navListItems != null) {
    navListItems.forEach(el => {
        el.addEventListener("click", function (e) {
            let active = document.querySelector(".nav-items ul li.active");
            if (active) {
                active.classList.remove("active");
            }
            el.classList.add("active");

        });
    })
}

if (navItems != null) {
    navListItems.forEach(el => {
        el.addEventListener("click", function () {
            navItems.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        });
    });
}

const ballWrappers = document.querySelectorAll(".ball-wrapper");
if (ballWrappers != null) {
    ballWrappers.forEach(el => observer.observe(el));
}

const scroolTop = document.querySelector(".scrool-top");
if (scroolTop != null) {
    window.onscroll = function () {
        if (document.body.scroolTop > 300 || document.documentElement.scrollTop > 300) {
            scroolTop.style.display = "flex";
        } else {
            scroolTop.style.display = "none";
        }
    };

    scroolTop.addEventListener("click", function () {
        document.body.scroolTop = 0;
        document.documentElement.scroolTop = 0;
    });
}

const btnNextPendaftaran = document.querySelector(".btn-next-pendaftaran");
const btnPreviousPendaftaran = document.querySelector(".btn-previous-pendaftaran");
const dataPendaftarans = document.querySelectorAll(".data-pendaftaran");

if (btnNextPendaftaran != null && btnPreviousPendaftaran != null && dataPendaftarans != null) {
    const img = document.querySelector(".pendaftaran-container img");
    const title = document.querySelector(".pendaftaran-container h1");
    const date = document.querySelector(".pendaftaran-container h4");
    const text = document.querySelector(".pendaftaran-container p");
    let index = 0;
    btnNextPendaftaran.addEventListener("click", function () {
        let imgSrcArr = img.src.split("/");
        imgSrcArr.pop();
        index++;

        if (index >= dataPendaftarans.length) {
            index = 0;
        }

        imgSrcArr.push(`${dataPendaftarans[index].dataset.img}.jpg`);
        let realImgSrc = imgSrcArr.join("/");
        img.src = realImgSrc;

        let nextTitle = dataPendaftarans[index].dataset.title;
        let nextDate = dataPendaftarans[index].dataset.date;
        let nextText = dataPendaftarans[index].dataset.text;


        title.textContent = nextTitle;
        date.textContent = nextDate;
        text.textContent = nextText;
    });

    btnPreviousPendaftaran.addEventListener("click", function () {
        let imgSrcArr = img.src.split("/");
        imgSrcArr.pop();
        index--;

        if (index <= 0) {
            index = dataPendaftarans.length - 1;
        }

        imgSrcArr.push(`${dataPendaftarans[index].dataset.img}.jpg`);
        let realImgSrc = imgSrcArr.join("/");
        img.src = realImgSrc;

        let nextTitle = dataPendaftarans[index].dataset.title;
        let nextDate = dataPendaftarans[index].dataset.date;
        let nextText = dataPendaftarans[index].dataset.text;

        title.textContent = nextTitle;
        date.textContent = nextDate;
        text.textContent = nextText;
    });
}

const pendaftaranContainer = document.querySelectorAll(".pendaftaran-container");
pendaftaranContainer.forEach(el => observer.observe(el));

const dataMisiArr = document.querySelectorAll(".data-misi");
const btnNextMisi = document.querySelector(".btn-misi-next");
const btnPrevMisi = document.querySelector(".btn-misi-prev");

if (dataMisiArr && btnNextMisi && btnPrevMisi) {
    let index = 0;
    const imgMisi = document.querySelector(".misi-pictures .img-misi");
    const descMisi = document.querySelector(".misi-pictures .misi-desc");

    function changeImgAndText(index) {
        let srcArr = imgMisi.src.split("/");
        srcArr.pop();
        srcArr.push(`${dataMisiArr[index].dataset.img}.jpg`);
        imgMisi.src = srcArr.join("/");
        descMisi.textContent = dataMisiArr[index].dataset.desc;
    }

    btnNextMisi.addEventListener("click", function () {
        index++;
        if (index > dataMisiArr.length - 1) {
            index = 0;
        }
        changeImgAndText(index);
    });

    btnPrevMisi.addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = dataMisiArr.length - 1;
        }
        changeImgAndText(index);
    });
}

const dataMatkul = document.querySelectorAll(".data-matkul");
const btnNextMatkul = document.querySelector(".btn-next-matkul");
const btnPrevMatkul = document.querySelector(".btn-prev-matkul");

if (dataMatkul && btnNextMatkul && btnPrevMatkul) {
    let index = 0;
    const img = document.querySelector(".img-matkul-tablet");
    const desc = document.querySelector(".desc-matkul-tablet");
    function changeDataMatkul(index) {
        const imgSrcArr = img.src.split("/");
        imgSrcArr.pop();
        imgSrcArr.push(`${dataMatkul[index].dataset.img}.jpg`);
        desc.textContent = dataMatkul[index].dataset.title;
        img.src = imgSrcArr.join("/");
    }

    btnNextMatkul.addEventListener("click", function () {
        index++;
        if (index > dataMatkul.length - 1) {
            index = 0;
        }
        changeDataMatkul(index);
    });
}

const sectionPage = document.querySelectorAll(".section-page");

const anchorAnimation = new IntersectionObserver(elements => {
    elements.forEach(el => {
        if (el.isIntersecting) {
            let dataPage = el.target.dataset.page;
            let active = document.querySelector(".nav-items .active");
            if (active) {
                active.classList.remove("active");
            }
            let pageNow = document.querySelector(`.nav-items .${dataPage}`);
            pageNow.classList.add("active")
        }
    });
});

sectionPage.forEach(el => anchorAnimation.observe(el));


const dataAktivitas = document.querySelectorAll(".data-aktivitas");
const btnNextAktifitas = document.querySelector(".btn-next-aktifitas");
const btnPrevAktifitas = document.querySelector(".btn-prev-aktifitas");

if (dataAktivitas && btnNextAktifitas && btnPrevAktifitas) {
    let index = 0;
    function changeAktifitasContent(index) {
        const selectedImage = document.querySelector(".selected-image-wrapper .selected-image");
        const selecetedTitle = document.querySelector(".selected-image-wrapper .title-aktifitas");
        const selectedDesc = document.querySelector(".selected-image-wrapper .desc-aktifitas");

        let srcArr = selectedImage.src.split("/");
        srcArr.pop();
        srcArr.push(`${dataAktivitas[index].dataset.img}.jpg`);
        selectedImage.src = srcArr.join("/");
        selecetedTitle.textContent = dataAktivitas[index].dataset.title;
        selectedDesc.textContent = dataAktivitas[index].dataset.desc;
    }

    btnNextAktifitas.addEventListener("click", function () {
        index++;
        if (index > dataAktivitas.length - 1) {
            index = 0;
        }
        changeAktifitasContent(index);
    });

    btnPrevAktifitas.addEventListener("click", function () {
        index--;
        if (index < 0) {
            index = dataAktivitas.length - 1;
        }

        changeAktifitasContent(index);
    });
}

if (dataAktivitas) {
    const selectedImage = document.querySelector(".selected-image-wrapper .selected-image");
    const selecetedTitle = document.querySelector(".selected-image-wrapper .title-aktifitas");
    const selectedDesc = document.querySelector(".selected-image-wrapper .desc-aktifitas");
    dataAktivitas.forEach(el => {
        el.addEventListener("click", function (e) {
            let srcArr = selectedImage.src.split("/");
            srcArr.pop();
            srcArr.push(`${e.target.parentElement.dataset.img}.jpg`);
            selectedImage.src = srcArr.join("/");
            selecetedTitle.textContent = e.target.parentElement.dataset.title;
            selectedDesc.textContent = e.target.parentElement.dataset.desc;
        });
    })
}