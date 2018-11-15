//find the probability of watching 
//the highest scoring match. 
let goals=[1,2,3,1,2,2,2];
function matchProb(arr){
let totalMatches=arr.length*(arr. length-1);
arr.sort(function(a,b){return b-a;});
let highestGoal=arr[0];
let next=0, nextVal,prob,high;
let counter=1; 
let nextCounter=0; 
for(let i=0; i<arr.length; i++){
	if(arr[i]==highestGoal && i!==0){
		counter++;
	}
	if(arr[i]<arr[0] && arr[i]>next){
		next=arr[i];
		nextVal=i;
	}
	if(arr[i]==next){
		nextCounter++;
	}
}
if (counter==1&&nextCounter==1){
 prob=(counter/totalMatches).toFixed(3);
}else if(counter>1){
	prob=(counter/totalMatches).toFixed(3);
}else if(counter==1&&nextCounter>1){
	prob=(nextCounter/totalMatches).toFixed(3);
}
console.log(prob);
}
matchProb(goals);
