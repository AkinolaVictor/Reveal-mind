let val=[];
function gen(){
	let num;
	for(let i=0; i<10; i++){
		num=Math.trunc(Math.random()*10);
		if(i%2==0){
			val[i]=(1-2)*num
		}else{
		val[i]=num;
		}
	}
	return val; 
	//console.log(val);
	
}
//gen();
function subarr(){
	gen();
	console.log(val);
	let test=0,take=0,cur,vals=[];
	for(let i=0; i<val.length; i++){
		cur=val[i];
		test=test+cur;
		if(test>take){
			take=test;
			vals.push(cur);
		}else{
			//take=0;
		}
		
		if(test<0){
			test=0;
		}else{
			//test=test+cur; to know what is to be
			//vals.push(cur);
		}
	}
	console.log(take, vals)
	
}
subarr();




