//extractValue
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
const names=[]
function extractValue(arr,name){
	names=arr.reduce(function(value){
		return arr.name
	})
}

//vowelCount

//addKeyAndValue

//partitionIsEven
function partition(arr,call)


//**ANSWERS**

//function extractValue(arr, key){
//    return arr.reduce(function(acc,next){
//        acc.push(next[key]);
//        return acc;
//    },[]);
//}

//function vowelCount(str){
//    const vowels = "aeiou";
//    return str.split('').reduce(function(acc,next){
//        let lowerCased = next.toLowerCase()
//        if(vowels.indexOf(lowerCased) !== -1){
//            if(acc[lowerCased]){
//                acc[lowerCased]++;
//            } else {
//                acc[lowerCased] = 1;
//            }
//        }
//        return acc;
//    }, {});
//}

//function addKeyAndValue(arr, key, value){
//    return arr.reduce(function(acc,next,idx){
//        acc[idx][key] = value;
//        return acc;
//    },arr);
//}

//function addKeyAndValue(arr, key, value){
//    return arr.reduce(function(acc,next,idx){
//        acc[idx][key] = value;
//        return acc;
//    },arr);
//}

//function partition(arr, cb){
//    return arr.reduce(function(acc,next){	
//        if(cb(next)){      				if (callback(value)) is true
//            acc[0].push(next);				push into first accumulator array
//        } else {					otherwise
//            acc[1].push(next);				push into second accumulator array
//        }
//        return acc;					return accumulator array
//    }, [[],[]]);				reduce accumulator array starting with 2 empty arrays 
//}
