let a = [1, 2, 5, 2, 1, 8, 7];

obj = {}

for(let i of a){
    obj[i] = true;
}

console.log(Object.keys(obj))
