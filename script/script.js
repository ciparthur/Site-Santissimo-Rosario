function misterios() {
    //Pega o dia da semana no sistema
    let data = new Date()
    let dia_atual = data.getDay()

    //Ligação com a cor de fundo e o título principal dos Mistérios do dia
    let misterios = window.document.getElementById('misterios')
    
    //Ligação aos cinco Mistérios de
    let primeiro_misterio = window.document.getElementById('primeiro_misterio')
    let segundo_misterio = window.document.getElementById('segundo_misterio')
    let terceiro_misterio = window.document.getElementById('terceiro_misterio')
    let quarto_misterio = window.document.getElementById('quarto_misterio')
    let quinto_misterio = window.document.getElementById('quinto_misterio')

    if (dia_atual == 1 || dia_atual == 4) { //Dia 1 = Segunda-feira e dia 4 = Quinta-feira
        document.body.style.background = '#7898CF' //Tom de azul
        misterios.innerHTML = `Mistérios Gozosos` //Título principal

        //Os cinco Mistérios do dia
        primeiro_misterio.innerHTML = `Anunciação da Bem-Aventurada Virgem Maria`
        segundo_misterio.innerHTML = `Visitação da Bem-Aventurada Virgem Maria`
        terceiro_misterio.innerHTML = `O nascimento de Jesus Cristo Nosso Senhor`
        quarto_misterio.innerHTML = `Purificação da Bem-Aventurada Virgem Maria no Templo`
        quinto_misterio.innerHTML = `Descoberta de Nosso Senhor Jesus Cristo no Templo`

    } else if (dia_atual == 2 || dia_atual == 5) { //Dia 2 = Terça-feira e dia 5 = Sexta-feira
        document.body.style.background = '#ED1C24' //Tom de vermelho
        misterios.innerHTML = `Mistérios Dolorosos` //Título principal

        //Os cinco Mistérios do dia
        primeiro_misterio.innerHTML = `A Oração e Agonia de Jesus Cristo Nosso Senhor`
        segundo_misterio.innerHTML = `A Flagelação de Jesus Cristo Nosso Senhor`
        terceiro_misterio.innerHTML = `A Coroação de Espinhos de Jesus Cristo Nosso Senhor`
        quarto_misterio.innerHTML = `O Transporte a Cruz de Jesus Cristo Nosso Senhor`
        quinto_misterio.innerHTML = `A Crucificação de Jesus Cristo Nosso Senhor`

    } else if (dia_atual == 3 || dia_atual == 6 || dia_atual == 0) { //Dia 3 = Quarta-feira, dia 6 = Sábado e dia 0 = Domingo
        document.body.style.background = '#EAC102' //Tom de amarelo
        misterios.innerHTML = `Mistérios Gloriosos` //Título principal

        //Os cinco Mistérios do dia
        primeiro_misterio.innerHTML = `A Ressurreição de Jesus Cristo Nosso Senhor`
        segundo_misterio.innerHTML = `A Ascensão de Jesus Cristo Nosso Senhor aos Céus`
        terceiro_misterio.innerHTML = `A Vindo do Espírito Santo`
        quarto_misterio.innerHTML = `Assunção da Bem-Aventurada Virgem Maria aos Céus`
        quinto_misterio.innerHTML = `Coroação da Bem-Aventurada Virgem Maria nos Céus`

    } else { //Em caso de falha em obter os dias da semana, a cor de fundo será o tom de preto #1d1d1d e os Mistérios do dia será substituido por 'ERRO!'
        document.body.style.background = '#1d1d1d' //Tom de preto
        misterios.innerHTML = `ERRO!` //Em caso de erro, o título principal será substituido pela palavra 'erro'
        
        //Em caso de erro, os cinco Mistérios do dia será substituido pela palavra 'erro'
        primeiro_misterio.innerHTML = `ERRO!`
        segundo_misterio.innerHTML = `ERRO!`
        terceiro_misterio.innerHTML = `ERRO!`
        quarto_misterio.innerHTML = `ERRO!`
        quinto_misterio.innerHTML = `ERRO!`

    }
}