function pilha(){
    var fila = []
    var x

    x = parseInt(prompt("Informe um número"))
    fila.push(x)
    fila.push(1)
    fila.push(2)
    alert("Fila: " + fila)
    x = fila.shift()
    alert("elemento: " + x)
    alert("Fila: " + fila)
}

function fila(){
    var pilha = []
    var x
    
    x = parseInt(prompt("Informe um número"))
    
    pilha.push(x)
    pilha.push(1)
    pilha.push(2)
    
    alert("Pilha: " + pilha)
    x = pilha.pop()
    
    alert("elemento: " + x)
    alert("Pilha: " + pilha)
}