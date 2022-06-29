import { SlideNav } from "./slide.js";
import initMenuMobile from "./menu-mobile.js";
import initScrolSuave from "./scrollSuave.js";

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addArrow(".prev", ".next");

slide.addControl(".custom-controls");

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

const title = document.querySelector(".intro-info h1");

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((element, index) => {
    setTimeout(() => {
      elemento.innerHTML += element;
    }, 120 * index);
  });
}
typeWrite(title);
initMenuMobile();
initScrolSuave();
