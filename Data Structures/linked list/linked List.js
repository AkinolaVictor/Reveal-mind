// Creating a linked list

/*
	it requires a node class and a linked list class
*/

//The Node Class, it has two properties, 
//element which store he node data and the next
function Node(element){
	this.element=element;
	this.next=null;
}

//the Linked List class
/* it includeas functions for 
   inserting nodes, removing nodes and finding data value in a list.
   the only property stored in a linked list is a nde to rep the head of the list
*/

function LList(){
	this.head=new Node("head");
	this.find=find;
	this.insert=insert;
	//this.remove=remove;
	this.display=display;
}

//the find function, to go through the list and find us an element
function find(item){
	var currNode=this.head;
	while(currNode.element !=item){
		currNode=currNode.next;
	}
	return currNode;
}


// this is the insert() functon
function insert(newElement, item){
	var newNode=new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next= newNode;
}





//we need a function to display what the list contains
function display(){
	var currNode=this.head;
	while(!(currNode.next==null)){
		//print(currNode.next.element);
		console.log(currNode.next.element);
		currNode=currNode.next;
	}
}

var cities=new LList();
cities.insert('conway', "head");
cities.insert("dele",'conway');
cities.insert("ayo",'dele');
cities.display();