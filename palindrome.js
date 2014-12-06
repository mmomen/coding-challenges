var palindromeFn = function(a){
	word = a.toLowerCase();
	for (i=0,x=word.length-1;i<word.length;i++,x--){
		if (word[i] == word[x]){
			console.log(word[i] + ' is ' + word[x]);//make it count
		} else {
			console.log(word[i] + ' is not ' + word[x]);//make it count
		}
	}
	//if 2nd count > 0 fail
};
palindromeFn('Civic');

/*
split into array, reverse, join - simplist method

capital letters - lower case
puncuation - regex
spaces
*/