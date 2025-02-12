let notaUm=parseInt(prompt("Insira sua nota"));
let notaDois=parseFloat(prompt("Insira sua segunda nota")); // serve para imprimir números quebrados 
let notaTrês=parseInt(prompt("Insira sua terceira nota")); // parseInt serve para imprimir dados númericos no prompt já que ele apenas imprime dados de string 
const cálculo = (notaUm + notaDois + notaTrês) / 3

if(cálculo >= 6){
    alert(`Você tirou ${cálculo}, você passou de ano!`)
} else {
    alert(`Sua nota não está acima da média, pois você tirou ${cálculo} não passou de ano, estude para a recuperação.`)
} 