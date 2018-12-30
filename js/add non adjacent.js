let nums=[5,6,7,9,2,7];
function add(par){
	let high=0,next=0,p,q;
	let prev=par[p-1];
	let afta=par[p+1];
	for (i=0; i<par.length; i++){
		
		let cur=par[i];
		if(par[i]>high){
			high=par[i];
			p=i;
		}
	}
	
	for(j=0; j<par.length; j++){
		 let cur=par[j];
		 if ((cur>next)&&!(j==p || j==p+1 || j==p-1)){
		 	next=cur;
		 }
	}
	
	let add=high+next;
	console.log(add);
}
add(nums);
