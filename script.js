function abrirModal(){
    const modal = document.getElementById('janela-form')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'janela-form'){
            modal.classList.remove('abrir')
        }
    })
}