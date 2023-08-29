function potencia(base, expoente){
    if(expoente == 0){
        return 1
    }
    return (base *potencia(base, expoente-1))
  
}
    let n1 = 2
    let n2 = 14
    let result = potencia(n1, n2)
    console.log(result)