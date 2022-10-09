/* Switch #20 */
let profission = "fiscal";

console.log("Proffisão: " + profission);

switch (profission) {
    case 'fiscal':
        console.log("Seu uniforme será VERDE");
        break;
    case 'bombeiro':
        console.log("Seu uniforme será VERRNELHA");
        break;
    case 'policial':
        console.log("Seu uniforme será AZUL");
        break;
    default:
        console.log("Sua camisa será PRETA");
        break;
}