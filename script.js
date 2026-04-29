const telefoneLoja = "5511996828145"; 

const produtos = [
    // Adicionamos "img/" antes de cada nome de arquivo
    { nome: "Vans KNU", desc: "Numerações 34 ao 43", img: "img/Vans KNU.jpg" },
    { nome: "Puma BMW", desc: "Edição Especial Motorsport", img: "img/Puma BMW.jpg" },
    { nome: "Nike Jordan 1", desc: "O clássico do Streetwear", img: "img/Nike Jordan 1.jpg" },
    { nome: "Vans Hylane", desc: "Design Robusto e Conforto", img: "img/Vans Hylane.jpg" },
    { nome: "Nike Dunk Low", desc: "Cinza e Marrom Premium", img: "img/Nike Dunk Low.jpg" },
    { nome: "Crocs Moleca", desc: "Original e Confortável", img: "img/Crocs Moleca.jpg" }
];

const grid = document.getElementById('grid-produtos');

function carregarProdutos() {
    // É boa prática limpar o grid antes de carregar (evita duplicatas se chamar a função 2x)
    grid.innerHTML = ""; 

    produtos.forEach(prod => {
        const mensagem = encodeURIComponent(`Olá! Vi o ${prod.nome} no site e gostaria de saber a disponibilidade.`);
        const linkZap = `https://wa.me/${telefoneLoja}?text=${mensagem}`;

        const card = `
            <div class="product-card">
                <img src="${prod.img}" alt="${prod.nome}" onerror="this.src='https://via.placeholder.com/300?text=Imagem+Nao+Encontrada'">
                <h3>${prod.nome}</h3>
                <p>${prod.desc}</p>
                <a href="${linkZap}" target="_blank" class="btn-main" style="text-decoration:none; display:inline-block; font-size: 0.8rem; background:#25d366; color:white; padding: 10px 20px; border-radius: 5px;">
                    <i class="fab fa-whatsapp"></i> Tenho Interesse
                </a>
            </div>
        `;
        grid.innerHTML += card;
    });
}

carregarProdutos();