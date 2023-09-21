function  quickSort(array, left, right){
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
    let count = 0
    // Recursão
    if(left < j){
        quickSort(array, left, j)
        count ++
    }
    if(i < right){
        quickSort(array, i, right)
        count ++
    }
    console.log(count)
    return array
}

vetor = [22, 74, 55, 31, 10, 63, 87]
quickSort(vetor, 0, vetor.length)