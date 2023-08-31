function torreDeHanoi(n, origem, destino, auxiliar){
    if(n == 1)
        console.log(`Mova o Disco ${n} da ` + origem + " para a " + destino)
    else{
        torreDeHanoi(n - 1, origem, auxiliar, destino)
        console.log(`Mova o Disco ${n} da ` + origem + " para a " + destino)
        torreDeHanoi(n - 1, auxiliar, destino, origem)

    }
}
torreDeHanoi(3,'Torre A', 'Torre C', 'Torre B')