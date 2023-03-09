let arr = [1, 2, 3, 4, 5, 6, 8, 15];

function missing(arr){
    let missingnum = [];

    let minNum = Math.min(...arr);
    let maxNum = Math.max(...arr);

    for(let i = minNum; i<maxNum; i++){
        if(arr.indexOf(i) < 0){
            missingnum.push(i);
        }
    }
    return missingnum;
}
console.log(missing(arr));
