"use stric";

const flex_anuncio_ofertas = document.querySelector(".ofertas .flex-anuncios");
const flex_anuncio_mv = document.querySelector(".mais-vendidos .flex-anuncios");
const anuncio_teste = `
<a class="caixa-anuncio" href="produto-especifico/produto-especifico.html">
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="fac-icon"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
  />
</svg>

<div class="imagem">
  <img
    src="home/img/imgs-anuncios/pc-gamer-acer-predator-orion-5000-intel-core-i7-11700-rgb-nvidia-geforce-rtx3070-16gb-ram-ssd-1tb-windows-11-home-preto-dg-e2qal-006_1656621177_gg.jpg"
    alt=""
  />
</div>

<div class="info-prod">
  <div class="caixa-titulo">
    <h3 class="tit-prod">
      PC Gamer Lorem Ipsum Dolor, Intel core I9-12900KS, 16GB DDR5 6000MHZ, RTX 4090 24GB GDDR6X, SSD 1TB, Fonte Corsair 1600W AX1600i , Windows 11
    </h3>
  </div>
  <div class="preco">R$ 111999,99</div>
</div>

<div class="botao-comprar"><button>COMPRAR</button></div>
</a>
`;

function removeAnunc(obj, HTML) {}

window.addEventListener("keydown", (event) => {
  if (event.key === "F8") {
    flex_anuncio_ofertas.insertAdjacentHTML("afterbegin", anuncio_teste);
  }

  if (event.key === "F9") {
    flex_anuncio_mv.insertAdjacentHTML("afterbegin", anuncio_teste);
  }
});

for (let c = 0; c < 10; c++)
  flex_anuncio_ofertas.insertAdjacentHTML("afterbegin", anuncio_teste);
for (let c = 0; c < 10; c++)
  flex_anuncio_mv.insertAdjacentHTML("afterbegin", anuncio_teste);
