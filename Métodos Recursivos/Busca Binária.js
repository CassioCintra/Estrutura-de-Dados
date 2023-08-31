function buscaBinaria(A, inicio, fim, x){
    var meio
    if(inicio > fim){
        return -1
    }
    else{
        meio= Math.floor((inicio + fim) / 2)
        if(A[meio] == x)
            return meio
        else if (x < A[meio])
            return buscaBinaria(A, inicio, meio-1, x)
        else
            return buscaBinaria(A, meio+1, fim, x)
    }
}