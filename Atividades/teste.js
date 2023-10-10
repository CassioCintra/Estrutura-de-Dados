function verificarExpressao(expressao){
    const pilha = []

    for (let i = 0; i < expressao.length; i++) {
        const caractere = expressao[i]

        if (caractere === '{' || caractere === '[' || caractere === '(') {
            pilha.push(caractere)
        }
        //Verificar se há caractere que fecha
        else if (caractere === '}' || caractere === ']' || caractere === ')') {
            if (pilha.length === 0) {
                //Pilha abert com ) ou ] ou }
                return console.log("A expressão não foi aberta corretamente.")
            }

            const topo = pilha.pop()
            //Se os caracteres não coincidirem
            if ((caractere === '(' && topo !== ')') || (caractere === '[' && topo !== ']') ||
                (caractere === '{' && topo !== '}')){
                return console.log("A expressão não foi fechada corretamente.")
            }
        }
    }
    return console.log("A expressão foi aberta e fechada corretamente.")
}

var expressao = '({({[]})})'
verificarExpressao(expressao)