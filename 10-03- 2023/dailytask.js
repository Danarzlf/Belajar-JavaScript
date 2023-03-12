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

//   1) print person yang suka buah apple dan warna mata nya biru
console.log("-------------------------------1.) person yang suka buah apple dan warna mata nya biru-----------------------------");

for(let i = 0; i < person.length; i++){
    if (person[i].favoriteFruit === "apple" && person[i].eyeColor === "blue"){
        console.table(person[i])
    }
}


// 2) print berapa person yang age nya diatas 30
console.log("-----------------------------------2.) person yang age nya diatas 30---------------------------------------");

for(let i = 0; i < person.length; i++){
    if (person[i].age > 30){
        console.table(person[i])
    }
}



// 3) print person yang isActive true and  gender nya female
console.log("------------------------------------------3.) person yang isActive true and  gender nya female-------------------------------");

for(let i = 0; i < person.length; i++){
    if (person[i].isActive === true  ){
        console.table(person[i])
    }
}


// 4) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue
console.log("----------------------------4.) print yang age nya diatas 30 atau dibawah 25 dan eyeColor nya blue---------------------------------------");

for(let i = 0; i < person.length; i++){
    if ((person[i].age > 30 || person[i].age < 25) && person[i].eyeColor === "blue" ){
        console.table(person[i])
    }
}


// 5) print person yang mengandung huruf W di name nya
console.log("------------------------------------------5.) print person yang mengandung huruf W di name nya ----------------------------------------------"); 

for(let i = 0; i < person.length; i++){
    if (person[i].name.includes('W')){
        console.table(person[i])
    }
}


// 6) print person isActive false dan gender nya male dan age nya diatas 25 
console.log("--------------------------------------------------6.) print person isActive false dan gender nya male dan age nya diatas 25 -----------------------------------");

for(let i = 0; i < person.length; i++){
    if (person[i].isActive === false && person[i].gender === "male" && person[i].age > 25 ){
        console.table(person[i])
    }
}


// 7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana 
console.log("------------------------------------7) print person age nya dibawah 30 atau eyeColor brown dan favoritFruit nya banana --------------------------------------");

for(let i = 0; i < person.length; i++){
    if ((person[i].age < 30 || person[i].eyeColor === "brown") && person[i].favoriteFruit === "banana" ){
        console.table(person[i])
    }
}


// 8) print person gender male
console.log("-----------------------------------------------------8) print person gender male-----------------------------------------------");

for(let i = 0; i < person.length; i++){
    if (person[i].gender === "male" ){
        console.table(person[i])
    }
}



// 9) print person eyeColor Blue
console.log("------------------------------------------------------9) print person eyeColor Blue--------------------------------------------------");

for(let i = 0; i < person.length; i++){
    if (person[i].eyeColor === "blue" ){
        console.table(person[i])
    }
}



// 10) print person age diatas 30
console.log("---------------------------------------------------------10) print person age diatas 30------------------------------------------");

for(let i = 0; i < person.length; i++){
    if (person[i].age > 30 ){
        console.table(person[i])
    }
}