let counter=0,deci=0,it;
let div=(num, by)=>{
	let  save,dec;
	save=num;
	save=save-by;
	counter=counter+1;
	
	
	if(save<by && save !=0){
	  dec=save*10;
	}else{
		if(save<by){
			console. log(counter+"."+0);
		}
	}
	
	while(save<by && dec>by){
		dec=dec-by;
		deci++;
	}
	
	
	
	if (num<by){
		return 0;
	}else{
		//counter=counter+1;
		div(save,by);
	}
	
	
	if(save<by && deci !=0){
		let valu=counter+"."+deci; 
	  console.log(valu-1);
	}
	
}
//console. log(it);

div(18945908,4112);
