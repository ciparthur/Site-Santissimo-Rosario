function semana() {
    let data = new Date()
    let dia_atual = data.getDay()
    let res = window.document.getElementsByTagName('body')

    res.innerText = `${dia_atual}`
}