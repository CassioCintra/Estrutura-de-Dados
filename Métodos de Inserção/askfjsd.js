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

var vet = [10, 20, 12, 5, 8, 15]

quicksort(vet, 0, vet.length - 1)
console.log(vet)