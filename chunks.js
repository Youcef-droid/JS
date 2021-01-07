function chunks (arr,size){
    console.log(arr.slice(4,45))
    let i = 0 
    let newArr = []
    for (let n = 0;n<arr.length; n+=size){
        newArr.push(arr.slice(i,i+size))
        i+=size
        console.log(i)
    }
    return newArr;
}


console.log(chunks([1,2,3,4,5,6],4))