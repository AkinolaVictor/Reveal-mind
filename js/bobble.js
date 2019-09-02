let numc=[5,2,1,3,4,9,6];
function swap(one,two){
	var temp=one;
	one=two;
	two=temp;
}
function bobbleSort(arr){
	for(let i=0; i<=arr. length; i++){
		for(let j=arr.length-1; j>=0; j--){
			if (arr[i]>arr[j]){
				if(i<j){
					swap(arr[i],arr[j]);
				}
			}
		}
	}
}
bobbleSort(num);
