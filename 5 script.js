//! Objects Examples: 

//! HOW TO DECLARED THE OBJECTS?
    
//2 ways

//(1)curly brackets{}            (2)using the new keyword(CONSTRUCTOR Method)

//const person ={                const person = new Object();
//name: "Rajini",                person.name  = "Rajini";
//age: 45,                       person.age   = 45;
//occupation: "actor"            person.occupation = "actor";
//}

//! HOW TO PRINT THE OBJECTS?
          
//2 ways

//(1)dot notation                    (2)square brackets
        
//console.log(person.name);          console.log(person["name"]);
      //Rajini                          // Rajini
//console.log(person.age);           console.log(person["age"]);
      //45                               // 45
//console.log(person.occupation);    console.log(person["occupation"]);
      //actor                            // actor


//! HOW TO MODIFYING(EDITING) THE OBJECTS?
    
//2 ways

//(1)dot notation                (2)square brackets

// const person ={                const person = new Object();
// name: "Rajini",                person.name  = "Rajini";
// age: 45,                       person.age   = 45;
// occupation: "actor"            person.occupation = "actor";
// }
// person.name= "Kamal",          person["age"]=60;
// console.log(person);           console.log(person);

//{name: "Kamal",age: 45,occupation: "actor"}      
//{name: "Kamal",age: 60,occupation: "actor"}  


//! HOW TO ADDING A NEW PROPERTY?

// const person ={name: "Kamal",age: 60,occupation: "actor"}  
// person.moviename= "ANBE SIVAM",          
// console.log(person);           

//{name: "Kamal",age: 60,occupation: "actor",moviename: "ANBE SIVAM"}     


//HOW TO DELETED AN ONE PROPERTY?

// const person ={name: "Kamal",age: 60,occupation: "actor",moviename: "ANBE SIVAM"}  

// delete person.moviename;          
// console.log(person);           

//{name: "Kamal",age: 60,occupation: "actor"}  

// *************************************************************************************************************************

//! JSON Object Example:

// const person={
//   name: "kamal",
//   age:60
// }
// console.log(person);   //{ name: 'kamal', age: 60 }

            //*****************************************************************

//! JSON Array Example:

// const fruits = ["apple","banana","orange"]
// console.log(fruits[1]);   //banana

            //*****************************************************************

//! JSON.parse() Example:
    
// const a = '{"name":"kamal","age":60}'; 
// console.log(a);           //{"name":"kamal","age":60} JSON string ஆக உள்ளது.
// var b = JSON.parse(a);
// console.log(b);           //{ name: 'kamal', age: 60 } Javascript Object ஆக மாறி வருகிறது.

            //*****************************************************************

//! JSON.stringify() Example:
       
// const c = {
//             name: "kamal",
//             age: 60
//           }
//           console.log(c)                 //{ name: 'kamal', age: 60} Javascript Object ஆக உள்ளது.
//           const d = JSON.stringify(c);
//           console.log(d);                //{"name":"kamal","age":60} JSON string ஆக மாறி வருகிறது.
       
            //***************************************************************** 
 
//! Nested JSON object Example:
           
// var person = {
//    "name":"kamal",
//    "age" :60,
//    "occupation":"actor",
//    "address": {
//          "city" : "Erode",
//          "pincode" : 638011
//          }
// }
// console.log(person);  //{ name: 'kamal',age: 60,occupation: 'actor',address: { city: 'Erode', pincode: 638011 } }
                         //JSON string ஐ Javascript Object ஆக மாற்றி தருகிறது.
           
// console.log(person.address.city); //Erode
           
            //***************************************************************** 

//! Nested JSON Array Example:

//var person = [
//         {
//             "name":"kamal",
//             "age":60
//         },
//         {
//             "name":"rajini",
//             "age":55
//         },
//         {
//             "name":"vijay",
//             "age":40
//         }
// ]
// console.log(person);         //[{…}, {…}]  ===> [ { name: 'kamal', age: 60 }, { name: 'rajini', age: 55 },{ name: 'vijay', age: 40 } ]
// console.log(person[0].name); //kamal
// console.log(person[1].age);  //55
// console.log(person[2].name); //vijay

// *************************************************************************************************************************

//! Array Destructuring Example:

// const arr = [1,2,3];
// const[a,b,c] = arr;
// console.log(a);    //1   
// console.log(b);    //2   
// console.log(c);    //3

// ===>console.log(arr[0])
//     console.log(arr[1])
//     console.log(arr[2])  
//           இவ்வாறு தருவதற்கு பதிலாக மேற்குறிப்பிட்டவாறு ஒரு variable ஐ declare செய்து அதன் மூலம் நம்மால் output வாங்க முடியும்.
//           இதற்கு Array Destructure என்று பெயர்.

// ===>const arr = ["1","2",3]; 
//     console.log(a);    //1   
//     console.log(b);    //2  
//     Arrayக்குள் இருக்கும் input ஒரு string ஆக இருந்தால் வரும் output ஆனது highlited ஆக வரும்.

// ===>const arr = [1,2,3];
//     const[a,b,c,d=4] = arr;
//     console.log(a);    //1   
//     console.log(b);    //2   
//     console.log(c);    //3
//     console.log(d);    //4 
//           இவ்வாறு variable ஐ declare செய்து அதற்கான valueயும் assign செய்து output ல் பெற முடியும்.

// ===>const arr = [1,2,3];
//     const[a,b,c=5,d=4] = arr;
//     console.log(a);    //1   
//     console.log(b);    //2   
//     console.log(c);    //3
//     console.log(d);    //4 

//     because c value already assigned in array.
//            புதிதாக ஒரு variable ஐ declare செய்து அதற்கான valueயும் assign செய்யலாம்.
//           ஆனால் already உள்ள variable ன் value ஐ மாற்ற முடியாது.

            //***************************************************************** 

//! Object Destructuring Example:

// const obj = {
//       name: "KHOLI",
//       age:35,
// }
                                        
// const {name,age}= obj;  // Syntax : const{key}=objectname                        
// console.log(name);      //KHOLI
// console.log(age);       //35
                
            //***************************************************************** 

//! Nested Object Destructuring 

//! Example1:                        
// const obj = {
// name: "KHOLI",
// age:35,
//  address:{
// city: "Erode",
// pin: 638011
//  }
//   }
                                    
//Nested Object Destructuring
                                
//  const {name,age,address:{city,pin}}= obj;    //Syntax : const{key}=objectname 
//   console.log(name);                           //KHOLI
//  console.log(age);                            //35
//  console.log(city);                           //Erode
//   console.log(pin);                            //638011
                                
       //*****************************************************************     

//! Example2:
                                
// const obj = {
// name: "KHOLI",
// address:{
// city: "Erode",
//  pin: 638011
//  }
//   }

// const {name,age=35,address:{city,pin}}= obj;    //Syntax : const{key}=objectname 
// console.log(name);                              //KHOLI
// console.log(age);                               //35
// console.log(city);                              //Erode
// console.log(pin);                              //638011

// *************************************************************************************************************************

//! Difference between with Destructuring & without Destructuring

//===>Example:
                                    
// const obj = {
// name: "KHOLI",
// age:35,
// address:{
//    city: "Erode",
//    pin: 638011
//    }
// }
                                    
// ===>Normal Object calling or without Destructuring
                                    
// console.log(obj.name);              //KHOLI
// console.log(obj.age);               //35          
// console.log(obj.address.city)       //Erode            
// console.log(obj.address.pin)        //638011        
                                    
// ===>with Destructuring
                                    
// const {name,age=35,address:{city,pin}}= obj;    //Syntax : const{key}=objectname 
// console.log(name);                              //KHOLI
// console.log(age);                               //35
// console.log(city);                              //Erode
// console.log(pin);                              //638011
                                    
// *************************************************************************************************************************