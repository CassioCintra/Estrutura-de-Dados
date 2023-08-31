function bubbleSort(vetor) {
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

const vetor = [10, 20, 12, 5, 8, 15];
bubbleSort(vetor);