let arr =  [ 'hello', 'world', 'java', 'hello', 'java' ];

let output = {};

arr.forEach(function(a){
    if(output[a]){
        output[a]++;
    }
    else{
        output[a] = 1;
    }
});

console.log(output);