function bubbleSort(vetor){
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let auxiliar = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = auxiliar
            }
        }
    }

}
function selectionSort(vetor){
    for (i = 0; i < vetor.length; i++){
        var small = vetor[i]
        var position = i
        for(j = i+1; j < vetor.length; j++){
            if(small > vetor[j]){
                small = vetor[j]
                position = j
            }
        }
        var assistant = vetor[i]
        vetor [i] = vetor [position]
        vetor[position] = assistant
    }
}
function insertionSort(vetor){
    for (i = 1; i < vetor.length; i++){
        var variable = vetor[i]
        let j = i - 1

        while(j >= 0 && vetor[j] > variable ){
            vetor[j + 1] = vetor[j]
            j--
        }
        vetor[j + 1] = variable       
    }
}

    let tamanho = 1000
    let minimo = 1
    let maximo = 1000
    const vetorRandom = []
    const vetorOrganizado = []
    const vetorInvertido = []

    for(let i = 0; i < tamanho; i++){
        vetorRandom[i] = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
        vetorOrganizado[i] = i + 1
        vetorInvertido[i] = 1000 - i

    }
    console.log(vetorRandom)
    console.log(vetorOrganizado)
    console.log(vetorInvertido)
    console.log("Tempo de Execução BubbleSort")
    console.time('VetorRandom')
    bubbleSort(vetorRandom)
    console.timeEnd('VetorRandom')
    console.time('VetorOrganizado')
    bubbleSort(vetorOrganizado)
    console.timeEnd('VetorOrganizado')
    console.time('VetorInvertido')
    bubbleSort(vetorInvertido)
    console.timeEnd('VetorInvertido')
    console.log('Tempo de Execução SelectionSort')
    console.time('VetorRandom')
    selectionSort(vetorRandom)
    console.timeEnd('VetorRandom')
    console.time('VetorOrganizado')
    selectionSort(vetorOrganizado)
    console.timeEnd('VetorOrganizado')
    console.time('VetorInvertido')
    selectionSort(vetorInvertido)
    console.timeEnd('VetorInvertido')
    console.log("Tempo de Execução InsertionSort")
    console.time('VetorRandom')
    insertionSort(vetorRandom)
    console.timeEnd('VetorRandom')
    console.time('VetorOrganizado')
    insertionSort(vetorOrganizado)
    console.timeEnd('VetorOrganizado')
    console.time('VetorInvertido')
    insertionSort(vetorInvertido)
    console.timeEnd('VetorInvertido')