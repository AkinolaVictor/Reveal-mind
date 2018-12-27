const subs = s=>{
	// set open and closing parentheses 
	const op="(",cl=")";
	// set counter
	let counter=0;
	//loop through string
	for(i=0; i<s.length; i++){
		if(s[i]==op && s[i+1]==cl)
		counter=counter+2;
	}
	console. log(counter);
}
let m="(())()()))()(())";
subs(m);