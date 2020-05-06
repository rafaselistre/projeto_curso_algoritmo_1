/*
Operação conjunção
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota: ")
   leia(nota1)
   escreval("Digite a segunda nota: ")
   leia(nota2)
   media := (nota1 + nota2) / 2
       se media >= 6 entao
           escreval(nome, " está aprovado!")
           passou := verdadeiro
       senao
           se nao passou e media = 0 entao
               escreval(nome," está com prova zerada!")
           senao
               se (media > 0) e (media < 6) entao
                   escreval(nome, " está reprovado!")
               fimse
           fimse
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

if(!passou)
    alert(nome + " foi reprovado!")

if(!passou && (media == 0))    
    alert(nome + " está com prova zerada!")

else    
    alert(nome + " foi aprovado!")   