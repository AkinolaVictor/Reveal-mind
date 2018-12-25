function generate(){
let arr=[];
for(let i=0; i<=100; i++){
	let num=Math.random()*100;
	let rand= Math.floor(num);
	arr[i]=rand; 
}
console. log(arr);
}
generate();