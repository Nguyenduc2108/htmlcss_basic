const modal = document.querySelector(".js-modal");
const modalContainer = modal.querySelector(".js-modal-container");
const buyBtn = document.querySelectorAll(".js-buy-ticket");
const modalClose = modal.querySelector(".js-close");

const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".mobile-menu");
const headerHeight = header.clientHeight;

// close modal
const handleCloseModal = function () {
  modal.classList.remove("open");
};

// open modal
buyBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    modal.classList.add("open");
  });
});

//close modal khi click
modalClose.addEventListener("click", handleCloseModal);
modal.addEventListener("click", handleCloseModal);
modalContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});

//close open mobile menu
mobileMenu.addEventListener("click", function () {
  const isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
});

//auto close khi chose menu
const menuItems = document.querySelectorAll('.nav li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
  const menuItem = menuItems[i];

  menuItem.addEventListener("click", function (e) {
    const isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("sub-nav");
    if (isParentMenu) {
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  });
}
