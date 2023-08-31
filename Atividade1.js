// Implementação dos algoritmos de ordenação

function bubblesort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

// Função para testar os algoritmos de ordenação

function testSortingAlgorithms(arr) {
    console.log("Tamanho do vetor:", arr.length);

    // Clone do vetor original para usar em todos os algoritmos
    const arrCopy = [...arr];

    // Bubblesort
    const startBubblesort = new Date().getTime();
    bubblesort(arrCopy);
    const endBubblesort = new Date().getTime();
    console.log(`Bubblesort: ${(endBubblesort - startBubblesort) / 1000} segundos`);

    // Seleção Direta
    const arrCopySelection = [...arr];
    const startSelection = new Date().getTime();
    selectionSort(arrCopySelection);
    const endSelection = new Date().getTime();
    console.log(`Seleção Direta: ${(endSelection - startSelection) / 1000} segundos`);

    // Inserção Direta
    const arrCopyInsertion = [...arr];
    const startInsertion = new Date().getTime();
    insertionSort(arrCopyInsertion);
    const endInsertion = new Date().getTime();
    console.log(`Inserção Direta: ${(endInsertion - startInsertion) / 1000} segundos`);
}

// Tamanho do vetor
const n = 1000;

// Vetor aleatório
const randomArr = Array.from({ length: n }, () => Math.floor(Math.random() * n) + 1);
testSortingAlgorithms(randomArr);

// Vetor ordenado
const sortedArr = Array.from({ length: n }, (_, index) => index + 1);
testSortingAlgorithms(sortedArr);

// Vetor invertido
const reversedArr = Array.from({ length: n }, (_, index) => n - index);
testSortingAlgorithms(reversedArr);