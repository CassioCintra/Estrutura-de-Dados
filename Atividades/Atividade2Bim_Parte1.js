function verificarExpressao(expressao) {
    const fila = []

    for (let i = 0; i < expressao.length; i++) {
        const caractere = expressao[i]

        if ((caractere === '{') || (caractere === '[') || (caractere === '(')) {
            fila.push(caractere)
        }
        // Verificar se o caractere fecha corretamente
        else if ((caractere === '}') || (caractere === ']') || (caractere === ')')) {
            if (fila.length === 0) {
                // Pilha aberta com ) ou ] ou }
                return console.log("A expressão não foi aberta corretamente.")
            }

            const abre = fila.shift();
            // Verificar o caracter de abertura é o correto
            if ((caractere === ')' && abre !== '(') || (caractere === ']' && abre !== '[') ||
                (caractere === '}' && abre !== '{')) {
                return console.log("A expressão não foi fechada corretamente.")
            }
        }
    }

    //Fila vazia: tudo o que foi aberto, foi fechado
    if (fila.length === 0) {
        return console.log("A expressão foi aberta e fechada corretamente.")
    }
    //Sobra um caracter: ) ou ] ou }
    else {
        return console.log("A expressão não foi fechada corretamente.")
    }
}

var expressao = '({({[])}))'
verificarExpressao(expressao)