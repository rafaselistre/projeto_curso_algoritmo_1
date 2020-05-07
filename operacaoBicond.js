/*
Operação Bicondicional
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota: ")
   leia(nota1)
   escreval("Digite a segunda nota: ")
   leia(nota2)
   media := (nota1 + nota2) / 2
       se media >= 6 entao
           se nome = "Rafa" entao
               escreval(nome, " foi aprovado!")
           senao
               escreval("Verificar o nome correto do aluno!")
           fimse
       senao
           escreval(nome, " foi reprovado!")
       fimse
*/
var nome, nota1, nota2, passou;
passou = false;
nome = prompt("Digite o nome do aluno:")     
nota1 = prompt("Digite a primeira nota:")
nota2 = prompt("Digite a segunda nota: ")

media = (Number(nota1) + Number(nota2)) / 2;

if(media >= 6)
    passou = true;

if(passou && (nome == "Rafa"))    
    alert(nome + " foi aprovado!")

if(!passou && (nome == "Rafa"))
    alert(nome + " foi reprovado!")

else
    alert("Verificar o nome correto do aluno!")    