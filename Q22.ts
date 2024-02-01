//Q21.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let dishesarray=["biryani",'mutton pulao',"masala fish"];
for (let i=0;i<5;i++){ 
    console.log(dishesarray[i]);
}
//resolving error
for (let i=0;i<dishesarray.length;i++){ 
console.log(dishesarray[i])
}
