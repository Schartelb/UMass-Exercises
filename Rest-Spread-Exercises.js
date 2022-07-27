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

const removeRandoms = (...ins) => ({newarray = ins.splice(math.random()*ins.length)})

const extend = (array1, array2) => { newarray =[...array1, ...array2]}

const addKeyVal = (obj,key,val) => {newobj={...obj,obj[key]=val}}

//const removeKey = (obj,key) => {}    spread obj, find key & index, splice index of key?

const combine = (obj1,obj2) => ({newobj={...obj1,...obj2}})

const update = (obj,key,val) => {}//modifed key? so changing out a key/value? or changing the value of a key?