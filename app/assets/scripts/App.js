import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".info-box"), "85%");
new RevealOnScroll($(".about .title"), "60%");
new RevealOnScroll($(".about .textbox"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
