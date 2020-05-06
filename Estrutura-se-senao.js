/*
valor1, valor2, resultado: real
operacao: caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("A proposta desse programa é calcular dois valores baseado na operação da sua escolha")
escreval()
escreva("Digite o primeiro valor: ")
leia(valor1)
escreva("Digite a operação, ex,: +, -, *, /  ")
leia(operacao)
escreva("Digite o segundo valor: ")
leia(valor2)

escolha operacao
    caso "+"
        resultado := valor1 + valor2
    caso "-"
        resultado := valor1 - valor2
    caso "*"
        resultado := valor1 * valor2
    caso "/"
        resultado := valor1 / valor2
fimescolha

escreval("O resultado é:", resultado)
index3.html
*/


function acaoBotao(params){

var valor1, valor2, resultado, operacao;    

prompt("A proposta desse programa é calcular dois valores baseado na operação da sua escolha")

valor1 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite a operação, Ex,: +, -, *, /: ")
valor2 = prompt("Digite o segundo valor: ")

if(operacao == "+"){
    resultado = parseInt(valor1) + parseInt(valor2)
}else if(operacao == "-"){
    resultado = parseInt(valor1) - parseInt(valor2)
}else if(operacao == "*"){
    resultado = parseInt(valor1) * parseInt(valor2)
}else if(operacao == "/"){
    resultado = parseInt(valor1) / parseInt(valor2)
}  
document.getElementById("paragrafo").innerText = resultado
}     