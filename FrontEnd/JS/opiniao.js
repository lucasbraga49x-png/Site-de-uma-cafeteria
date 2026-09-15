function publicarOpiniao() {
    const nomeUser = document.getElementById('NomeUser')
    const opiniao = document.getElementById('opiniao')
    const container = document.querySelector('.containerOpinioes')
    const btnEnviar = document.getElementById('btnEnviar')
    const btnFechar = document.getElementById('btnFechar')
    const btnAbrir = document.getElementById('btnAbrir')
    const formulario = document.querySelector('form')
    
    btnAbrir.addEventListener('click', ()=>{
        formulario.style.display = 'flex'
    })

    btnFechar.addEventListener('click', ()=>{
        formulario.style.display = 'none'
    })

    
    btnEnviar.addEventListener('click', () => {

        const nomeValor = nomeUser.value.trim();
        const opiniaoValor = opiniao.value.trim();

        if (nomeValor === "" || opiniaoValor === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

             
        container.innerHTML += `
            <div class="cardOpiniao">
                <div class="nome-usuario">
                    <h2>${nomeValor}</h2>
                </div>
                <div class="opiniao-usuario">
                    <p>${opiniaoValor}</p>
                </div>
            </div>
        `;
    })
}

publicarOpiniao()