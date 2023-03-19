const result = [
    {
      "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
      "plate": "DBH-3491",
      "transmission": "Automatic",
      "manufacture": "Ford",
      "model": "F150",
      "available": true,
      "type": "Sedan",
      "year": 2022,
      "options": [
        "Cruise Control",
        "Tinted Glass",
        "Tinted Glass",
        "Tinted Glass",
        "AM/FM Stereo"
      ],
      "specs": [
        "Brake assist",
        "Leather-wrapped shift knob",
        "Glove box lamp",
        "Air conditioning w/in-cabin microfilter",
        "Body color folding remote-controlled pwr mirrors",
        "Dual-stage front airbags w/occupant classification system"
      ]
    },
    {
      "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
      "plate": "WXB-3984",
      "transmission": "Automatic",
      "manufacture": "BMW",
      "model": "X5",
      "available": false,
      "type": "Convertible",
      "year": 2019,
      "options": [
        "Keyless Entry",
        "Power Windows",
        "MP3 (Single Disc)",
        "CD (Multi Disc)",
        "Navigation"
      ],
      "specs": [
        "Rear passenger map pockets",
        "Electrochromic rearview mirror",
        "Dual chrome exhaust tips",
        "Locking glove box",
        "Pwr front vented disc/rear drum brakes"
      ]
    },
    {
      "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
      "plate": "OSL-4224",
      "transmission": "Automanual",
      "manufacture": "Lincoln",
      "model": "MKZ",
      "available": true,
      "type": "Sedan",
      "year": 2021,
      "options": [
        "Bucket Seats",
        "Airbag: Passenger",
        "Airbag: Driver",
        "Power Seats",
        "Airbag: Side",
        "Antilock Brakes",
        "CD (Multi Disc)"
      ],
      "specs": [
        "Driver & front passenger map pockets",
        "Direct-type tire pressure monitor system",
        "Cargo area lamp",
        "Glove box lamp",
        "Silver finish interior door handles",
        "Driver & front passenger advanced multistage airbags w/occupant sensors",
        "Silver accent IP trim finisher -inc: silver shifter finisher",
        "Fasten seat belt warning light/chime"
      ]
    }
  ]

 
    // // Tulis code-mu disini
    // for (let i = 0; i < result.length; i++) {
    //   for (let j = 0; j < result.length - 1; j++) {
    //     if (result[j].year > result[j + 1].year) {
    //       let temp = result[j];
    //       result[j] = result[j + 1];
    //       result[j + 1] = temp;
    //     }
    //   }
    // }
  

    //membuat bintang sejajar / kebawah
    // let s = ''

    // for (let i = 0; i < 10; i++) {
    //     s += '*'
    //     s += '\n'
    // }
    // console.log(s);


    // membuat 10 baris dengan per baris bintang 5
    let s = ''

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j <= i; j++) {
            s += '*'
        }
            s += '\n'
    }
    console.log(s);


    //kebaliknya
    let e = ''

    for(let i = 10; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            e += '*'
        }
            e += '\n'
    }
    console.log(e);






    // const friendsTheresia = person.filter(p => 
//     p.friends.some(f => f.name === 'Theresia')
// );



// 8) display hobby id 1 dari friends yang isActive nya true
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 8.) display hobby id 1 dari friends yang isActive nya true ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`");



// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`");
// let brownBanana = person.filter(function (k5) {
//     return k5.eyeColor.find === "Brown" (function(p5) {
//         return p5.friends.find === "Banana" (function(l5) {
//             return l5.hobby === "basketball"
//         })
//     })
// })
// console.table(brownBanana);




// 10) display person yang mempunyai friends gender male atau favorite fruit nya banana dan registered di tahun 2023
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`");
// let maleBanana = person.filter(function (k2) {
//     return k2.friends.find(function(p2) {
//         return p2.gender === "male" (function(l2) {
//             return l2.favoriteFruit === "banana" && parseInt(e.registered.substring(0, 4)) < 2022
//         })
//     })
// })
// console.table(maleBanana);













// // aasdasdasd
// //  aa
// 1) display / print person yang registered dibawah tahun 2022
// console.log('--------- 1.')
// console.log(data.find(e => {
//         return parseInt(e.registered.substring(0, 4)) < 2022
//     }))
//     // 2) display person yang address nya Bali
// console.log('--------- 2.')
// console.log(data.find(e => {
//         return e.address === 'Bali'
//     }))
//     // 3) display friends yang hobby nya football
// console.log('--------- 3.')
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].friends.length; j++) {
//         for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
//             if (data[i].friends[j].hobby[k].hobby === 'football') {
//                 console.log(data[i].friends[j])
//             }
//         }
//     }
// }

// console.log(
//         // data.map(e => {
//         //     return e.friends.map(ex => {
//         //         return ex
//         //     })

//         // })


//     )
//     // 4) display hobby dari friends id 2
// console.log('--------- 4.')
// console.log(
//         data.map((x) => {
//             return x.friends.filter(y => {
//                 return y.id === 2
//             })
//         }))
//     // 5) display friends yang gender nya male dan mempunya hobby basketball
// console.log('--------- 5.')

// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].friends.length; j++) {
//         for (let k = 0; k < data[i].friends[j].hobby.length; k++) {
//             if (data[i].friends[j].hobby[k].hobby === 'basketball' && data[i].friends[j].gender === 'male') {
//                 console.log(data[i].friends[j])
//             }
//         }
//     }
// }

// // console.log(
// //     data.map(x => {
// //         return x.friends.map(y => {
// //             return y.hobby.map(z => {
// //                 return z.forEach(a => {
// //                     return a
// //                 })
// //             })
// //         })
// //     })
// // )


let filterNo6 = person.map(x => {
  return x.friends.filter(y => {
      if (y.gender === "female") {
          return y.isActive === true && y.favoriteFruit === "strawberry"
      }
  })
})
console.log(filterNo6)

// 7) display siapa saja yang mempunya teman name Theresia
console.log("-------------No 7--------------")
let filterFriend = person.filter(x=>{
    return x.friends.filter(y=>{
        return y.name==="Theresia"
    })
  })
  console.log(filterFriend)
// 8) display hobby id 1 dari friends yang isActive nya true
console.log("-------------No 8--------------")
let filterNo8 = person.filter(x => {
  return x.friends.filter(y => {
      return y.id === 1 && y.isActive === true
  })
})
console.log(filterNo8)
// 9) display person yang eye color nya brown dan favorite fruit nya banana dan mempunyai teman hobby basketball
// 10) display person yang mempunya friends gender male atau favorite fruit nya banana dan registered di tahun 2023



