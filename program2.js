// console.log(process.argv)
var i = 2;
var sum = 0;
while(process.argv.length != i) {
   sum += +process.argv[i++];
}

console.log(sum);
