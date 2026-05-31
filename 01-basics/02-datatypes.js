"use strict"; // treat all JS code as newer version

// alert("Hello World!"); we are using node,so alert is not defined but in browser it is defined

// console.log("3
//   +3") // code is not clean and readable, so we should avoid such things 

    console.log("tushar jangir");
    
    //datatypes in js
    let name = "tushar";    
    let age = 22;
    let isloggedin = true;


 //*--------premitive datatypes--Wo basic values jo directly memory mein store hoti hain — inhe tod nahi sakte----//*

    //string => text ko represent karta hai
    //number => 2 to power 53 
    //boolean => true or false
    //bigint => large integers ko represent karta hai, jo number datatype se bahar hote hain
    //null => empty value means no value with type
    //undefined => variable declare karne ke baad usme koi value assign nahi ki to wo undefined hota hai 
    //symbol => unique identifier ke liye use hota hai, mostly used in objects

    //non-primitive datatypes => objects

//note- //-- > typeof operator se hum kisi variable ke datatype ko check kar sakte hain
console.log(typeof age);
console.log(typeof name);
console.log(typeof isloggedin);
console.log(typeof null); // Note: typeof null returns "object" which is a known issue in JavaScript
console.log(typeof undefined);