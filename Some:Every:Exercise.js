//hasOddNumber
function hasOddNumber(arr){
  return arr.some(function(value){
    return (value %2 != 0);
    })
  }
  
//hasAZero
function hasAZero(arr){
  return arr.split('').some(function(value){
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

//hasCertainKey
function hasCertainKey(arr){
  return arr.every(function (value,key){
    return value.isCatOwner
  })
}

//hasCertainValue
function hasCertainValue(arr){
  return arr.every(function (key,value){
    return key == value
  })
}
