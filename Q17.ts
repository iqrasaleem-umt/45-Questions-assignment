
let guestlist4=["irha","arooj","minal",'fahad',"ghazala","eman"];
for(let i=0;i<guestlist4.length;i++){ 
    console.log(`i am inviting only two people ${guestlist4[i]}`)
}
guestlist4.pop();
console.log(guestlist4);
console.log(`sorry ${"eman"} i cannot invite you to dinner`);

let guestlist5=["irha","arooj","minal","fahad","ghazala"];
guestlist5.pop();
console.log(guestlist5);
console.log(`sorry ${"ghazala"} i cannot invite you to dinner`);

let guestlist6=["irha","arooj","minal","fahad"];
guestlist6.pop();
console.log(guestlist6);
console.log(`sorry ${"fahad"} i cannot invite you to dinner`);

let guestlist7=["irha","arooj","minal"];
guestlist7.pop();
console.log(guestlist7);
console.log(`sorry ${"minal"} i cannot invite you to dinner`);

let guestlist8=["irha","arooj"];
for(let i=0;i<guestlist8.length;i++){ 
    console.log(`you are still invited  ${guestlist8[i]}`)
}
guestlist8.pop();
console.log(guestlist8);

let guestlist9=["irha"];
guestlist9.pop();
console.log(guestlist9);

console.log('empty list');