/*
Operação disjunção
   passou := falso
   escreval("Digite o nome do aluno: ")
   leia(nome)
   escreval("Digite a primeira nota: ")
   leia(nota1)
   escreval("Digite a segunda nota: ")
   leia(nota2)
   media := (nota1 + nota2) / 2
       se media >= 6 entao
       passou := verdadeiro
       escreval(nome," está aprovado!")
           senao
               se (media = 0) ou (media = 10) entao
               escreval(nome," deverá refazer as questões!")
                   senao
                       escreval(nome," está reprovado!")
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
    alert(nome + " está aprovado!")

if(media == (0 || 10))
    alert(nome + " deverá refazer as questões!")

else    
    alert(nome + " foi reprovado!")   