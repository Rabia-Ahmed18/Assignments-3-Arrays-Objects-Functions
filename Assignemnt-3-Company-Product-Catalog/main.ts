/*
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name, 
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the 
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand 
how to manage product data.*/


const inventory:{
    name:string;
    model:string;
    cost:number;
    quantity:number;
} []=[];

const product1={
    name:"HeadPhone",
    model:"Ronin",
    cost:8000,
    quantity:50,
};

const product2={
    name:"SmartPhone",
    model:"Huawei",
    cost:35000,
    quantity:25,
};

const product3={
    name:"LED",
    model:"Samsung",
    cost:45000,
    quantity:15,
};

inventory.push(product1,product2,product3);
// calling here the quantity of product 2
console.log(`The quantity of ${inventory[2].name} is ${inventory[2].quantity}`);

// exploring more -------------

const newProduct ={
    name: "Laptop",
    model :"Dell",
    cost:65000,
    quantity:70,
};

inventory.push(newProduct);
console.log(`The cost of ${inventory[3].name} is ${inventory[3].cost}`);

const newProduct2 ={
    name: "EarBuds",
    model: "Ronin", 
    cost :4500,
    quantity:150,
};

inventory.push(newProduct2);
console.log(`The price of ${inventory[4].name} is ${inventory[4].cost}`);