

// js for the stats on the landing page
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const animateCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => animateCount(counter), 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  // Use Intersection Observer to trigger animation when visible
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target); // run once per counter
      }
    });
  }, { threshold: 0.5 }); // trigger when 50% visible

  counters.forEach(counter => {
    observer.observe(counter);
  });

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
      if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("show");
      }
    });
  }
});
