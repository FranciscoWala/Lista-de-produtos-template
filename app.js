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

function buscarPorItem(palavra){

    produtos.forEach(itemEscolhido => {
        if(palavra=='Informática'){
            itemEscolhido.imagem
            itemEscolhido.nome
            itemEscolhido.descricao
            itemEscolhido.classificacao
            itemEscolhido.preco
        }
    })
    return itemEscolhido
}
console.log(buscarPorItem(Informática))

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

document.getElementById('container').replaceChildren(...cards)