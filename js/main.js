const sentences = [
    "Hi I'm Mohamed Frontend Developer",
    "Design Stunning Interactive Interfaces.",
    "Unique Visual Identities.",
    "Start Your Project With Me Now!"
];
let i = 0;
let j = 0;
let wordsDeleting = false;
let speed = 80;

function typeWrite() {
    const currentSentences = sentences[i];
    const display = document.getElementById("type");

    if (wordsDeleting) {
        display.innerHTML = currentSentences.substring(0, j--);
    } else {
        display.innerHTML = currentSentences.substring(0, j++);
    }

    if (!wordsDeleting && j === currentSentences.length + 1) {
        wordsDeleting = true;
        speed = 50;
        setTimeout(typeWrite, 1000);
        return;
    }

    if (wordsDeleting && j === 0) {
        wordsDeleting = false;
        i = (i + 1) % sentences.length;
        speed = 100;
    }
    setTimeout(typeWrite, speed);
}
window.onload = typeWrite;




const skillCards = document.querySelectorAll('.skills-section .cards div');

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

let btn = document.getElementById("top");

window.onscroll = function () {
    if (window.scrollY >= 800) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};


const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    
    if (document.body.classList.contains('light-mode')) {
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }

    
    const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});


window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleBtn.textContent = '☀️';
    }
});

