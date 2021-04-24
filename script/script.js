function semana() {
    let data = new Date()
    let dia_atual = data.getDay()
    let titulo = window.document.getElementById('titulo')

    if (dia_atual == 1 || dia_atual == 4) {
        document.body.style.background = '#EAC102'
        titulo.innerHTML = `Mistérios Gozosos`
    } else if (dia_atual == 2 || dia_atual == 6) {
        document.body.style.background = '#ED1C24'
        titulo.innerHTML = `Mistérios Dolorosos`
    } else if (dia_atual == 3 || dia_atual == 5 || dia_atual == 0) {
        document.body.style.background = '#E6E6E6'
        titulo.innerHTML = `Mistérios Gloriosos`
    } else {
        document.body.style.background = '#1d1d1d'
        titulo.innerHTML = `ERRO!`
    }
}