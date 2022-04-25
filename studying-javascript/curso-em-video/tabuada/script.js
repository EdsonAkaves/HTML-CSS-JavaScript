function clicar() {
    var entrada = window.document.getElementById('ent')
    var botao = window.document.getElementById('but')
    var tabuada = document.getElementById('tab')
    var resultado = document.getElementById('res')

    if (entrada.value.length == 0) {
        alert('Por favor, insira dados para continuar')

    } else {
        let a = Number(ent.value)
        tabuada.innerHTML = ''
        for (i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${a} x ${i} = ${a * i}`
            item.value = `tabuada${i}`
            tabuada.appendChild(item)
        }


    } 
}