class StackProgram{

    constructor(){
        this.values=[];
        this.count=0;
        this.ulimit=10;

    }
     push (stack_values){

        if(this.count>this.ulimit){
            console.log("Stack limit crossed");
        }

        else{

        this.values[this.count]=stack_values;
        console.log(`${stack_values} added to ${this.count}`);
        this.count=this.count+1;
        
        return this.count-1;
        }


    }
pop(){

        if(this.count==0) {
            console.log("no items to pop!!");
        }
        else{
        let ditem=this.values[this.count-1];
        this.count=this.count-1;
        console.log(`${ditem} removed`);
        return ditem;

        }


    }
    
      peek(){

        console.log(`top item of the stack is ${this.values[this.count-1]}`)
        return this.values[this.count-1]
    }
    
    const stack = new StackProgram();
stack.push(10);
stack.push(30);
stack.push(30);
stack.push(60);
stack.push(20);
stack.push(40);
stack.push(20);
stack.push(40);
stack.push(30);
stack.push(20);
stack.push(50);
stack.push(50);
stack.push(20);
stack.push(50);
stack.pop();
stack.peek();
stack.push(50);
stack.peek();
stack.stack_container();
stack.push(10);
