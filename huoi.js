function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerText = el.getAttribute('data-' + lang);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setLanguage('en');
});

window.addEventListener("load", () => {

  // choose where stars should live (accordion content areas)
  const containers = document.querySelectorAll(".accordion-content");

  containers.forEach(container => {

    // create small stars
    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      star.className = "star";

      const size = Math.random() * 3 + 1;
      star.style.width = size + "px";
      star.style.height = size + "px";

      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";

      star.style.animationDuration = (2 + Math.random() * 4) + "s";

      container.appendChild(star);
    }

    // create ONE shooting star per section
    const shooting = document.createElement("div");
    shooting.className = "shooting-star";
    shooting.style.top = Math.random() * 60 + "%";
    shooting.style.animationDuration = (2 + Math.random() * 3) + "s";
    shooting.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(shooting);
  });

});

function toggleAccordion(header) {
  document.querySelectorAll('.accordion-content').forEach(c => {
    if (c !== header.nextElementSibling) {
      c.style.maxHeight = null;
      c.style.padding = "0 30px";
    }
  });

  const content = header.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.padding = "0 30px";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.padding = "30px";
  }
}
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 3500);
};
document.addEventListener('mousemove', (e) =>{
  const blueBall = document.querySelector('.blue');
  //calculate movement
  const x = e.clientX ;
  const y = e.clientY ;
  blueBall.style.transform = `translate(${x/5}px, ${y/5}px,)`;
});
document.addEventListener('mousemove', (e) =>{
  const purpleBall = document.querySelector('.purple');
  //calculate movement
  const x = e.clientX ;
  const y = e.clientY ;
  purpleBall.style.transform = `translate(${x/5}px, ${y/5}px,)`;
});
document.addEventListener('mousemove', (e) =>{
  const cyanBall = document.querySelector('.cyan');
  //calculate movement
  const x = e.clientX ;
  const y = e.clientY ;
  cyanBall.style.transform = `translate(${x/5}px, ${y/5}px,)`;
});