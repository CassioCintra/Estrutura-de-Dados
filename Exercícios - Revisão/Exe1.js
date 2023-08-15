function exe1(){
    const vetor1 = []
    const vetor2 = []
    
    for(i = 0; i < 5; i++){
        vetor1[i] = prompt("De o número do primeiro vetor")
        vetor2[i] = prompt("De o número do primeiro vetor")
    }

    const vetorBig = []
    for(i = 0; i < 25; i++){
        vetorBig.push(vetor1[i])
        vetorBig.push(vetor2[i])
    }    

    console.log(vetor1)
    console.log(vetor2)
    console.log(vetorBig)
}
function exe2(){
    const vetor = []

    do{
        opcao = Number(prompt(`1. Cadastrar \n2. Mostrar \n3. Remover \n4. Somar Par ou Impar ` +
        `\n5. Somar entre índices \n 6. Parar Programa`))
        
        switch(opcao){
            case 1:
                let N = Number(prompt("Quantidade de Elementos"))
                if((vetor.length + N) < 50){
                    inserir(vetor, N)
                }
                else{
                    let quantidade = vetor.length - 50
                    alert(`Quantidade ultrapassar o máximo de elementos!!`+
                    `\nSomente serão aceitos mais ${quantidade} elementos.`)
                }
                break
            case 2:

                break
            case 3:

                break
            case 4:

                break
            case 5:

                break
            case 6:
                alert("O programa será encerrado")
                break
        }
    }while(opcao != 6)
}
function inserir(vetor,qntd){
    for(var i = 0; i < qntd; i++){
        numero = Number(prompt("Informe o número:"))
        vetor.push(numero)
    }
}