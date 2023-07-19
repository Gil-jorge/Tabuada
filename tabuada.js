/* Exemplo de Tabuada */
//Declaração de função
function calculaTabuada(){
    //Obtendo do DOM o tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");
    //obtendo o valor A do campo input number e convertendo em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);

//Limpanmdo o conteúdo do tbody
    tabuada.innerHTML = '';
//Criando laço de repetição de 0 a 10
    for(let valorB = 0; valorB <= 10; valorB++){
//Criando o resultado da linha atual
    let resultado = valorA * valorB;
//Criando o template das colinas da linha atual
    let template = `
    <tr> 
    <td>${valorA}</td>
    <td>x</td>
    <td>${valorB}</td>
    <td>=</td>
    <td>${resultado}</td>
    </tr>
    `;
//Criando o elemento tr
    let tr = document.createElement('tr');
//Inserindo as colunas na linha
    tr.innerHTML = template;
//Inserindoi a linha na tabela
    tabuada.append(tr);
}//fechando o for

}//Fechando a função

calculaTabuada();// Chamando a nossa função pela primeira vez

document.querySelector("#valorA").addEventListener('change', calculaTabuada);//Adicionando o evento de alteração ao campo número