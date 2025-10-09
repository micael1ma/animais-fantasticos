import ScrollSuave from "./module/scroll-suave.js";
import Accordion from "./module/accordion.js";
import initTabNav from "./module/tabnav.js";
import initModal from "./module/modal.js";
import initToolTip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFetchAnimais from "./module/fetch-animais.js";
import initFetchBitcoin from "./module/fetch-bitcoin.js";
import initAnimacaoInitScroll from "./module/scroll-animacao.js";

const scrollsuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollsuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoInitScroll();
