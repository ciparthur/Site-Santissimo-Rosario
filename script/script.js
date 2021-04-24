function semana() {
    let data = new Date()
    let dia_atual = data.getDay()
    let cor = window.document.getElementById('dia_atual')
    let tit = window.document.getElementById('titulo')

    tit.innerHTML = `${dia_atual}`

    document.body.style.background = ('#111b24')
}