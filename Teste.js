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