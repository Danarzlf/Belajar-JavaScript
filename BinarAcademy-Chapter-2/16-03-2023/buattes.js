// //DATA
// const ages = [32, 33, 16 , 40]

// // cara 1
// const result = ages.filter(checkAdult)

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(result);


// // cara 2
// let umur = ages.filter(function(age) {
//     // console.log(age);
//     return age >= 18
// })

// console.log(umur);


// // cara 3
// let arr = []

// for (let i = 0; i < ages.length; i++) {
//     // console.log(ages[i]);
//     if(ages[i] > 18) {
//         arr.push(ages[i])
//     }
// }

// console.log(arr);


console.log("============================================================================================================");

// //Function Sederhana
// function student(name , age , city) {
//     console.log(`halo nama saya ${name} , umur saya ${age} dan kota saya ${city} `);
// }
// student("NarrIzzy" , 20 , "Miami")
// student("Masvidal" , 20 , "Florida")
// student("Chaos" , 20 , "Boston")


// //Function Sederhana juga
// function studentData(name , age , city) {
//     return `halo nama saya ${name} , umur saya ${age} dan kota saya ${city} `
// }
// console.log(studentData("NarrIzzy" , 20 , "Miami"))






const person = [
    {
      "_id": "6410370d81bf660621074ab0",
      "age": 38,
      "eyeColor": "green",
      "name": "Walsh Juarez",
      "address": "Bali",
      "registered": "2022-09-07T02:39:25 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Farid",
          "isActive": false,
          "favoriteFruit": "strawberry",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "basketball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 1,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "apple",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "baseball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 2,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "strawberry",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "baseball"
            },
            {
              "id": 1,
              "hobby": "baseball"
            }
          ]
        }
      ]
    },
    {
      "_id": "6410370d6d2085e6d68532e0",
      "age": 33,
      "eyeColor": "brown",
      "name": "Andrews Winters",
      "address": "Jakarta",
      "registered": "2023-02-19T11:13:58 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Theresia",
          "isActive": true,
          "favoriteFruit": "apple",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "basketball"
            },
            {
              "id": 2,
              "hobby": "baseball"
            }
          ]
        },
        {
          "id": 1,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "apple",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "basketball"
            },
            {
              "id": 2,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 2,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "strawberry",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "baseball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        }
      ]
    },
    {
      "_id": "6410370d47961a96ce587b99",
      "age": 33,
      "eyeColor": "blue",
      "name": "Britney Bradford",
      "address": "Bandung",
      "registered": "2021-12-24T06:12:00 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Theresia",
          "isActive": true,
          "favoriteFruit": "banana",
          "gender": "female",
          "hobby": [
            {
              "id": 2,
              "hobby": "baseball"
            },
            {
              "id": 2,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 1,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "banana",
          "gender": "female",
          "hobby": [
            {
              "id": 1,
              "hobby": "basketball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        },
        {
          "id": 2,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "banana",
          "gender": "female",
          "hobby": [
            {
              "id": 2,
              "hobby": "basketball"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        }
      ]
    },
    {
      "_id": "6410370d1ade118454cf7e08",
      "age": 29,
      "eyeColor": "green",
      "name": "Higgins Petersen",
      "address": "Bandung",
      "registered": "2021-09-22T12:24:46 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Farid",
          "isActive": true,
          "favoriteFruit": "apple",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "baseball"
            },
            {
              "id": 1,
              "hobby": "basketball"
            }
          ]
        },
        {
          "id": 1,
          "name": "Farid",
          "isActive": false,
          "favoriteFruit": "banana",
          "gender": "male",
          "hobby": [
            {
              "id": 2,
              "hobby": "basketball"
            },
            {
              "id": 2,
              "hobby": "baseball"
            }
          ]
        },
        {
          "id": 2,
          "name": "Theresia",
          "isActive": false,
          "favoriteFruit": "banana",
          "gender": "male",
          "hobby": [
            {
              "id": 1,
              "hobby": "basketball"
            },
            {
              "id": 2,
              "hobby": "baseball"
            }
          ]
        }
      ]
    },
    {
      "_id": "6410370dbf15a4d38650c187",
      "age": 35,
      "eyeColor": "brown",
      "name": "Augusta Mathis",
      "address": "Bali",
      "registered": "2022-07-07T02:39:38 -07:00",
      "friends": [
        {
          "id": 0,
          "name": "Farid",
          "isActive": false,
          "favoriteFruit": "apple",
          "gender": "female",
          "hobby": [
            {
              "id": 1,
              "hobby": "football"
            },
            {
              "id": 2,
              "hobby": "basketball"
            }
          ]
        },
        {
          "id": 1,
          "name": "Theresia",
          "isActive": true,
          "favoriteFruit": "banana",
          "gender": "female",
          "hobby": [
            {
              "id": 2,
              "hobby": "baseball"
            },
            {
              "id": 2,
              "hobby": "baseball"
            }
          ]
        },
        {
          "id": 2,
          "name": "Farid",
          "isActive": true,
          "favoriteFruit": "apple",
          "gender": "female",
          "hobby": [
            {
              "id": 2,
              "hobby": "football"
            },
            {
              "id": 1,
              "hobby": "football"
            }
          ]
        }
      ]
    }
  ]




//Function 
function checkEyeColor(eyeColor) { 
    return eyeColor === "blue" 
} 
 
function chekcAddress(address) { 
    return address === "Bali" 
} 

function loopingData(data) { 
    let arr = [] 
    for (let i = 0; i < data.length; i++) { 
        if (checkEyeColor(data[i].eyeColor) && chekcAddress(data[i].address)) { 
            arr.push(data[i]) 
        } 
    }
    return arr
}

console.log(loopingData(person));



//Function 
function checkCondition(key, value) { 
    return key === value 
} 
 
function loopingData(data) { 
    let arr = [] 
    for (let i = 0; i < data.length; i++) { 
        if (checkCondition("blue", data[i].eyeColor) && checkCondition("Bali", data[i].address)) { 
            arr.push(data[i]) 
        } 
    } 
    return arr 
} 
 
console.log(loopingData(person));

