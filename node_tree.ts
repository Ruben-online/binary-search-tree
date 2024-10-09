export class NodeTree {
    private data: number;
    private father: NodeTree; 
    private leftChild: NodeTree;
    private rightChild: NodeTree;

    constructor(data: number) {
        this.data = data;
        // Apuntan asi mismos al inicio 
        this.father = this; 
        this.leftChild = this; 
        this.rightChild = this; 
    }

    public getData(): number {
        return this.data;
    }

    public setFather(newFather: NodeTree): void {
        this.father = newFather;
    }

    public getFather() {
        return this.father;
    }

    public setLeftChild(newChild: NodeTree): void {
        this.leftChild = newChild;
    }

    public getLeftChild() {
        return this.leftChild;
    }

    public setRightChild(newChild: NodeTree): void {
        this.rightChild = newChild;
    }

    public getRightChild() {
        return this.rightChild;
    }
}
