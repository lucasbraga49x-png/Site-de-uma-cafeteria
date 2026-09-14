function efeitoSessaoProdutosPopulares() {
    const cards = document.querySelectorAll('.cardProdutoVendido')

    cards.forEach(card => {

        const divInvisivel = document.createElement('div')
        divInvisivel.className = 'divInformacoesProduto'
        divInvisivel.style.display = 'none'

        const texto = document.createElement('p')
        texto.textContent = 'Um cafezinho quentinho e bom que todo mundo ama.'
        texto.id = 'conteudo'
   
        card.appendChild(divInvisivel)
        divInvisivel.appendChild(texto)

        card.addEventListener('mouseenter', () => {
            divInvisivel.style.display = 'block'
        })

        card.addEventListener('mouseleave', () => {
            divInvisivel.style.display = 'none'
        })

    })
}

efeitoSessaoProdutosPopulares()