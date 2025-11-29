class CarouselCard extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src") || "";
    const scale = this.getAttribute("scale") || "1";
    const type = this.getAttribute("type") || "line";

    this.innerHTML = `
      <div class="card" style="transform: scale(${scale});">
        <img src="${src}" alt="carousel image">
      </div>
    `;
  }
}

class CarouselExpand extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Expand</button>`;
  }
}

customElements.define("carousel-card", CarouselCard);
customElements.define("carousel-expand", CarouselExpand);


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Simple contact form alert (demo)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for contacting me! I will get back to you soon.");
  contactForm.reset();
});
const floatImg = document.getElementById("floatImg");

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let index = 0;

  sections.forEach((sec, i) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      index = i;  // current section visible
    }
  });

  // Corner changing logic
  if (index === 0) {
    floatImg.classList.add("right-corner");
    floatImg.classList.remove("left-corner");
  }

  if (index === 1) {
    floatImg.classList.add("left-corner");
    floatImg.classList.remove("right-corner");
  }

  if (index === 2) {
    floatImg.classList.add("right-corner");
    floatImg.classList.remove("left-corner");
  }

  if (index === 3) {
    floatImg.classList.add("left-corner");
    floatImg.classList.remove("right-corner");
  }
});
