var valores = []
var res = window.document.getElementById('resultado')
var tabela = document.getElementById('tab')
var num = document.getElementById('ent')
var botao = document.getElementById('but')
var finalizar = document.getElementById('fin')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function clicar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        tabela.appendChild(item)
        res.innerHTML=''
        console.log(valores)


    } else {
        alert('Por favor, insira um número entre 1 e 100 para continuar.')

    }
    num.value = ''
    num.focus()
}

function fina() {
    var num = document.getElementById('ent')
    if (valores.length == 0) {
        alert('Por favor, insira um número entre 1 e 100 para continuar.')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]

        }
        media = soma/(valores.length)
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor digitado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valor digitados é igual a ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é igual a ${media}.`
    }
}

