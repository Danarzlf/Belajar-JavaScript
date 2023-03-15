const person = [
    
    {
      "_id": "640b3d98dddf80a942fe2608",
      "isActive": false,
      "age": 34,
      "eyeColor": "blue",
      "name": "Webster Romero",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d98abc5209f4f502d2d",
      "isActive": true,
      "age": 26,
      "eyeColor": "blue",
      "name": "Greer Webster",
      "gender": "male",
      "favoriteFruit": "apple"
    },
    {
      "_id": "640b3d98d208eb85cbe6ad06",
      "isActive": true,
      "age": 26,
      "eyeColor": "brown",
      "name": "Angel Gordon",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d988df5e70d2845266c",
      "isActive": true,
      "age": 38,
      "eyeColor": "blue",
      "name": "Evans Henry",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d989f809a4e34cfe446",
      "isActive": false,
      "age": 40,
      "eyeColor": "blue",
      "name": "Eliza Barnes",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d989c22d40377b2fb9f",
      "isActive": false,
      "age": 22,
      "eyeColor": "brown",
      "name": "Ada Lambert",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d98f96a759c7204cbf0",
      "isActive": true,
      "age": 22,
      "eyeColor": "brown",
      "name": "Kristy Blackburn",
      "gender": "female",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d98de0b15c4387baa02",
      "isActive": false,
      "age": 34,
      "eyeColor": "brown",
      "name": "Katina Barnett",
      "gender": "female",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "640b3d9890fc1131997c18a1",
      "isActive": false,
      "age": 31,
      "eyeColor": "brown",
      "name": "Blevins Little",
      "gender": "male",
      "favoriteFruit": "banana"
    },
    {
      "_id": "640b3d988646656f94121f20",
      "isActive": false,
      "age": 27,
      "eyeColor": "blue",
      "name": "Yvette Marks",
      "gender": "female",
      "favoriteFruit": "apple"
    }
  ]

// 1) print person yang suka buah apple dan warna mata nya biru
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr=[]

for(let i = 0; i < person.length; i++) {
    if(person[i].favoriteFruit === "apple" && person[i].eyeColor === "blue") {
        arr.push(person[i])
    }
}
console.log("No.1 person yang suka makan buah apple dan warna nya mata biru ada =" + arr.length);
console.table(arr);






// 2) print berapa person yang age nya diatas 30
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr2=[]

for (let i = 0; i < person.length; i++) {
    if (person[i].age > 30) {
        arr2.push(person[i])
    }
}
console.log("No.2 person yang age nya diatas 30 ada = " + arr2.length);
console.table(arr2);






// 3) print person yang isActive true and  gender nya female
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr3=[]

for (let i=0 ; i < person.length; i++) {
    if (person[i].isActive === true && person[i].gender === "female") {
    arr3.push(person[i])        
    }
}
console.log("No.3person yang isActive true  dan gender nya female ada = " + arr3.length);
console.table(arr3);






// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr4=[]
for (let i = 0; i < person.length; i++) {
    if ((person[i].age > 30 || person[i].age < 25) && person[i].eyeColor === "blue") {
        arr4.push(person[i])
    }
}
console.log("No.4 person yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue ada = " + arr4.length);
console.table(arr4);






// 5) print person yang mengandung huruf W di name nya 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr5=[]
for (let i = 0; i < person.length; i++) {
    if (person[i].name.includes('W')){
        arr5.push(person[i])
    }
}
console.log("No.5 person yang mengandung huruf W di name nya = " + arr5.length);
console.table(arr5);






// 6) print person isActive false dan gender nya male dan age nya diatas 25 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr6=[]
for (let i = 0; i < person.length; i++) {
    if (person[i].isActive === false && person[i].gender === "male" && person[i].age > 25 ){
        arr6.push(person[i])
    }
}
console.log("No.6 person isActive false dan gender nya male dan age nya diatas 25  = " + arr6.length);
console.table(arr6);






// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr7=[]
for(let i = 0; i < person.length; i++){
    if ((person[i].age < 30 || person[i].eyeColor === "brown") && person[i].favoriteFruit === "banana" ){
        arr7.push(person[i])
    }
}
console.log("No.7 person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana ada = " + arr7.length);
console.table(arr7);






// 8) print person gender male 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 8~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr8=[]
for(let i = 0; i < person.length; i++){
    if (person[i].gender === "male" ){
        arr8.push(person[i])
    }
}
console.log("No.8 person gender male  ada = " + arr8.length);
console.table(arr8);







// 9) print person eyeColor Blue 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 9~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr9=[]
for(let i = 0; i < person.length; i++){
    if (person[i].eyeColor === "blue" ){
        arr9.push(person[i])
    }
}
console.log("No.9 person eyeColor Blue  ada = " + arr9.length);
console.table(arr9);







// 10) print person age diatas 30
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NOMOR 10~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
let arr10=[]
for(let i = 0; i < person.length; i++){
    if (person[i].age > 30 ){
        arr10.push(person[i])
    }
}
console.log("No.10 print person age diatas 30 ada = " + arr10.length);
console.table(arr10);

