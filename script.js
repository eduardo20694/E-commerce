// Produtos exemplo com categorias e descrições
const produtos = [
  {
    id: 1,
    nome: "Notebook Gamer",
    categoria: "informatica",
    precoAntigo: 4999.99,
    precoNovo: 4499.99,
    img: "assets/images/pc3.avif",
    descricao: "Notebook gamer com placa de vídeo dedicada, ideal para jogos e edição de vídeos."
  },
  {
    id: 2,
    nome: "Notebook Gamer",
    categoria: "informatica",
    precoAntigo: 4999.99,
    precoNovo: 4499.99,
    img: "assets/images/pc.png",
    descricao: "Notebook gamer potente com processador i7 e memória RAM de 16GB."
  },
  {
    id: 3,
    nome: "Camiseta Estampada",
    categoria: "roupas",
    precoAntigo: 79.90,
    precoNovo: 59.90,
    img: "assets/images/camisa2.png",
    descricao: "Camiseta 100% algodão com estampa moderna e confortável."
  },
  {
    id: 4,
    nome: "Camiseta Estampada",
    categoria: "roupas",
    precoAntigo: 79.90,
    precoNovo: 59.90,
    img: "assets/images/camisa1.png",
    descricao: "Camiseta casual com design exclusivo e tecido respirável."
  },
  {
    id: 5,
    nome: "Fone Bluetooth",
    categoria: "acessorios",
    precoAntigo: 299.00,
    precoNovo: 249.00,
    img: "assets/images/head1.webp",
    descricao: "Fone sem fio com cancelamento de ruído e autonomia de até 20 horas."
  },
  {
    id: 6,
    nome: "iPhone 14 Pro",
    categoria: "celulares",
    precoAntigo: 7999.99,
    precoNovo: 7399.99,
    img: "assets/images/13pro.png",
    descricao: "Smartphone topo de linha com câmera avançada e tela OLED de alta definição."
  },
  {
    id: 7,
    nome: "iPhone 16 Pro",
    categoria: "celulares",
    precoAntigo: 7999.99,
    precoNovo: 5399.99,
    img: "assets/images/16.webp",
    descricao: "Modelo mais recente com recursos avançados de IA e desempenho superior."
  },
];

// Estado do carrinho
let carrinho = [];

// Referências DOM
const listaProdutos = document.getElementById("lista-produtos");
const categoriasLinks = document.querySelectorAll(".categoria-link");
const popupCompra = document.getElementById("popup-compra");
const fecharPopup = document.getElementById("fechar-popup");
const popupNome = document.getElementById("popup-nome");
const popupPrecoAntigo = document.getElementById("popup-preco-antigo");
const popupPrecoNovo = document.getElementById("popup-preco-novo");
const popupDescricao = document.getElementById("popup-descricao");
const popupImg = document.getElementById("popup-img");
const cepInput = document.getElementById("cep");
const btnCalcularFrete = document.getElementById("calcular-frete");
const resultadoFrete = document.getElementById("resultado-frete");
const botaoPagar = document.getElementById("botao-pagar");
const contadorCarrinho = document.getElementById("contador-carrinho");

let produtoSelecionado = null;
let valorFreteAtual = 0;

// Função para mostrar produtos filtrados
function mostrarProdutos(categoria = "todos") {
  listaProdutos.innerHTML = "";
  const filtrados = categoria === "todos" ? produtos : produtos.filter(p => p.categoria === categoria);
  filtrados.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${prod.img}" alt="Foto do produto ${prod.nome}" />
      <h3>${prod.nome}</h3>
      <p class="preco-antigo">R$ ${prod.precoAntigo.toFixed(2)}</p>
      <p class="preco-atual">R$ ${prod.precoNovo.toFixed(2)}</p>
      <button class="btn-primary btn-comprar" data-id="${prod.id}">Comprar</button>
    `;
    listaProdutos.appendChild(card);
  });

  // Adiciona evento nos botões comprar
  const botoesComprar = document.querySelectorAll(".btn-comprar");
  botoesComprar.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      abrirPopupCompra(id);
    });
  });
}

// Controle filtro categorias
categoriasLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    categoriasLinks.forEach(l => l.classList.remove("active"));
    e.currentTarget.classList.add("active");
    const cat = e.currentTarget.getAttribute("data-categoria");
    mostrarProdutos(cat);
  });
});

// Abrir popup compra
function abrirPopupCompra(id) {
  produtoSelecionado = produtos.find(p => p.id === id);
  if (!produtoSelecionado) return;

  popupNome.textContent = produtoSelecionado.nome;
  popupPrecoAntigo.textContent = `R$ ${produtoSelecionado.precoAntigo.toFixed(2)}`;
  popupPrecoNovo.textContent = `R$ ${produtoSelecionado.precoNovo.toFixed(2)}`;
  popupDescricao.textContent = produtoSelecionado.descricao || "Produto sem descrição.";
  popupImg.src = produtoSelecionado.img;

  botaoPagar.disabled = false; // Ativa o botão diretamente
  popupCompra.style.display = "flex";
}

// Fechar popup
fecharPopup.addEventListener("click", () => {
  popupCompra.style.display = "none";
});

// Botão Adicionar ao Carrinho
botaoPagar.addEventListener("click", () => {
  if (!produtoSelecionado) return;

  alert(`Produto adicionado ao carrinho:\n${produtoSelecionado.nome}\nPreço: R$ ${produtoSelecionado.precoNovo.toFixed(2)}`);

  // Adiciona ao carrinho
  carrinho.push(produtoSelecionado);
  atualizarContadorCarrinho();

  // Fecha o popup
  popupCompra.style.display = "none";
});

// Atualizar contador do carrinho
function atualizarContadorCarrinho() {
  contadorCarrinho.textContent = carrinho.length;
}

// Carrossel automático do hero (textos + fundo)
const slides = [
  {
    titulo: "Explore Nossos Produtos",
    texto: "Produtos de qualidade com preços que cabem no seu bolso.",
    classe: "hero-slide-1"
  },
  {
    titulo: "Tecnologia e Estilo",
    texto: "Encontre notebooks, celulares e acessórios modernos.",
    classe: "hero-slide-2"
  },
  {
    titulo: "Moda e Conforto",
    texto: "Roupas e acessórios para você se destacar.",
    classe: "hero-slide-3"
  }
];

let slideIndex = 0;
const heroSection = document.getElementById("hero");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");

function mudarSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  const slide = slides[slideIndex];
  heroSection.className = "hero " + slide.classe;
  heroTitle.textContent = slide.titulo;
  heroText.textContent = slide.texto;
}

setInterval(mudarSlide, 8000); // troca a cada 8 segundos

// Inicializa lista com todos os produtos
mostrarProdutos();

document.addEventListener("DOMContentLoaded", () => {
  const botaoAbrirLogin = document.getElementById("abrirLogin");
  const modalLogin = document.getElementById("modal-login");
  const botaoFecharLogin = document.getElementById("fechar-login");
  const formularioLogin = document.getElementById("form-login");
  const erroLogin = document.getElementById("erro-login");

  // Função para criar botão Sair
  function criarBotaoSair() {
    const botaoSair = document.createElement("button");
    botaoSair.id = "botaoSair";
    botaoSair.textContent = "Sair?";
    botaoSair.style.marginLeft = "10px";
    botaoSair.style.cursor = "pointer";
    botaoSair.style.background = "transparent";
    botaoSair.style.border = "none";
    botaoSair.style.color = "#3b82f6";
    botaoSair.style.fontWeight = "600";
    botaoSair.addEventListener("click", () => {
      // Remove o botão sair
      botaoSair.remove();
      // Voltar para o estado original
      botaoAbrirLogin.innerHTML = `<i class="fas fa-user-circle" aria-hidden="true"></i> Entrar`;
      botaoAbrirLogin.disabled = false;
    });
    return botaoSair;
  }

  botaoAbrirLogin.addEventListener("click", () => {
    modalLogin.hidden = false;
    erroLogin.style.display = "none";
    formularioLogin.usuario.value = "";
    formularioLogin.senha.value = "";
    formularioLogin.usuario.focus();
  });

  botaoFecharLogin.addEventListener("click", () => {
    modalLogin.hidden = true;
  });

  formularioLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = formularioLogin.usuario.value.trim();
    const senha = formularioLogin.senha.value.trim();

    if(usuario === "admin" && senha === "admin") {
      modalLogin.hidden = true;

      // Remove o botão "Sair?" antigo caso exista
      const botaoSairExistente = document.getElementById("botaoSair");
      if (botaoSairExistente) {
        botaoSairExistente.remove();
      }

      // Muda o botão de Entrar para "Olá Eduardo!" e desabilita
      botaoAbrirLogin.innerHTML = `Olá Eduardo!`;
      botaoAbrirLogin.disabled = true;

      // Cria e insere o botão sair ao lado
      const botaoSair = criarBotaoSair();
      botaoAbrirLogin.parentNode.insertBefore(botaoSair, botaoAbrirLogin.nextSibling);
    } else {
      erroLogin.style.display = "block";
    }
  });

  modalLogin.addEventListener("click", (e) => {
    if(e.target === modalLogin) {
      modalLogin.hidden = true;
    }
  })
});