//hasOddNumber
function hasOddNumber(arr){
  return arr.some(function(value){
    return (value %2 !== 0);
    })
  }
  
//hasAZero
function hasAZero(arr){
  return arr.toString().split('').some(function(value){
    return value === '0';
    })
  }

//hasOnlyOddNumbers
function hasOnlyOddNumbers(arr){
  return arr.every(function(value){
    return value %2 !== 0;
    })
  }

//hasNoDuplicates
function hasNoDuplicates(arr){
  return arr.every(function(value){
    for (values of arr){
      return value !==values;
      }
    })
  }

//NoDupes Corrected
function hasNoDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val)
    //checks index of value vs the index of the last found value in string
  })
}

//hasCertainKey
function hasCertainKey(arr,key){
  return arr.every(function (value){
    return key in value
  })
}

//hasCertainValue
function hasCertainValue(arr,key,search){
  return arr.every(function (value){
    return val[key] === search 
    //looks at *key* for associated *value*, compares to *search*
  })
}
