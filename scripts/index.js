const mobileNavToggleButton = document.querySelector("#mobile-nav-button");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavContent = document.querySelector(".mobile-nav-content");

//  เปิด/ปิด mobile navigation menu
mobileNavToggleButton?.addEventListener("click", () => {
  const isNavHidden = mobileNav.classList.contains("hidden");

  //  เช็คว่า mobile navigation menu ปิดอยู่หรือไม่
  if (isNavHidden) {
    mobileNav.classList.remove("hidden"); // แสดง mobile navigation menu

    // ทำการซ่อน mobile navigation menu เมื่อมีการคลิกส่วนที่ไม่ใช่เมนู mobile navigation
    mobileNav.addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        if (!mobileNavContent.contains(e.target)) {
          mobileNav.classList.add("hidden");
        }
      },
      { capture: true, once: true }
    );
  } else {
    mobileNav.classList.add("hidden"); // ซ่อน mobile navigation menu
  }
});
