/* Passando parâmetros em funções */
function soma(n1, n2, n3, n4, n5) {
    let resultado = (n1 + n2 + n3 + n4 + n5) / 5;
    console.log('Resultado: ' + resultado);
}

soma(10, 10, 10, 10, 9.9);

//Outro exemplo!

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomeCompleto("Rawston", "Marinho");