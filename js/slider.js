function slider(ssliderBody, ssliderLine, ssliderSlide, ssliderDots, ssliderArrows) {
    const sliderBody = document.querySelector(ssliderBody),
        sliderLine = document.querySelector(ssliderBody + ssliderLine),
        sliderSlide = document.querySelectorAll(ssliderBody + ssliderSlide),
        sliderDots = document.querySelectorAll(ssliderBody + ssliderDots),
        sliderArrows = document.querySelectorAll(ssliderBody + ssliderArrows);
    let count = 0, width, x1;

    const slidesToShow = (sliderSlide.length / 3);

    function init() {
        width = sliderBody.offsetWidth;
        sliderLine.style.width = width * slidesToShow + 'px';
        rollSlider();
    }

    window.addEventListener('resize', init);
    init();

    sliderBody.querySelector('.next-btn').addEventListener('click', nextSlide)
    function nextSlide() {
        count++;
        if (count >= slidesToShow) {
            count = 0;
        }
        rollSlider();
        thisSlide(count);
    };

    sliderBody.querySelector('.prev-btn').addEventListener('click', prevSlide)
    function prevSlide() {
        count--;
        if (count < 0) {
            count = slidesToShow - 1;
        }
        rollSlider();
        thisSlide(count);
    };

    function thisSlide(index) {
        sliderDots.forEach(item => { item.classList.remove('active-dot') });
        sliderDots[index].classList.add('active-dot');
    }

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            count = index;
            rollSlider();
            thisSlide(count);
        })
    });

    sliderLine.addEventListener('pointerdown', handlePointerStart);
    sliderLine.addEventListener('pointermove', handlePointerMove);

    function handlePointerStart(e) {
        x1 = e.clientX;
    }

    function handlePointerMove(e) {
        if (!x1) {
            return false
        }

        let x2 = e.clientX;
        xDiff = x2 - x1;

        if (xDiff < 0) {
            nextSlide();
        } else if (xDiff > 0) {
            prevSlide();
        }

        x1 = null;
    }

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
}

slider('.organization-slider', '__line', '__slide', '__dot', '__arrow');
slider('.testimonials-slider', '__line', '__slide', '__dot', '__arrow');
slider('.collection-slider', '__line', '__slide', '__dot', '__arrow');

