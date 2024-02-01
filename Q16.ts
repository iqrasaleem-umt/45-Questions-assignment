
let guestList=['arroj','fahad',"ghazala"];
guestList.unshift("irha");
console.log(guestList);

let guestList1=["irha","arooj","fahad","ghazala"];
guestList1.splice(2,0,"minal");
console.log(guestList1);

let guestList2=['irha',"arooj",'minal',"fahad","ghazala"];
guestList2.push("eman");
console.log(guestList2);

let guestlist3=["irha","arooj","minal",'fahad',"ghazala","eman"];
for(let i=0;i<guestlist3.length;i++){ 
    console.log(`you guy ${guestlist3[i]} also invited for tonight dinner`)
}
for(let i=0;i<guestList.length;i++){ 
    console.log(`i found a bigger dinning table ${guestList[i]} so i invite more three guest`)
}