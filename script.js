// Contador do carrinho
const contador = document.getElementById('contador-carrinho');
let totalCarrinho = 0;

// Dados dos produtos, com campo promocao e precoOriginal opcional
const produtosData = [
  { nome: "PC Gamer Ryzen 7", preco: "R$ 4.999,90", precoOriginal: "R$ 5.999,90", imagem: "assets/images/pc.png", categoria: "informatica", promocao: true },
  { nome: "PC Gamer Ryzen 9", preco: "R$ 4.999,90", precoOriginal: "R$ 5.999,90", imagem: "assets/images/pc3.avif", categoria: "informatica", promocao: true },
  { nome: "Camisa Social Slim Fit", preco: "R$ 99,90", precoOriginal: "R$ 159,90", imagem: "assets/images/camisa1.png", categoria: "roupas", promocao: true },
  { nome: "Camisa Social Slim Fit", preco: "R$ 99,90", precoOriginal: "R$ 159,90",imagem: "assets/images/camisa2.png", categoria: "roupas", promocao: true },
  { nome: "Headset Gamer", preco: "R$ 89,90", precoOriginal: "R$ 129,90", imagem: "assets/images/head1.webp", categoria: "acessorios", promocao: true },
  { nome: "Apple iPhone 16 128GB", preco: "R$ 4.299,90", precoOriginal: "R$ 5.099,90", imagem: "assets/images/16.webp", categoria: "celulares", promocao: true },
  { nome: "Apple iPhone 13 128GB", preco: "R$ 2.999,90", precoOriginal: "R$ 3.699,90", imagem: "assets/images/13pro.png", categoria: "celulares", promocao: true }
];

// Elementos DOM
const listaProdutos = document.getElementById("lista-produtos");
const popup = document.getElementById('popup-compra');
const fecharPopup = document.getElementById('fechar-popup');
const popupImg = document.getElementById('popup-img');
const popupNome = document.getElementById('popup-nome');
const popupPrecoAntigo = document.getElementById('popup-preco-antigo');
const popupPrecoNovo = document.getElementById('popup-preco-novo');
const resultadoFrete = document.getElementById('resultado-frete');
const inputCep = document.getElementById('cep');
const btnCalcularFrete = document.getElementById('calcular-frete');
const btnPagar = document.getElementById('botao-pagar');

let produtoAtual = null;

// Função para formatar preço em Real (R$) - recebe número
function formatarPreco(precoNum) {
  return precoNum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para converter preço em string para número
// Ex: "R$ 4.999,90" -> 4999.90
function precoStrParaNum(precoStr) {
  return Number(precoStr.replace(/[R$\s\.]/g, '').replace(',', '.'));
}

// Renderizar produtos (todos ou por categoria)
function renderizarProdutos(categoria = "todos") {
  listaProdutos.innerHTML = "";

  let produtosParaExibir;
  if (categoria === "todos") {
    produtosParaExibir = produtosData;
  } else {
    produtosParaExibir = produtosData.filter(p => p.categoria === categoria);
  }

  produtosParaExibir.forEach((prod) => {
    // Se tiver precoOriginal e promocao, mostra riscado
    let precoHTML = "";
    if (prod.promocao && prod.precoOriginal) {
      precoHTML = `
        <p class="preco-antigo">${prod.precoOriginal}</p>
        <p class="preco-atual">${prod.preco}</p>
      `;
    } else {
      precoHTML = `<p class="preco-atual">${prod.preco}</p>`;
    }

    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      ${precoHTML}
      <button class="btn-secondary btn-comprar" data-index="${produtosData.indexOf(prod)}">Comprar</button>
    `;
    listaProdutos.appendChild(card);
  });

  adicionarEventosComprar();
}

// Renderizar somente produtos em promoção
function renderizarPromocoes() {
  listaProdutos.innerHTML = "";

  const produtosPromocao = produtosData.filter(p => p.promocao);

  produtosPromocao.forEach((prod) => {
    let precoHTML = "";
    if (prod.precoOriginal) {
      precoHTML = `
        <p class="preco-antigo">${prod.precoOriginal}</p>
        <p class="preco-atual">${prod.preco}</p>
      `;
    } else {
      precoHTML = `<p class="preco-atual">${prod.preco}</p>`;
    }

    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      ${precoHTML}
      <button class="btn-secondary btn-comprar" data-index="${produtosData.indexOf(prod)}">Comprar</button>
    `;
    listaProdutos.appendChild(card);
  });

  adicionarEventosComprar();
}

// Adiciona eventos de clique aos botões "Comprar"
function adicionarEventosComprar() {
  document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = Number(btn.getAttribute('data-index'));
      abrirPopupCompra(index);
    });
  });
}

// Abre popup com detalhes do produto selecionado
function abrirPopupCompra(index) {
  produtoAtual = produtosData[index];

  popupImg.src = produtoAtual.imagem;
  popupImg.alt = produtoAtual.nome;
  popupNome.textContent = produtoAtual.nome;

  // Se tiver precoOriginal, mostrar riscado
  if (produtoAtual.precoOriginal) {
    popupPrecoAntigo.textContent = produtoAtual.precoOriginal;
    popupPrecoAntigo.style.display = "block";
  } else {
    popupPrecoAntigo.style.display = "none";
  }

  popupPrecoNovo.textContent = produtoAtual.preco;

  resultadoFrete.textContent = '';
  inputCep.value = '';

  popup.style.display = 'flex';
}

// Fecha o popup
fecharPopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Calcular frete (simulação)
btnCalcularFrete.addEventListener('click', () => {
  const cep = inputCep.value.trim();

  if (cep.length !== 8 || isNaN(Number(cep))) {
    resultadoFrete.textContent = 'Por favor, insira um CEP válido com 8 dígitos.';
    return;
  }

  // Simulação de frete fixo
  const precoFrete = 19.90;
  const prazo = 5; // dias úteis

  resultadoFrete.textContent = `Frete: ${formatarPreco(precoFrete)} (Entrega em até ${prazo} dias úteis)`;
});

// Finalizar compra: adiciona ao carrinho e fecha popup
btnPagar.addEventListener('click', () => {
  totalCarrinho++;
  contador.textContent = totalCarrinho;
  alert(`Compra do produto "${produtoAtual.nome}" realizada com sucesso!`);
  popup.style.display = 'none';
});

// Eventos para filtro de categorias - mostra todos os produtos daquela categoria
document.querySelectorAll(".categorias a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const categoria = link.getAttribute("data-categoria");
    renderizarProdutos(categoria);
  });
});

// Inicializa mostrando só os produtos em promoção
renderizarPromocoes();

const imagensHero = [
    'url("assets/images/iph.jpg")',
    'url("assets/images/head.jpg")',
    'url("assets/images/pc1.jpg")'
  ];

  let indexAtual = 0;
  const secaoHero = document.getElementById('hero');

  function trocarImagemFundo() {
    secaoHero.style.backgroundImage = imagensHero[indexAtual];
    indexAtual = (indexAtual + 1) % imagensHero.length;
  }

  // Troca a cada 5 segundos
  trocarImagemFundo(); // inicial
  setInterval(trocarImagemFundo, 5000);

