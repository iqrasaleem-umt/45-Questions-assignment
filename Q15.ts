const GuestList=['arooj',"fahad","iram"];


//modify your list by replacing and adding


GuestList.pop();
console.log(GuestList);

const modifyGuestList=["arooj","fahad"];
modifyGuestList.push("ghazala");
console.log(modifyGuestList);
let newGuestList=["arooj","fahad","ghazala"]; 



for(let i=0;i<newGuestList.length;i++){ 
    console.log(`dear ${newGuestList[i]}   you are invited for dinner`); 
}
const oldGuestList=["arooj","fahad"];

for(let j=0;j<oldGuestList.length;j++){ 
    console.log(`iram is not coming at dinner ${GuestList[j]}`)
}
