//Q21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let items = [
    { model: "oppo", features: "Good Camera", price: 27000 },
    { model: "Samsung", features: "Amoled Display", price: 50000 },
    {
      model: "Iphone",
      features: "Camera and Expensive Price",
      price: 150000,
    },
  ];
  for (let i = 0; i < items.length; i++) {
    console.log(
      `model ${items[i].model} features ${items[i].features} price ${items[i].price} `
    );
  }
  let item1=[ 
    {model1:"oppo" ,
    feature: "good camera",
    price:"27ooo",
},
{ model2:"samsung",
feature:"good display",
price:"3000",
}
  ]  

  for(let i=0;i<item1.length;i++){ 
    console.log(`model ${item1[i].model1 } feature ${item1[i].feature} price ${item1[i].feature}`)
  }
