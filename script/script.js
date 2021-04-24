function semana() {
    let data = new Date()
    let dia_atual = data.getDay()
    let res = window.document.getElementById('dia_atual')

    res.innerHTML = `${dia_atual}`
}