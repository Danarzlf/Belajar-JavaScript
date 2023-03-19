const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}


function checkAge(age) {
    return age < 20;
}

// console.log(checkAdult(ages))
const ages = [32, 33, 16, 40];
let hasilFilter = ages.filter(checkAge)
// console.log(hasilFilter)

let arr = []
for(let i =0; i < ages.length; i++) {
    // console.log(ages[i])
    if(checkAge(ages[i])) {
        arr.push(ages[i])
    }
}

// console.log(arr)

function student(name, age, city) {
    console.log(`hi, nama saya ${name}, umur saya ${age}, dan kota saya ${city}`)
}

student("imam", 20, "bandung")
student("kenny", 21, "mars")
student("yana", 10, "jupiter")

function studentData(name, age, city) {
    return `hi, nama saya ${name}, umur saya ${age}, dan kota saya ${city}`
}

console.log("=================================")
console.log(studentData("Ferdy", 77, "Olympus"))

function menghitungDiscount(harga, diskon) {
    return harga * diskon /100
}

function hargaTotal(harga, diskon) {
    let hargaDiskon = menghitungDiscount(harga, diskon)
    return harga - hargaDiskon
} 

console.log("=================================")
console.log(hargaTotal(10000, 30))

function checkGender(gender) { 
    return gender === "female" 
} 
 
function checkIsActive(status) { 
    return status === true 
} 
 
function checkEyeColor(eyeColor) { 
    return eyeColor === "blue" 
} 
 
function chekcAddress(address) { 
    return address === "Bali" 
} 
 
function checkCondition(key, value) { 
    // console.log(key) 
    // console.log(value) 
    return key === value 
} 
 
function loopingData(data) { 
    let arr = [] 
    for (let i = 0; i < data.length; i++) { 
        // if (checkEyeColor(data[i].eyeColor) && chekcAddress(data[i].address)) { 
        //     arr.push(data[i]) 
        // } 
        // console.log(data[i].eyeColor) 
        if (checkCondition("blue", data[i].eyeColor) && checkCondition("Bali", data[i].address)) { 
            arr.push(data[i]) 
        } 
    } 
    return arr 
} 
 
loopingData(person) 