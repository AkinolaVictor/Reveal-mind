function sortfaster(arr){
	let min = arr[0],cur;
	for(let i=0; i<arr.length; i++){
		cur=arr[i];
		if (cur<min){
			min=cur;
		}
	}
	console. log(min);
	
}
let num=[5,2,1,3,4,9];
sortfaster(num);
