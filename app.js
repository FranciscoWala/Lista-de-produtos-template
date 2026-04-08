'use strict'
import produtos from "./produtos.json" with { type: "json"}

function criarEstrelas (numero){
    let estrelas = numero
    let classificacao =''

    for(let i=0; i<5; i++){
        if(estrelas>0){
            classificacao+= '★'
            estrelas--
        }else{
            classificacao += '☆'
        }
    }
    return classificacao
}

function buscarPorItem(categoria){

    const produtoEncontrado =[]
    produtos.forEach(itemEscolhido => {
        if(categoria == itemEscolhido.categoria){
            const itens = {
            imagem:itemEscolhido.imagem,
            nome:itemEscolhido.nome,
            descricao:itemEscolhido.descricao,
            classificacao:itemEscolhido.classificacao,
            preco:itemEscolhido.preco}

            produtoEncontrado.push(itens)

        }
        
    })
    return produtoEncontrado
}

function criarCard(produto){
    const card = document.createElement('div')
    card.className = 'card'

    const foto = document.createElement('img')
    foto.src = `./img/${produto.imagem}`
    foto.alt = produto.nome

    const nome = document.createElement('h3')
    nome.textContent = produto.nome

    const descricao = document.createElement('span')
    descricao.textContent = produto.descricao

    const classificacao = document.createElement('span')
    classificacao.textContent = criarEstrelas(produto.classificacao)

    const preco = document.createElement('h1')
    preco.textContent = `R$${produto.preco}`

    card.append(foto,nome, descricao, classificacao, preco)

    return card
}

const cards = produtos.map(criarCard)
const itensFiltrados = buscarPorItem('Informática');
console.log(itensFiltrados)

document.getElementById('container').replaceChildren(...cards)

// // 1. Filtra os dados (já está fazendo)
// const itensFiltrados = buscarPorItem('Eletrônicos');

// // 2. Transforma os dados filtrados em elementos HTML (Cards)
// const cardsFiltrados = itensFiltrados.map(criarCard);

// // 3. Coloca os cards filtrados na tela
// document.getElementById('container').replaceChildren(...cardsFiltrados);

// // 4. Debug para conferir no console
// console.log(itensFiltrados);