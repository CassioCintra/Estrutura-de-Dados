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
function quickSort(vetor, left, right){
    var i = left
    var j = right
    var aux
    var pivotidx = Math.floor((left + right) / 2)
    var pivot = vetor[pivotidx]

    //Partição
    while(i <= j){
        while(parseInt(vetor[i]) < pivot)
            i++
        while(parseInt(vetor[j]) > pivot)
            j++
        if(i <= j){
            aux = vetor[i]
            vetor[i] = vetor [j]
            vetor[j] = aux
            i++
            j--
        }
    }
    //Recursão
    if(left < j)
        quickSort(vetor, left, j)
    if(i < right)
        quickSort(vetor, i, right)
    return vetor
}

function criaVetor(vetorRandom, vetorCrescente, vetorDecrescente){
    let tamanho = 100
    let maximo = 1000
    let minimo = 1
    for(let i = 0; i < tamanho; i++){
        vetorRandom[i] = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
        vetorCrescente[i] = i + 1
        vetorDecrescente[i] = tamanho - i
    }
}

const vetorRandom = []
const vetorCrescente = []
const vetorDecrescente = []

console.log("Tempo de Execução BubbleSort")
criaVetor(vetorRandom, vetorCrescente, vetorDecrescente)
console.time('Vetor Crescente')
bubbleSort(vetorCrescente)
console.timeEnd('Vetor Crescente')
console.time('Vetor Decrescente')
bubbleSort(vetorDecrescente)
console.timeEnd('Vetor Decrescente')
console.time('Vetor Random')
bubbleSort(vetorRandom)
console.timeEnd('Vetor Random')
console.log('Tempo de Execução SelectionSort')
criaVetor(vetorRandom, vetorCrescente, vetorDecrescente)
console.time('Vetor Crescente')
selectionSort(vetorCrescente)
console.timeEnd('Vetor Crescente')
console.time('Vetor Decrescente')
selectionSort(vetorDecrescente)
console.timeEnd('Vetor Decrescente')
console.time('Vetor Random')
selectionSort(vetorRandom)
console.timeEnd('Vetor Random')
console.log("Tempo de Execução InsertionSort")
criaVetor(vetorRandom, vetorCrescente, vetorDecrescente)
console.time('Vetor Crescente')
insertionSort(vetorCrescente)
console.timeEnd('Vetor Crescente')
console.time('Vetor Decrescente')
insertionSort(vetorDecrescente)
console.timeEnd('Vetor Decrescente')
console.time('Vetor Random')
selectionSort(vetorRandom)
console.timeEnd('Vetor Random')
console.log("Tempo de Execução QuickSort")
criaVetor(vetorRandom, vetorCrescente, vetorDecrescente)
console.time('Vetor Crescente')
insertionSort(vetorCrescente)
console.timeEnd('Vetor Crescente')
console.time('Vetor Decrescente')
insertionSort(vetorDecrescente)
console.timeEnd('Vetor Decrescente')
console.time('Vetor Random')
selectionSort(vetorRandom)
console.timeEnd('Vetor Random')