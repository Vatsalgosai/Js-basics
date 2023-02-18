let str1= "({}[]({}))";
let str2 = "}}";


function valid(s) {
    let stack = [];

    for(let i=0; i<s.length; i++){
        let top = stack[stack.length-1]
        if (s[i] == '(' || s[i] == '{' || s[i] == '['){
            stack.push(s[i]);
        }
        
       else if(s[i] == ')' && top == '(' || s[i] =='}' && top == '{' || s[i] ==']' && top == '['){
            stack.pop();
        }else return false;
    }
    if(stack.length == 0){
        return true;
    }
    if(stack.length != 0){
        return false;
    }
}

console.log(valid(str1))
console.log(valid(str2))
