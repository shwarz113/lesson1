var num = 33721, numMulty = 3*3*7*2*1;
console.log(numMulty);
console.log(Math.pow(numMulty, 3));
var numExp = Math.pow(numMulty, 3);


var numStr = numExp.toString(), str1='';
for (var i = 0; i < 2; ++i) {
	str1 += numStr[i];
}
console.log(str1);
console.log(parseInt(str1, 10));