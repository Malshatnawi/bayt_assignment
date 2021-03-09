//This file is linked to the index.html for testing reasons




//First question

function all(arr, callback) {
    for( var i=0; i< arr.length; i++){
    
        if(callback(arr[i])){
        return false;
      }
    
    }
    return true;
  }
  
  
  var lessThanSeven = all ([3,1,2,4], function (param){
  
      return param >= 7
  
  });
  
  console.log(lessThanSeven);



  

  

// Second question
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    },   
                }
            }
        }
    }
}


function contains(object, goalValue){
	for(var key in object){
        var initValue = object[key];
		if(typeof initValue === 'object'){
			return contains(initValue, goalValue);
		}

		if (initValue === goalValue){
			return true;
		}
	}
	return false;
}

let isExist = contains(nestedObject, 'foo2'); 
console.log(isExist);
