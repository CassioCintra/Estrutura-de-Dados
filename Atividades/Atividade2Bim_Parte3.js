class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class ListaEncadeada {
    constructor() {
        this.head = null
    }
    lista() {
        let current = this.head;
        while (current) {
            console.log(current.element)
            current = current.next
        }
    }
    removerPrimeiro() {
        if (this.head) {
            this.head = this.head.next
        }
    }
    inserirInicio(element) {
        const newNode = new Node(element)
        newNode.next = this.head
        this.head = newNode
    }
    retornarPosicao(element) {
        let current = this.head
        let index = 0

        while (current) {
            if (current.element === element) {
                return index
            }

            current = current.next
            index++
        }

        return -1 // Elemento não encontrado
    }
    removerPosicao(index) {
        if (index < 0) {
            return "Indice inválido"
        }

        if (index === 0) {
            this.removerPrimeiro()
            return
        }

        let current = this.head
        let previous = null
        let currentIndex = 0

        while (currentIndex < index && current) {
            previous = current
            current = current.next
            currentIndex++
        }

        if (current) {
            previous.next = current.next
        }
    }
}