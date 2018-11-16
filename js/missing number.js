/*
	Given an array of integers, return a new array such that each element at index i of the new array is the product of all the
	numbers in the original array except the one at i.For example, if our input was [1, 2, 3, 4, 5], the expected output would
	be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6]. 
	Follow-up: what if you can't use division?
*/

//by using division
let nums=[5,4,-1,-3,8];

function firstMissing(arr){
let sarr=arr.sort(function(a,b){
	return a-b; 
});
let counter=0;
let work=[];
let missing;
for( let i=0; i<sarr.length; i++){
	if((sarr[i+1])!==(sarr[i]+1) && sarr[i]>=0){
		counter++;
		work.push(sarr[i]);
	}
	if(counter==1){
		missing=work[0]+1;
		//missing=arr[i]+1;
	}
}
console.log(missing);
}
firstMissing(nums);
