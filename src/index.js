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
    }
    prepend(nodeValue) {
        const newNode = new node(nodeValue, null)
        let currentheadNode = this.nodeMember;
        this.nodeMember = newNode
        this.nodeMember.nextNode = currentheadNode;
    }
    size(){
        let headNode = this.nodeMember;
        if (headNode == null){
            console.log(0)
            return 0;
        }
        else{
            let currentNode = headNode;
            let count = 1;
            while (currentNode.nextNode !== null){
                count++;
                currentNode = currentNode.nextNode;
            }
            console.log(count)
            return count
        }
    }
    head(){
        if (this.nodeMember == null){
            return null;
        }
        else{
            let headNodeReturn = new node(this.nodeMember.value,null)
            console.log(headNodeReturn.value)
            return headNodeReturn
        }
    }
    tail(){
        if (this.nodeMember == null){
            return null;
        }
        else{
            let currentNode = this.nodeMember;
            while (currentNode.nextNode !== null){
                currentNode = currentNode.nextNode;
            }
            console.log(currentNode.value)
            return currentNode
        }
    }
    at(index){
        let currentNode = this.nodeMember;
        for (let i = 0 ;i<index;i++){
            currentNode = currentNode.nextNode;
        }
        console.log(currentNode.value);
        return currentNode.value
    }
    pop(){
        let currentNode = this.nodeMember;
        let beforeEndingNode = null;
        while(currentNode.nextNode !== null){
            beforeEndingNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        beforeEndingNode.nextNode = null
    }
    contains(value){
        let currentNode = this.nodeMember;
        while ((currentNode.nextNode !== null )&&(currentNode.value !== value)){
            currentNode = currentNode.nextNode;
            if(currentNode.value == value){
                return true
            }
        }
        return false
    }
    find(value){
        let currentNode = this.nodeMember;
        let i = 0;
        if(currentNode.value === value){
                return i
        }
        while ((currentNode.nextNode !== null )&&(currentNode.value !== value)){
            currentNode = currentNode.nextNode;
            if(currentNode.value === value){
                return i+1
            }
            i++;
        }
        return null
    }
    toString(){
        let stringOutput = "(" + this.nodeMember.value + ")"
        let currentNode = this.nodeMember;
        while (currentNode.nextNode !== null){
            currentNode = currentNode.nextNode
            stringOutput = stringOutput + "->" + "(" +currentNode.value+ ")";
        }
        return stringOutput
    }
    insertAt(value,index){
        let currentNode = this.nodeMember
        let newNodetoAppend = new node(value, null)
        if (index >0){
            for (let i = 0 ;i < index-1 ; i++){
            currentNode = currentNode.nextNode
            // i is incremented 
            }
            let temp = currentNode.nextNode;
            currentNode.nextNode = newNodetoAppend
            currentNode.nextNode.nextNode = temp

        }
        else{
            let currentheadNode = this.nodeMember;
            this.nodeMember = newNodetoAppend
            this.nodeMember.nextNode = currentheadNode;
        }
    }
        
    removeAt(index){
        let currentNode = this.nodeMember
        let  beforeEndingNode = null;
        if (index >0){
            for (let i = 0 ;i < index ; i++){
            beforeEndingNode = currentNode
            currentNode = currentNode.nextNode
            // i is incremented 
            }
            console.log("currentvalue is" + currentNode.value)
            let temp = currentNode.nextNode;
            currentNode = beforeEndingNode;
            currentNode.nextNode = temp;
            
        }
        else{
            let currentheadNode = this.nodeMember.nextNode;
            this.nodeMember = currentheadNode
        }
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
newList.append("two")
newList.append("three")
newList.prepend("now")
newList.size()
newList.head()
newList.tail()
newList.at(0)
newList.at(2)
//newList.pop()
console.log(newList.contains("this"))
console.log(newList.contains("hello"))
console.log(newList.find("hello"))
console.log(newList.toString())

newList.insertAt("weird thing",0)
console.log(newList.toString())
newList.removeAt(0)
console.log(newList.toString())

console.log(newList)