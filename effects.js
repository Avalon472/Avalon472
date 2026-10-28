const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.33 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const loader = document.getElementById("loader");
const imageUrl = "images/watercolor_background.jpg";

document.body.classList.add("loading");

const img = new Image();

const finishLoad = () => {
  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("loading");
    window.scrollTo(0, 0);
  }, 1500);
};

img.onload = finishLoad;
img.onerror = finishLoad;
img.src = imageUrl;
