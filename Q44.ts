//Q44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
let order1=["cheezesandwich","beefsandwich","mushroomsandwich"]
let order2=["sweetsandwich","spicysandwich"]


function sandwich(item:any){ 
    for(let i=0;i<order1.length;i++)
    console.log(order1[i])
for(let i=0;i<order2.length;i++){ 
console.log(order2[i])

}
}
sandwich(order1);
sandwich(order2);


