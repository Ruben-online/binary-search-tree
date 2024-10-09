import { NodeTree } from "./node_tree";

class BST {
    private root: NodeTree;

    constructor() {
        this.root = new NodeTree(-1); // Nodo prueba para representar el vacío
        console.log("Árbol inicializado con nodo raiz de prueba");
    }

    private setRoot(newRoot: NodeTree): void {
        this.root = newRoot;
    }

    public getRoot(): NodeTree {
        return this.root;
    }

    public insert(data: number): void {
        console.log(`Insertando el dato: ${data}`);
        let newNode: NodeTree = new NodeTree(data);
        let parent: NodeTree = this.root;
        let current: NodeTree = this.root;

        // Verificar si el árbol está vacío
        if (this.root.getData() === -1) {
            this.root = newNode;
            console.log(`Nodo raiz asignado con el dato: ${data}`);
            return;
        }

        // Búsqueda de la posición correcta
        while (current.getData() !== -1) {
            parent = current;
            if (newNode.getData() < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }

        newNode.setFather(parent);

        if (newNode.getData() < parent.getData()) {
            parent.setLeftChild(newNode);
            console.log(`Nodo insertado a la izquierda de ${parent.getData()}`);
        } else {
            parent.setRightChild(newNode);
            console.log(`Nodo insertado a la derecha de ${parent.getData()}`);
        }
    }

    public search(dataToSearch: number): number {
        console.log(`Buscando el dato: ${dataToSearch}`);
        let data: number = -1;
        let current: NodeTree = this.root;

        while (current.getData() !== -1) { // Usar -1 para verificar nodos ficticios
            if (current.getData() == dataToSearch) {
                data = current.getData();
                console.log(`Dato ${dataToSearch} encontrado`);
                break;
            } else if (dataToSearch < current.getData()) {
                current = current.getLeftChild();
            } else {
                current = current.getRightChild();
            }
        }

        if (data === -1) {
            console.log(`Dato ${dataToSearch} no encontrado`);
        }

        return data;
    }

    private printNode(nodo: NodeTree): void {
        if (nodo.getLeftChild().getData() !== -1)
            this.printNode(nodo.getLeftChild());
        if (nodo.getData() !== -1)
            console.log(nodo.getData());
        if (nodo.getRightChild().getData() !== -1)
            this.printNode(nodo.getRightChild());
    }

    public printAll(): void {
        if (this.root.getData() === -1) {
            console.log("El arbol esta vacio");
        } else {
            console.log("Imprimiendo todos los nodos del arbol:");
            this.printNode(this.root);
        }
    }
}

// main
let myBinarySearchTree: BST = new BST();
myBinarySearchTree.insert(10);
myBinarySearchTree.insert(7);
myBinarySearchTree.insert(100);
myBinarySearchTree.insert(3);
myBinarySearchTree.insert(38);

if (myBinarySearchTree.search(10) != -1) {
    console.log("Dato encontrado");
} else {
    console.log("El dato no existe");
}

myBinarySearchTree.printAll();
