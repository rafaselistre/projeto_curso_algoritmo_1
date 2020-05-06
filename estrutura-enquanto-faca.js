/*
nome: caracter
    idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("Digite a quantidade de vezes que será verificado a idade: ")
    leia(limite)
    contador := 0
    enquanto contador < limite faca
        escreva("Digite o nome da pessoa: ")
        leia(nome)
        escreva("Digite a idade do ",nome, " : ")
        leia(idade)
        se idade > 18 entao
            escreval(nome, " é maior de idade!")
        senao
            escreval(nome, " é menor de idade!")
        fimse
        contador := contador + 1
    fimenquanto
    inde3.html
    só está aparecendo o resultado do último cálculo!!!

*/
function acaoBotao(){
    var nome, idade, limite, contador

    limite = prompt("Digite a quantidade de vezes que será verificado a idade: ")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do " + nome + " : ")
        if(idade > 18)
            document.getElementById("paragrafo").innerText = nome + " é maior de idade!"
        else
            document.getElementById("paragrafo").innerText = nome + " é menor de idade!"
        contador++    
    }
}        