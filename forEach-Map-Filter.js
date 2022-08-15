//doubleValues
function doubleValues(arr){
	arr.forEach(function(value){
		value=value*2;
	})
}
//did not create new array for values
/*function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    newArr.push(val * 2);
  });
  return newArr;
}*/

//onlyEvenValues
function onlyEvenValues(arr){
	arr.forEach(function(value){
		if(value %2==0){
			return value}
		}
	)
}
//did not create new array for values
/*function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}*/

//showFirstandLast
function showFirstandLast(arr){
	arr.forEach(function(string){
	const string=string.split("")
	const len=string.length
	string=string[0]+=string[len]
	return string;
		}
	)
}
//didn't need to split string.  forEach does that for us.  
/*function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}*/


//addKeyAndValue
function addKeyAndValue(arr,key,value){
	arr.forEach(function(name){
	return name+=key+=value;
	})
}
//not sure what I thought this would accomplish here
/*function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val) {			for each arr val, 
    val[key] = value;					assign the value given to key given
  });
  return arr;
}*/

//vowelCount
	function vowelCount(arr){}
//I'm terrible with vowel assignments
/*function vowelCount(str) {
  let splitArr = str.split("");
  let obj = {};
  const vowels = "aeiou";

  splitArr.forEach(function(letter) {                value in function for forEach is what is being iterated across
    let lowerCasedLetter = letter.toLowerCase()
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;*/

//doubleValuesWithMap
function doubleValuesWithMap(arr){
	arr.map(function(value){
	return value*2
	})
}

//valTimesIndex
function valTimesIndex(arr){
	arr.map(function(val,index){
	return val*index;
	})
}

//extractKey
function extractKey(arr,key){
	arr.map(function(val){
		return val.key;
	})
}

//extractFullName
function extractFullName(arr,first,last){
	arr.map(function(val){
		return val.first+=val.last;
	})
}

//filterByValue
function filterByValue(arr,key){
	arr.filter(function(arr){
		return arr.key;
	})
}

//find
function find(arr,value){
	arr.filter(function(arr){
		if(arr==value){
		return arr}
	})
}

//findInObj
function findInObj(arr,key,value){
	arr.forEach((key,value){
		if(arr.key==value){
		return arr}
	})
}

//removeVowels
function removeVowels(string){
	return Array.from(string)
				.filter(()=>{'aeiou'.indexOf==-1})
}


//doubleOddNumbers

function doubleOddNumbers(array){
	const doubled=array.map((a)=>{
		a*2
	})
	doubled.filter(()=>{
		doubled%2==0
	} 
	)
}

