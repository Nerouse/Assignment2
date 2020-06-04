//Nelson Lim
//Assignment 2
//Goal: To improve your understanding of JavaScript syntax, functions, and higher-order functions, and to better understand JavaScript and Array methods.

//for each
function myEach(arr, call){
	for(let i = 0; i < arr.length; i++){
		call(arr[i]);
	}
}
//Map
function myMap(arr, call){
	let tempArr = [];
	for(let i = 0; i < arr.length; i++){
		tempArr.push(call(arr[i]));
	}
	return tempArr;
}

//Filter
function myFilter(arr, call){
	let tempArr = [];
	for(let i = 0; i < arr.length; i++){
		if(call(arr[i])){
			tempArr.push(arr[i]);
		}
	}
	return tempArr;
}

//Some (Any)
function mySome(arr, call){
	let flip = false;
	for(let i = 0; i < arr.length; i++){
		if(call(arr[i])){
			flip = true;
			break;
		}
	}
	return flip;
}
//Every
function myEvery(arr, call){
	let flip = true;
	for(let i = 0; i < arr.length; i++){
		if(!call(arr[i])){
			flip = false;
			break;
		}
	}
	return flip;
}
//Reduce
function myReduce(arr, call){
	let final = 0;
	for(let i = 0; i < arr.length; i++){
		final += call(arr[i])
	}
	return final;
}

//Includes
function myIncludes(arr, value){
	let retvalue = false;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == value){
			retvalue = true;
			break;
		}
	}
	return retvalue;
}
//indexOf
function myIndexof(arr, val){
	let retvalue =let;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] == val){
			retvalue = i;
		}
	}
	return retvalue;
}
//Push
function myPush(arr, newElem){
	arr[arr.length] = newElem;
}
//lastIndexOf 
function myLastIndex(arr, val){
	let final = -1;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] == val){
			final = i;
		}
	}
	return final;
}

