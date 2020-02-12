'use strict';
class Stack{

    constructor(size){
        if(size === undefined){
            this.array = new Array();
            this.size = -1 ;
        }else{
            this.size = size ; 
            this.array = new Array(size);
        }
        this.lastItem = -1 ;
    }

    push(element){
        if(this.size === -1){
            this.array.push(element);
            ++this.lastItem;
        }else{
            this.array[++this.lastItem] = element;
        }
    }

    pop(){
        console.log('last item : ', this.lastItem )
        if (this.isEmpty) {
            return "Underflow"; 
        }
        this.lastItem--;
        return this.array.pop(); 
    }

    printAllStack(){
        let top = this.lastItem ; 
        while(top >= 0) { 
          console.log(this.array[top]);
          top--;
        }
    }

    length(){
        return this.lastItem;
    }
    
    isEmpty(){
        return this.lastItem < 0;
    }
    peek(){ 
        if (this.lastItem < 0) { 
            cout << "Stack is Empty"; 
            return 0; 
        } 
        else { 
            return  this.array[this.lastItem]; 
        } 
    } 
}
module.exports = Stack ;
