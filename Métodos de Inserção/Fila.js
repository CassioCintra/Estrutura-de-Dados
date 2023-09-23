var fila = []
var x

x = parseInt(prompt("Informe um número"))
fila.push(x) //adiciona no vetor
fila.push(1)
fila.push(2)

alert("fila: " + fila)

x = fila.shift()
alert('Elemento: ' + x) // remove o elemento da fila
alert('Fila: ' + fila)

fila.push(10)
prompt(fila)