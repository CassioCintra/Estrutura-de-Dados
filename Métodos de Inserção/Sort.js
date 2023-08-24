function selectionSort(){
    var vetor = [10, 20, 12, 5, 8, 15]

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
function insertionSort(){
// Guarda o numero a ser alterado numa variavel
// comparando e trocando posições
    var vetor = [10, 20, 12, 5, 8, 15]

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