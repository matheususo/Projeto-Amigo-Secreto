// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Captura o valor inserido no campo de texto
    const nomeAmigo = document.getElementById('amigo').value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        return; // Não faz nada se o campo estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    // Obtém o elemento da lista onde os amigos serão exibidos
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista existente para evitar duplicação
    listaAmigos.innerHTML = "";

    // Para cada amigo no array, cria um item de lista <li>
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione amigos antes de realizar o sorteio.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
