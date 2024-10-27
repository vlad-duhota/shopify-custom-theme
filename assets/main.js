const themeSwiper = new Swiper('.themes__swiper', {
           
    scrollbar: {
        el: '.themes__scrollbar',
        draggable: true,
    }, 
    navigation: {
        nextEl: ".themes__nav .next",
        prevEl: ".themes__nav .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        1099: {
            slidesPerView: 4,
            spaceBetween: 26,
        },
        1281: {
            slidesPerView: 6,
            spaceBetween: 26,
        }
    }
})

const themeSlides = document.querySelectorAll('.themes .swiper-slide')
themeSlides.forEach(slide => {
    slide.addEventListener('click', (e) => {
        document.querySelector('.popup[data-popup="' + slide.dataset.popup +'"]').classList.add('active')
    })
})

const popups = document.querySelectorAll('.popup')
popups.forEach(popup => {
    popup.addEventListener('click', (e) => {
        if(e.currentTarget === e.target) {
            popup.classList.remove('active')
        }
    })

    popup.querySelector('.popup__close').addEventListener('click', (e) => {
        popup.classList.remove('active')
    })
})

const stepsSwiper = new Swiper('.steps__swiper', {
           
    scrollbar: {
        el: '.steps__scrollbar',
        draggable: true,
    }, 
    navigation: {
        nextEl: ".steps__nav .next",
        prevEl: ".steps__nav .prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 22,
        },
        1099: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
    }
})