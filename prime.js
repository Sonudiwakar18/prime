function identityPrime(num){
let count=0
for(let i=1;i<num;i++){
if(num%i==0){
count++
}
}
if(count==2){
console.log("yes")
}
else{
console,log("No")}
}

identifyPrime(57)
