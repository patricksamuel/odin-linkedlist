import "./styles.css"

console.log("test")


/*
You will need two classes or factories:

LinkedList class / factory, which will represent the full list.
Node class / factory, containing a value property and a nextNode property, set both as null by default.
*/

class LinkedList {
    constructor(){
        this.nodeMember = null
    };
    append(nodeValue) {
        const newNode = new node(nodeValue,null);
        let headNode = this.nodeMember;
        if (headNode==null){
            console.log("head is empty");
            this.nodeMember = newNode
        }
        else {
            let currentNode = headNode
            while(currentNode.nextNode !== null) { //that means if current node is empty exit the while loop
                console.log("iterate");
                currentNode = currentNode.nextNode;

            }
            currentNode.nextNode = newNode;

        }

        console.log("value assigned");
        console.log("recurrent empty");
    }
}

class node {
    constructor(value = null,nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
let newList = new LinkedList;
newList.append("try")
newList.append("this")
newList.append("one")
console.log(newList)