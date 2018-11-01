import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import Lightbox from './modules/lightbox.min.js'


var mobileMenu = new MobileMenu();
new RevealOnScroll($(".box"), "90%");
new RevealOnScroll($(".standard"), "95%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
var lightBox = new Lightbox();