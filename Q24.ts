//Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array 
let Num1:Number=36;
let Num2:Number=49;

console.log('Testing Number equality, Number 36,49', Num1==Num2);
console.log('Testing Number inequality, Number 36,49', Num1!==Num2);

console.log('Testing Number Greater then, Number 36,49', Num1>Num2);
console.log('Testing Number Less Then, Number 36,49', Num1!<Num2);

console.log('Testing Number Greater then or equail to, Number 36,49', Num1>=Num2);
console.log('Testing Number Less Then or equail, Number 36,49', Num1<=Num2);

//Tests using "and" and "or" operators
console.log('\nTests using "and" and "or" operators\n');
console.log('Testing Number and opertor, Number 36,49', (Num1>Num2) && (Num1<Num2));
console.log('Testing Number or opertor, Number 36,49', (Num1>Num2) || (Num1<Num2));

console.log("\nTest whether an item is in a array\n");

let furiteArry=['Apple','Mongo','Grape','Pineapple'];
let bol1:boolean=false
if (furiteArry.indexOf("Banana")==-1){
   bol1=false;
}
console.log('Find Banana in Furite list', bol1)
if (furiteArry.indexOf("Mongo")>0){
    bol1=true;
}
console.log('Find Mongo in Furite list', bol1);