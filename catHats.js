// 0=on hat, 1=hat
var cats = [0,0,0,0,0,0,0,0,0,0];
var fnCatHat = function(index) {
	//cats[index] = !cats[index] http://learn.makersquare.com/courses/challenge_exercises/solutions/ncats_solution_javascript.lmd
	if (cats[index] === 0) {
		console.log('Cat number ' + index + ' does not where a hat. You will GIVE the cat yours.');
		cats[index] = 1;
	} else if (cats[index] === 1) {
		console.log('Cat number ' + index + ' does where a hat. You will TAKE the cat\'s hat');
		cats[index] = 0;
	}
};
for (var i=0;i<cats.length;i++) {
	for (var j=i-1;i<cats.length;j+i) {
		fnCatHat(one);
	}
}


/*0\3\6\9
1\4\7\10
2\5\8\11*/

	// console.log('BEFORE: ' + cats);
	// for (var i=0;i<cats.length;i++) {
	// 	fnCatHat(i);
	// }
	// console.log('AFTER: ' + cats);
	// for (var i=0;i<cats.length;i+=2) {
	// 	fnCatHat(i);
	// }
	// console.log('AFTER-2: ' + cats);
	// for (var i=0;i<cats.length;i+=3) {
	// 	fnCatHat(i);
	// }
	// console.log('AFTER-3: ' + cats);