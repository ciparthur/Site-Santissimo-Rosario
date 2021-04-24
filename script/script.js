function semana() {
    let data = new Date()
    let dia_atual = data.getDay()
    let cor = window.document.getElementById('dia_atual')
    let tit = window.document.getElementById('titulo')

    tit.innerHTML = `<h1>Hoje é dia ${dia_atual}</h1>`

    document.body.style.background = ('#111b24')
}