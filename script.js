document.addEventListener("DOMContentLoaded", () => {
  // Produtos com categorias e descrições
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

  let carrinho = [];
  let produtoSelecionado = null;

  // Referências
  const listaProdutos = document.getElementById("lista-produtos");
  const categoriasLinks = document.querySelectorAll(".categoria-link");
  const popupCompra = document.getElementById("popup-compra");
  const fecharPopup = document.getElementById("fechar-popup");
  const popupNome = document.getElementById("popup-nome");
  const popupPrecoAntigo = document.getElementById("popup-preco-antigo");
  const popupPrecoNovo = document.getElementById("popup-preco-novo");
  const popupDescricao = document.getElementById("popup-descricao");
  const popupImg = document.getElementById("popup-img");
  const botaoPagar = document.getElementById("botao-pagar");
  const contadorCarrinho = document.getElementById("contador-carrinho");
  const iconeCarrinho = document.getElementById("icone-carrinho");
  const popupCarrinho = document.getElementById("popup-carrinho");
  const fecharCarrinho = document.getElementById("fechar-carrinho");
  const itensCarrinho = document.getElementById("itens-carrinho");

  function mostrarProdutos(categoria = "todos") {
    listaProdutos.innerHTML = "";
    const filtrados = categoria === "todos" ? produtos : produtos.filter(p => p.categoria === categoria);

    filtrados.forEach(prod => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nome}" />
        <h3>${prod.nome}</h3>
        <p class="preco-antigo">R$ ${prod.precoAntigo.toFixed(2)}</p>
        <p class="preco-atual">R$ ${prod.precoNovo.toFixed(2)}</p>
        <button class="btn-primary btn-comprar" data-id="${prod.id}">Comprar</button>
      `;
      listaProdutos.appendChild(card);
    });

    document.querySelectorAll(".btn-comprar").forEach(btn => {
      btn.addEventListener("click", e => {
        const id = parseInt(e.target.getAttribute("data-id"));
        abrirPopupCompra(id);
      });
    });
  }

  categoriasLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      categoriasLinks.forEach(l => l.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const categoria = e.currentTarget.getAttribute("data-categoria");
      mostrarProdutos(categoria);
    });
  });

  function abrirPopupCompra(id) {
    produtoSelecionado = produtos.find(p => p.id === id);
    if (!produtoSelecionado) return;

    popupNome.textContent = produtoSelecionado.nome;
    popupPrecoAntigo.textContent = `R$ ${produtoSelecionado.precoAntigo.toFixed(2)}`;
    popupPrecoNovo.textContent = `R$ ${produtoSelecionado.precoNovo.toFixed(2)}`;
    popupDescricao.textContent = produtoSelecionado.descricao;
    popupImg.src = produtoSelecionado.img;

    botaoPagar.disabled = false;
    popupCompra.style.display = "flex";
  }

  fecharPopup.addEventListener("click", () => {
    popupCompra.style.display = "none";
  });

  botaoPagar.addEventListener("click", () => {
    if (!produtoSelecionado) return;
   // alert(`Produto adicionado ao carrinho: ${produtoSelecionado.nome}`); //
    carrinho.push(produtoSelecionado);
    atualizarContadorCarrinho();
    popupCompra.style.display = "none";
  });

  function atualizarContadorCarrinho() {
    contadorCarrinho.textContent = carrinho.length;
  }

  // Carrossel
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

  setInterval(mudarSlide, 8000);

 // Abrir popup do carrinho
iconeCarrinho.addEventListener("click", (e) => {
  e.preventDefault(); // evita rolagem para o id
  atualizarPopupCarrinho();
  popupCarrinho.classList.add("show");  // usa classe para mostrar
  popupCarrinho.style.display = "flex"; // garantir que fique visível
});

// Fechar popup do carrinho
fecharCarrinho.addEventListener("click", () => {
  popupCarrinho.classList.remove("show"); // remove a classe de mostrar
  popupCarrinho.style.display = "none";   // oculta o popup
});

// Atualiza o conteúdo do popup do carrinho
function atualizarPopupCarrinho() {
  itensCarrinho.innerHTML = "";
  if (carrinho.length === 0) {
    itensCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    return;
  }

  carrinho.forEach(item => {
    const div = document.createElement("div");
    div.className = "item-carrinho";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.nome}" style="width:60px; height:auto; margin-right:10px;">
      <div>
        <p><strong>${item.nome}</strong></p>
        <p>R$ ${item.precoNovo.toFixed(2)}</p>
      </div>
    `;
    itensCarrinho.appendChild(div);
  });
}


  // Login
  const botaoAbrirLogin = document.getElementById("abrirLogin");
  const modalLogin = document.getElementById("modal-login");
  const botaoFecharLogin = document.getElementById("fechar-login");
  const formularioLogin = document.getElementById("form-login");
  const erroLogin = document.getElementById("erro-login");

  function criarBotaoSair() {
    const botao = document.createElement("button");
    botao.id = "botaoSair";
    botao.textContent = "Sair?";
    botao.style = "margin-left: 10px; background: none; border: none; color: #3b82f6; font-weight: bold; cursor: pointer;";
    botao.addEventListener("click", () => {
      botao.remove();
      botaoAbrirLogin.innerHTML = `<i class="fas fa-user-circle" aria-hidden="true"></i> Entrar`;
      botaoAbrirLogin.disabled = false;
    });
    return botao;
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

  formularioLogin.addEventListener("submit", e => {
    e.preventDefault();
    const usuario = formularioLogin.usuario.value.trim();
    const senha = formularioLogin.senha.value.trim();

    if (usuario === "admin" && senha === "admin") {
      modalLogin.hidden = true;
      const botaoSairAntigo = document.getElementById("botaoSair");
      if (botaoSairAntigo) botaoSairAntigo.remove();

      botaoAbrirLogin.innerHTML = `Olá Eduardo!`;
      botaoAbrirLogin.disabled = true;

      const botaoSair = criarBotaoSair();
      botaoAbrirLogin.parentNode.insertBefore(botaoSair, botaoAbrirLogin.nextSibling);
    } else {
      erroLogin.style.display = "block";
    }
  });

  modalLogin.addEventListener("click", e => {
    if (e.target === modalLogin) {
      modalLogin.hidden = true;
    }
  });

  // Inicia a página
  mostrarProdutos();
});

