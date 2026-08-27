document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 991.98) {
            if (window.scrollY > 40) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
                header.style.paddingTop = '1.2rem';
                header.style.paddingBottom = '1.2rem';
                header.style.transition = 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
            } else {
                header.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)';
                header.style.paddingTop = '2.2rem';
                header.style.paddingBottom = '1.5rem';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.custom-hwd-accordion .accordion-button');
    const dynamicImg = document.getElementById('hwdDynamicImg');

    accordionButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const newImgSrc = this.getAttribute('data-img');
            if (newImgSrc && dynamicImg) {
                dynamicImg.style.opacity = '0.3';
                setTimeout(() => {
                    dynamicImg.src = newImgSrc;
                    dynamicImg.style.opacity = '1';
                }, 200);
            }
        });
    });
});