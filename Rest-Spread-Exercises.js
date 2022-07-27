function filterOutOdds(...nums){
    nums.filter((num)=>{num%2===0})
}

//answer: const filterOutOdds = (...args) => arg.filter( v => v % 2===0)

const findMin=(...nums)=>{ Math.min(...nums)}

//answer: didn't need curly braces to return

function mergeObjects(obj1,obj2){
    const newobj= {...obj1,...obj2}
    return newobj
}

//answer: const mergeObjects(obj1,obj2) => ({...obj1,...obj2})

function doubleAndReturnArgs(arr,...rest){
    const double = (...rest) => {rest*2}
    return [...arr,...double]
}

//answer: const doubleAndReturnArgs = (arr,...args) =>[...arr, ...args.map(v => v*2)]

const removeRandoms = (...ins) => ({newarray = ins.splice(math.random()*ins.length)})

//answer:
// const removeRandom = items => {
//      let idx=math.floor(math.random()*items.length);
//      return [...items.slice(0,idx), ...items.slice(idx+1)]}

const extend = (array1, array2) => { newarray =[...array1, ...array2]}

//answer: does not require curly braces

const addKeyVal = (obj,key,val) => {newobj={...obj,obj[key]=val}}

// //answer: close!
// const addKeyVal = (obj,key,val) => {
//     let newObj={...obj}
//     newObj[key]=val;
//     return newObj
// }

//const removeKey = (obj,key) => {}    spread obj, find key & index, splice index of key?
// //answer:
// const removeKey = (obj,key) => {
//     let newObj = {...obj}
//     delete newObj[key]
//     return newObj;
// }

const combine = (obj1,obj2) => {return{...obj1,...obj2}}

//answer:
//small modifications... didn't need newobj

const update = (obj,key,val) => {}//modifed key? so changing out a key/value? or changing the value of a key?
// const addKeyVal = (obj,key,val) => {
//     let newObj={...obj}
//     newObj[key]=val;
//     return newObj
// }