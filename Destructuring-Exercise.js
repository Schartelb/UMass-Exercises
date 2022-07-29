//1. console.log(numPlanets) = 8
//   console.log(yearNeptuneDiscovered) = 1846

//2. console.log(discoveryYears) = yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

//3. Your name is Alejandro and you like purple
//    Your name is Melissa and you like green
//    Your name is undefined and you like green

//4. Maya
//  Marisa
//  Chi

//5. 'raindrops on roses'
//    'whiskers on kittens'
//    'Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings'

//6. 20,10,30
//answer: index starts at 0, don't forget!

//7. var = obj { numbers:{a:1, b:2}}
//answer:
// const obj = {
//  numbers: {
//    a: 1,
//    b: 2
//  }
//}
//const {a,b}=obj.numbers
//close, it seems that they were only looking for a correction for the bottom var assignments, beyond swapping to the const declaration overall

//8. [2,1]=[1,2]
// [[arr[0],arr[1]] = [[arr[1],arr[0]]
// need to use the array to swap the array indexes 

//9. raceResults()
const raceResults = (arr) => {[{first,second,third,...rest}]}
// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
// while taking in array, they're declaring the variables for [0],[1],[2] and [rest].  using the curly braces allows for an object to be the output
