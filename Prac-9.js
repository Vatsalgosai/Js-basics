let arr = [1, 4, 3, 5, 4, 2, 5];

let output = arr.filter(function(val,index){
    if(arr.indexOf(val) !== index)
    return val;
}); 

console.log(output);