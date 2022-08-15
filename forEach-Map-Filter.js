//doubleValues
function doubleValues(arr){
	arr.forEach(function(value){
		value=value*2;
	})
}

//onlyEvenValues
function onlyEvenValues(arr){
	arr.forEach(function(value){
		if(value %2==0){
			return value}
		}
	)
}

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

//addKeyAndValue
function addKeyAndValue(arr,key,value){
	arr.forEach(function(name){
	return name+=key+=value;
	})
}

//vowelCount
	function vowelCount(arr){}


//doubleValuesWithMap
function doubleValuesWithMap(arr){
	arr.map(function(value){
	return value*2
	})
}

//valTimesIndex
function valTimesIndex(arr,index){
	val.map(function(val){
	return val*index;
	})
}

//extractKey
function extractKey(arr,key){
	arr.map(function(arr){
		return arr.key;
	})
}

//extractFullName
function extractFullName(arr,first,last){
	arr.map(function(arr){
		return arr.first+=arr.last;
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

