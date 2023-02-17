let arr = [1, 2, 3, 4, 6, 7, 8, 9];

function tosum(arr, sum){
    let output = [];
    let len = arr.length;
    for(let i=0; i<len; i++){
        for(let j = i; j<len; j++){
            if(arr[i]+arr[j] == sum){
                output.push([arr[i], arr[j]])
            }
        }
    }
    return output;
}

console.log(tosum(arr, 9))