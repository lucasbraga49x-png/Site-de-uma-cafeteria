const header = document.querySelector('header')

function GerarMenu() {
    header.innerHTML =`
    <div class="logo">
            <img src="FrontEnd/imagens/logo.png" alt="logo">
        </div>
        <div class="navegacao">
            <div class="links">
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Cardápio</a></li>
                    <li><a href="">Opiniões</a></li>
                    <li><a href="">Saiba mais</a></li>
                </ul>
            </div>

            <div class="botao">
             <button>Faça pedido</button>
            </div>
        </div>
    `
}

GerarMenu()

function gerarFooter(){
   const footer = document.querySelector('footer')

   footer.innerHTML = `
   <div class="containerFooter">
            <div class="footerInformacoes">
                <h2>COFFE</h2>
                <p>Na nossa cafeteria você pode apreciar nossa comida a vontade e de maneira inesquecível.</p>
            </div>
            <div class="footerInformacoes">
                <h2>Continue navegando</h2>

                <div class="linksFooter">
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Cardápio</a></li>
                        <li><a href="">Opiniões</a></li>
                        <li><a href="">Saiba mais</a></li>
                    </ul>
                </div>
            </div>
            <div class="footerInformacoes">
                <h2>Nossos Contatos</h2>
                <p><img src="FrontEnd/imagens/gmail.png" alt="icon">coffeworks@gmail.com</p>
                <p><img src="FrontEnd/imagens/telefone.png" alt="icon">(+55) 799 81554-6722</p>
            </div>
        </div>
        <div class="footerDireitosAutorais">
            <hr>
            <p>&copy; 2026 COFFE.  Todos os direitos reservados.</p>
        </div>
   `
}

gerarFooter()