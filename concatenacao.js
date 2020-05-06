/*
Concatenação
    nome: caracter
    numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("Digite o nome: ")
    leia(nome)
    escreval("Digite o número: ")
    leia(numero)
    
    escreval(nome, " :", numero)
    */

var nome, numero;

nome = prompt("Digite o nome: ")
numero = prompt("Digite o número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero