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