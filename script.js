const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");

const miniaturas = Array.from(
  document.querySelectorAll('[id^="selecionar-imagem"] img')
);
const opcoesMiniaturas = [
  document.querySelector('[for="0-imagem"] img'),
  document.querySelector('[for="1-imagem"] img'),
  document.querySelector('[for="2-imagem"] img'),
];

const opcoesTamanho = ["41 mm", "45 mm"];
const opcoesCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

function atualizarCorSelecionada() {
  numCorSelecionada = parseInt(
    document.querySelector('[name="opcao-cor"]:checked').id.charAt(0)
  );
  const nomeCor = opcoesCores[numCorSelecionada];

  tituloProduto.innerText = `Pulseira loop esportiva ${nomeCor.toLowerCase()} para caixa de ${
    opcoesTamanho[numTamanhoSelecionado]
  }`;
  nomeCorSelecionada.innerText = `Cor - ${nomeCor}`;

  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`;
  opcoesMiniaturas.forEach((mini, idx) => {
    mini.src = `./imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-${idx}.jpeg`;
  });
}

function atualizarTamanho() {
  numTamanhoSelecionado = parseInt(
    document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0)
  );
  const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[
    numCorSelecionada
  ].toLowerCase()} para caixa de ${tamanhoCaixa}`;

  if (tamanhoCaixa === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function atualizarImagemSelecionada() {
  numImagemSelecionada = parseInt(
    document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0)
  );
  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-${opcoesCores[
    numCorSelecionada
  ].toLowerCase()}/imagem-${numImagemSelecionada}.jpeg`;
}

atualizarCorSelecionada();
atualizarTamanho();
