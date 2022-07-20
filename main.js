const dropdownmenu = document.querySelectorAll("[data-toggle]");
const open = document.querySelector("[data-open]");
const close = document.querySelector("[data-close]");
const menuoverlay = document.querySelector("[data-menu-overlay]");
const dropdown = document.querySelectorAll(".dropdow");

window.addEventListener("resize", () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  vw >= 1024 && closeMenu();
});

//  checkclickoutside menubar to close
document.onclick = function (e) {
  if (menuoverlay.classList.contains("active")) {
    if (e.target.offsetParent !== menuoverlay && e.target !== open) {
      closeMenu();
    } else {
      return;
    }
  }
  dropdown.forEach((menu) => {
    if (menu.previousElementSibling.classList.contains("active")) {
      if (
        e.target.offsetParent !== menu && // กำหนดขอบเขตการกด ถ้านอกเขตจะปิด dropdown
        e.target !== menu.previousElementSibling // กันการทับซ้อนกันของเงื่อนไข เลยมีการบล็อกการกดตัว element ที่เปิด dropdown
      ) {
        menu.previousElementSibling.classList.remove("active");
      }
    }
  });
};

const openMenu = () => {
  menuoverlay.classList.add("active");
  close.classList.add("show");
  open.classList.add("hide");
};

const closeMenu = () => {
  menuoverlay.classList.remove("active");
  close.classList.remove("show");
  open.classList.remove("hide");
};

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);

dropdownmenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
