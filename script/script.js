function semana() {
    let data = new Date()
    let dia_atual = data.getDay()
    let misterios = window.document.getElementById('misterios')
    let primeiro_misterio = window.document.getElementById('primeiro_misterio')
    let segundo_misterio = window.document.getElementById('segundo_misterio')
    let terceiro_misterio = window.document.getElementById('terceiro_misterio')
    let quarto_misterio = window.document.getElementById('quarto_misterio')
    let quinto_misterio = window.document.getElementById('quinto_misterio')

    if (dia_atual == 1 || dia_atual == 4) {
        document.body.style.background = '#EAC102'
        misterios.innerHTML = `Mistérios Gozosos`
        primeiro_misterio.innerHTML = `Anunciação da Bem-Aventurada Virgem Maria`
        segundo_misterio.innerHTML = `Visitação da Bem-Aventurada Virgem Maria`
        terceiro_misterio.innerHTML = `O nascimento de Jesus Cristo Nosso Senhor`
        quarto_misterio.innerHTML = `Purificação da Bem-Aventurada Virgem Maria no Templo`
        quinto_misterio.innerHTML = `Descoberta de Nosso Senhor Jesus Cristo no Templo`

    } else if (dia_atual == 2 || dia_atual == 5) {
        document.body.style.background = '#ED1C24'
        misterios.innerHTML = `Mistérios Dolorosos`
        primeiro_misterio.innerHTML = `A Oração e Agonia de Jesus Cristo Nosso Senhor`
        segundo_misterio.innerHTML = `A Flagelação de Jesus Cristo Nosso Senhor`
        terceiro_misterio.innerHTML = `A Coroação de Espinhos de Jesus Cristo Nosso Senhor`
        quarto_misterio.innerHTML = `O Transporte a Cruz de Jesus Cristo Nosso Senhor`
        quinto_misterio.innerHTML = `A Crucificação de Jesus Cristo Nosso Senhor`

    } else if (dia_atual == 3 || dia_atual == 6 || dia_atual == 0) {
        document.body.style.background = '#E6E6E6'
        misterios.innerHTML = `Mistérios Gloriosos`
        primeiro_misterio.innerHTML = `A Ressurreição de Jesus Cristo Nosso Senhor`
        segundo_misterio.innerHTML = `A Ascensão de Jesus Cristo Nosso Senhor aos Céus`
        terceiro_misterio.innerHTML = `A Vindo do Espírito Santo`
        quarto_misterio.innerHTML = `Assunção da Bem-Aventurada Virgem Maria aos Céus`
        quinto_misterio.innerHTML = `Coroação da Bem-Aventurada Virgem Maria nos Céus`

    } else {
        document.body.style.background = '#1d1d1d'
        misterios.innerHTML = `ERRO!`
        primeiro_misterio.innerHTML = `ERRO!`
        segundo_misterio.innerHTML = `ERRO!`
        terceiro_misterio.innerHTML = `ERRO!`
        quarto_misterio.innerHTML = `ERRO!`
        quinto_misterio.innerHTML = `ERRO!`

    }
}