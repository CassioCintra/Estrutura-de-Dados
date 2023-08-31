function torreDeHanoi(disco, origem, auxiliar, destino){
    // Primeiro disco direto para torre C
    for(i = 0; i < 3; i++){
        if(disco == 1){
            return (console.log(`Disco 1 da ${origem} para a ${destino}`));
        }
        else{
            return (console.log(`Disco ${disco} da ${origem} para a ${destino}`));
        }
    }
}
//Programa para testar a função
const numeroDiscos = [1, 2, 3]
torreDeHanoi(numeroDiscos, `Torre A`, `Torre B`, `Torre C`);