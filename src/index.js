module.exports = function reverse (n) {
let reversedString;
if (n>0){
    reversedString = String(n).split('').reverse().join('');
}  else{
    reversedString = String(n).slice(1).split('').reverse().join('');
}
return Number (reversedString);
}

