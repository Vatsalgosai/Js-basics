let arr =  [ 'hello', 'world', 'java', 'hello', 'java' ];

let output = arr.reduce(function(acc,curr){
    if(curr in acc){
        acc[curr]++;
    }
    else{
        acc[curr] = 1;
    }
    return acc;
},{});

console.log(output);
