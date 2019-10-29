let i ;
var arrayPares= [];
var arrayImpares=[];
for (i=0; i<50;i++){
  let a = Math.floor((Math.random() * 100) + 1);
  if (a%2===0) {
    arrayPares.push(a)
  }
else {arrayImpares.push(a)} }
console.log(arrayImpares);
console.log(arrayPares);