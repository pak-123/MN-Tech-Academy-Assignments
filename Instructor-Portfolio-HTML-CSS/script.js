// menu toggle

const menutoggle = document.getElementById("menuToggle");
const navlinks = document.querySelector(".nav-links");

menutoggle.addEventListener("click",() =>{
      navlinks.classList.toggle("active");
})

// AOS Animation
AOS.init({
  duration: 900,
  offset: 120,
  once: true,
  easing: "ease-out-cubic"
});
