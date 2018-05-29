import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".info-box"), "85%");
new RevealOnScroll($(".about .title"), "60%");
new RevealOnScroll($(".about .textbox"), "60%");
