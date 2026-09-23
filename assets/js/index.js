const accordionButtons = document.querySelectorAll('.custom-hwd-accordion .accordion-button');
const dynamicImg = document.getElementById('hwdDynamicImg');

if (dynamicImg) {
    dynamicImg.style.transition = 'opacity 0.2s ease-in-out';
}

accordionButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        const newImgSrc = this.getAttribute('data-img');

        if (newImgSrc && dynamicImg && dynamicImg.getAttribute('src') !== newImgSrc) {
            dynamicImg.style.opacity = '0.3';
        }
    });
});