const btn = document.getElementById("moreBtn");
const menu = document.getElementById("dropdownMenu");

/* Toggle dropdown on button click */
btn.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.style.display =
    menu.style.display === "block" ? "none" : "block";
});

/* Close dropdown when clicking outside */
window.addEventListener("click", function () {
  menu.style.display = "none";
});
  const mobileBtn = document.querySelector('.mobile-btn');
  const mobileMenu = document.querySelector('.category-mobile');

  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

