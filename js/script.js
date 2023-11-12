AOS.init({
	duration: 1200, once: true
})

const headerMenuButton = document.getElementById("header-menu-button");
const headerMenuButtonClose = document.getElementById("btn-menu-close");

headerMenuButton.onclick = function () {
  const headerMenu = document.getElementById("header-menu");
  const isActive = headerMenu.classList.contains("header__menu--active");

  if (isActive) {
    headerMenu.classList.remove("header__menu--active");
  } else {
    headerMenu.classList.add("header__menu--active");
  }
};

headerMenuButtonClose.onclick = function () {
  const headerMenu = document.getElementById("header-menu");
  headerMenu.classList.remove("header__menu--active");
};
