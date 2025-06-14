document.addEventListener("DOMContentLoaded", () => {
    const produtos = [
  { id: 1, nome: "Camiseta Estampada", categoria: "roupas", precoAntigo: 79.90, precoNovo: 59.90, img: "assets/images/camisa2.png", descricao: "Camiseta 100% algodão com estampa moderna e confortável." },
  { id: 2, nome: "Camiseta Estampada", categoria: "roupas", precoAntigo: 79.90, precoNovo: 59.90, img: "assets/images/camisa1.png", descricao: "Camiseta casual com design exclusivo e tecido respirável." },
  { id: 3, nome: "Fone Bluetooth", categoria: "acessorios", precoAntigo: 299.00, precoNovo: 249.00, img: "assets/images/fone1.webp", descricao: "Fone sem fio com cancelamento de ruído e autonomia de até 20 horas." },
  { id: 4, nome: "iPhone 14 Pro", categoria: "celulares", precoAntigo: 7999.99, precoNovo: 5399.99, img: "assets/images/iph14pro2.webp", descricao: "Apple iPhone 14 Pro Max 256GB Prateado 6,7” 48MP" },
  { id: 5, nome: "iPhone 16 Pro", categoria: "celulares", precoAntigo: 7999.99, precoNovo: 7399.99, img: "assets/images/iph16pro.webp", descricao: "iPhone 16 Pro Max Apple 256GB, Câmera Tripla de 48MP, Tela 6,9, Titânio-Deserto" },
  { id: 6, nome: "PC Gamer", categoria: "informatica", precoAntigo: 2399.90, precoNovo: 1599.90, img: "assets/images/pc4.webp", descricao: "Completo Intel Core i5 SSD 480GB 16GB Teclado Mouse Mouse Pad e Headset Gamer Monitor 19 Windows 10 Pro " },
  { id: 7, nome: "PC Gamer", categoria: "informatica", precoAntigo: 2699.90, precoNovo: 1899.90, img: "assets/images/pc5.webp", descricao: "PC Gamer Completo 3green Play Intel Core i7 16GB RAM Placa de vídeo Geforce 4GB SSD 480GB Monitor 20 75Hz Fonte 500W 3GP-056 " },
  { id: 8, nome: "PC Gamer", categoria: "informatica", precoAntigo: 3699.90, precoNovo: 2899.90, img: "assets/images/pc6.webp", descricao: "PC Gamer AMD Ryzen 5 4600G, 16GB RAM, Placa de video Radeon Vega 7, SSD 480GB, Fonte 550W + Monitor 23 LED 75hz + Kit Gamer Completo " },
  { id: 9, nome: "PC Gamer", categoria: "informatica", precoAntigo: 3699.90, precoNovo: 2899.90, img: "assets/images/pc7.webp", descricao: "PC Gamer Completo AMD Ryzen 7 5700G, Gráficos Radeon VEGA 8, 16GB DDR4, SSD 512GB, Fonte 500W, Monitor 21.5 75Hz, 3green Force - 3F-016 " },
  { id: 10, nome: "PC Gamer", categoria: "informatica", precoAntigo: 4699.90, precoNovo: 3899.90, img: "assets/images/pc8.webp", descricao: "PC Gamer Completo Skill Ryzen 7 5700G, 16GB, Radeon Vega 8, SSD 512GB M.2, + Monitor 27 IPS 100Hz - SK27003 " },
  { id: 11, nome: "iPhone 16 ", categoria: "celulares", precoAntigo: 7999.99, precoNovo: 6399.99, img: "assets/images/iph16.webp", descricao: "Apple iPhone 16 128GB Rosa 6,1 48MP iOS 5G" },
  { id: 12, nome: "iPhone 15 ", categoria: "celulares", precoAntigo: 7999.99, precoNovo: 5399.99, img: "assets/images/iph15.webp", descricao: "Apple iPhone 15 de 256GB - Preto" },
  { id: 13, nome: "Camiseta Estampada", categoria: "roupas", precoAntigo: 79.90, precoNovo: 59.90, img: "assets/images/camisa3.webp", descricao: "Camisa Social Masculina Manga Longa Lisa Slim - LORD FINESSE OUTLET." },
  { id: 14, nome: "Camiseta Estampada", categoria: "roupas", precoAntigo: 79.90, precoNovo: 59.90, img: "assets/images/camisa4.webp", descricao: "Camisa Social Masculina Moda Maior Homens Plus Size - LORD FINESSE CAMISARIA" },
  { id: 15, nome: "Camiseta do Campeão", categoria: "roupas", precoAntigo: 129.90, precoNovo: 99.90, img: "assets/images/camisa5.webp", descricao: "Camisa Grêmio I 21/22 Umbro Masculina - Azul+Branco" },
  { id: 16, nome: "Camiseta do Campeão", categoria: "roupas", precoAntigo: 129.90, precoNovo: 99.90, img: "assets/images/camisa6.webp", descricao: "Camisa Grêmio I 25/26 Torcedor Umbro Feminina" },
  { id: 17, nome: "Fone Bluetooth", categoria: "acessorios", precoAntigo: 299.00, precoNovo: 249.00, img: "assets/images/fone2.webp", descricao: "Fone sem fio com cancelamento de ruído e autonomia de até 20 horas." },
  { id: 18, nome: "Fone Bluetooth", categoria: "acessorios", precoAntigo: 299.00, precoNovo: 249.00, img: "assets/images/fone3.webp", descricao: "Fone sem fio com cancelamento de ruído e autonomia de até 20 horas." },
  { id: 19, nome: "Fone Bluetooth", categoria: "acessorios", precoAntigo: 299.00, precoNovo: 249.00, img: "assets/images/fone4.webp", descricao: "Fone sem fio com cancelamento de ruído e autonomia de até 20 horas." },
  { id: 20, nome: "Fone Bluetooth", categoria: "acessorios", precoAntigo: 299.00, precoNovo: 249.00, img: "assets/images/fone5.webp", descricao: "Fone sem fio com cancelamento de ruído e autonomia de até 20 horas." }
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

