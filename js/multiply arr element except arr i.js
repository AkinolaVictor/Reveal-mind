let nums=[3,4,5,3,7];
function multiply(arr){
	/*
		The aim is achieved by division 
	*/
	let workSheet=[];
	let outPut=[];
	let mul=1;
	for (let i =0; i<arr.length; i++){
		mul=mul*arr[i];
	}	

	for (let j =0; j<arr.length; j++){
			workSheet.push(mul);
			outPut.push(workSheet[j]/arr[j]);
	}
	console.log(outPut);
}
multiply(nums);