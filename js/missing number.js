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
