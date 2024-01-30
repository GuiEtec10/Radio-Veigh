const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 16;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle-fill");
  botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove("bi-pause-circle-fill");
  botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausarFaixa();
    taTocando = 0;
  }
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = capituloAtual + " - " + musica_nomes[capituloAtual];
}

function proximaFaixa() {
  if (capituloAtual == numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }

  audioCapitulo.src = "album/dos-predios/" + capituloAtual + ".m4a";
  tocarFaixa();
  trocarNomeFaixa();
}

function voltarFaixa() {
  if (capituloAtual == 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "album/dos-predios/" + capituloAtual + ".m4a";
  tocarFaixa();
  trocarNomeFaixa();
}

function handleEnded() {
  proximaFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
audioCapitulo.addEventListener("ended", handleEnded);

let musica_nomes = [
  "",
  "Mil Maneiras",
  "Luxo No Morro",
  "Mandraka",
  "7 da Sorte",
  "Vida Chique",
  "Orações",
  "6AM NA COHAB",
  "Pelo Momento",
  "Champagne",
  "Perdoa Por Tudo Vida",
  "Chapa Quente",
  "Meio Pá",
  "Bandana 2",
  "Jeito Bandido",
  "Favelinha",
  "Londres Freestyle",
];
