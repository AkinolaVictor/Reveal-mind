let word= "refer";
//check if every first n letter is the same as every arr.length-n letter
function palindrome(arrs){
	let k=0;
	let arr=arrs.split("");
	let j=arr.length-1;
	for(let i=0; i<arr.length; i++){
		if(arr[i]==arr[j-i]){
			k=arr.length;
			
		}
	}

	if(k==arr.length){
		console.log("yes, its a palindrome");
	}
}

palindrome(word);

// another way of doing this using while
function palindrome2(arrs){
	let i=0;
	let arr=arrs.split("");
	let x=arr.length-1;
	k=0;
	while(i<arr.length && x>=0){
		if(arr[i]==arr[x]){
			k=arr.length;
		}
		i++;
		x--;
		
	}
	if(k==arr.length){
		console.log("yes, its a palindrome");
	}
}
palindrome2(word);



//another way is this
//by passing each letter in the word from the back into an array, then later check if its the same
let arp="malayalam";
function palindrome3(arr){
	let theNew=[];
	const arrs=arr.split("");
	for(let i=0; i<arrs.length; i++){
		theNew.push(arrs[arrs.length-1-i]);
	}
	let now=theNew.join('');
	if(now==arr){
		console.log("yes, it is");
	}else {
		console.log("no, it isn't");
	}
}
palindrome3(arp);



