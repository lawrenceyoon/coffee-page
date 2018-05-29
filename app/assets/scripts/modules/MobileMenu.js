import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".menu-icon");
    this.menuContent = $(".menu-content");
    this.Header = $(".header");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("menu-content-is-visible");
    this.Header.toggleClass("header-is-expanded");
    this.menuIcon.toggleClass("menu-icon-close-x");
  }
}

export default MobileMenu;
