function filterOutOdds(...nums){
    nums.filter((num)=>{num%2===0})
}

const findMin=(...nums)=>{ Math.min(...nums)}

function mergeObjects(obj1,obj2){
    const newobj= [...obj1,...obj2]
    return newobj
}

function doubleAndReturnArgs(arr,...rest){
    const double = (...rest) => {rest*2}
    return [...arr,...double]
}

