function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
} 

function limpar() {
    resultado.innerHTML = ""
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
    }

}

function clearOne() {
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}