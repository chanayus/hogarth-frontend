const mobileNavToggleButton = document.querySelector("#mobile-nav-button");
const mobileNav = document.querySelector("#mobile-nav");

//   เปิด/ปิด mobile navigation menu
mobileNavToggleButton?.addEventListener("click", () => {
  const isNavHidden = mobileNav.classList.contains("hidden") || mobileNav.classList.contains("animate-out");

  //   เช็กว่า mobile navigation menu ปิดอยู่หรือไม่
  if (isNavHidden) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }
});
