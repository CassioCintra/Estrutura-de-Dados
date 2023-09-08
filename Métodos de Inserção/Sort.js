function bubbleSort(vetor){

    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                // Trocar os elementos de posição
                let auxiliar = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = auxiliar;
            }
        }
    }
    console.log(vetor);
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
    console.log(vetor)
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
    console.log(vetor)
}
function  quicksort(array, left, right){
    var i = left
    var j = right
    var aux
    var pivotidx = Math.floor((left + right)/2)
    var pivot = array[pivotidx]
    // Partição
    while(i <= j){
        while(array[i] < pivot)
            i++
        while(array[j] > pivot)
            j--
        if(i <= j){
            aux = array[i]
            array[i] = array[j]
            array[j] = aux
            i++
            j--
        }
    }
    // Recursão
    if(left < j)
        quicksort(array, left, j)
    if(i < right)
        quicksort(array, i, right)
    return array
}

const vet = [10, 20, 12, 5, 8, 15]
const vet1 = [10, 20, 12, 5, 8, 15]
const vet2 = [10, 20, 12, 5, 8, 15]
const vet3 = [10, 20, 12, 5, 8, 15]
const vet4 = [10, 20, 12, 5, 8, 15]
bubbleSort(vet1)
selectionSort(vet2)
insertionSort(vet3)
quickSort(vet4, 0, vet.length - 1)