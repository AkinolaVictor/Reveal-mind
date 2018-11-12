//THIS IS THE QUESTION
/*
	This problem was asked by Uber.

	Given an array of integers, return a new array such that each element at index i of the new array is the product of all the
	numbers in the original array except the one at i.

	For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1],
	the expected output would be [2, 3, 6].

	Follow-up: what if you can't use division?
*/


let nums=[3,4,5,3,7];
function multiply(arr){
	/*
		Here, the output is achieved by division.
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
