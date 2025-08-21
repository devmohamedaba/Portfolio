const skillCards = document.querySelectorAll('.skills .cards div');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

skillCards.forEach(card => {
    observer.observe(card);
});
