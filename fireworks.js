// fireworks.js

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

const fireworks = [];
const particles = [];

class Firework {
  constructor() {
    this.x = Math.random() * width;
    this.y = height;
    this.targetX = Math.random() * width;
    this.targetY = Math.random() * (height / 2);
    this.speed = 5;
    this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
    this.hue = Math.random() * 360;
    this.brightness = 50;
    this.alpha = 1;
  }

  update() {
    const dx = this.speed * Math.cos(this.angle);
    const dy = this.speed * Math.sin(this.angle);
    this.x += dx;
    this.y += dy;

    if (
      Math.abs(this.x - this.targetX) < this.speed &&
      Math.abs(this.y - this.targetY) < this.speed
    ) {
      createParticles(this.targetX, this.targetY, this.hue);
      return true;
    }
    return false;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.brightness = Math.random() * 50 + 50;
    this.alpha = 1;
    this.decay = Math.random() * 0.03 + 0.02;
    this.speed = Math.random() * 2 + 1;
    this.angle = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.alpha -= this.decay;
    return this.alpha <= this.decay;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
    ctx.fill();
  }
}

function createParticles(x, y, hue) {
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(x, y, hue));
  }
}

function animate() {
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, width, height);
  ctx.globalCompositeOperation = "lighter";

  for (let i = fireworks.length - 1; i >= 0; i--) {
    const firework = fireworks[i];
    if (firework.update()) {
      fireworks.splice(i, 1);
    } else {
      firework.draw();
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const particle = particles[i];
    if (particle.update()) {
      particles.splice(i, 1);
    } else {
      particle.draw();
    }
  }

  if (Math.random() < 0.05) {
    fireworks.push(new Firework());
  }

  requestAnimationFrame(animate);
}

function startFireworks() {
  animate();
}

function startCelebration() {
  const homePage = document.getElementById("home");
  const mainContent = document.getElementById("main-content");
  const footer = document.getElementById("footer");

  homePage.classList.add("hidden");
  setTimeout(() => {
    homePage.style.display = "none";
    mainContent.style.display = "block";
    footer.style.display = "block";
    setTimeout(() => {
      mainContent.classList.add("visible");
      footer.classList.add("visible");
      document.querySelector(".flower-crown").classList.add("show-text"); // Show the text box
      showFlowerTextBox();
    }, 50);
  }, 1000);
}

// Function to create stars dynamically
function createStars() {
  const starryNight = document.querySelectorAll(".starry-night");
  starryNight.forEach((container) => {
    for (let i = 0; i < 100; i++) {
      // Adjust the number of stars as needed
      const star = document.createElement("div");
      star.classList.add("star");
      const size = Math.random() * 2 + 1; // Random size for stars
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const duration = Math.random() * 5 + 5; // Random duration for twinkle effect

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${y}px`;
      star.style.left = `${x}px`;
      star.style.animationDuration = `${duration}s`;

      container.appendChild(star);
    }
  });
}

function showFlowerTextBox() {
  const flowerTextBox = document.querySelector(".flower-text-box");
  setTimeout(() => {
    flowerTextBox.classList.add("show");
  }, 5000); // 10 seconds delay
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.photo, .explanation-left, .explanation-right, .halo');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});
// Call the createStars function when the window loads
window.onload = function () {
  // Initialize fireworks (assumes fireworks.js is properly included and implemented)
  startFireworks();

  // Create stars
  createStars();
};
