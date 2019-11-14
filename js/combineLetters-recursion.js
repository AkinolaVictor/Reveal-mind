function rps(rounds){
// just for commit
	let results=[],
		possibilities=['r', 'p','s'];

	function play(played, rounds){
		if (rounds === 0){
			results.push(played);
			return;
		}
		for(var i=0; i<3; i++){
			play(played+possibilities[i], rounds-1);
		}
	}

	play('', rounds);
	return results;
}

rps(2);
