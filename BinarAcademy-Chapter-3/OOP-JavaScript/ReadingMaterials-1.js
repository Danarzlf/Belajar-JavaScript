function diskon(x) {
    let musimPandemik = (x * 30)/100
    return musimPandemik
}

let sale = diskon(20000)
console.log(sale);

console.log("============================================================");


function sayHiTo(name) {
    let halo = `Halo ${name.toUpperCase()}!`
    return halo
}

let test1 = sayHiTo("charles")
console.log(test1);

// let test2 = sayHiTo(25)
// console.log(test2);          //ini akan error


console.log("============================================================");

//Penulisan Function
// Function Declaration
function volTabung(r , t) {
    return 3.14 * r**2 * t
}
console.log("Volume Tabung :" ,volTabung(10,4));
//Volume Tabung: 1256


//Function Expression
const volTabung = function(r , t) {
    return 3.14 * r**2 * t
}
console.log("Volume Tabung :" ,volTabung(10,4));
//Volume Tabung: 1256


//Arrow Function (ES6)
const volTabung = (r , t) => 3.14 * r**2 * t
console.log("Volume Tabung :" ,volTabung(10,4));
//Volume Tabung: 1256


console.log("============================================================");


const strArray = ['JavaScript', 'Java', 'C'];
function forEach(array , callback) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray
}

const lenArray = forEach(strArray, (item) => {
    return item.length;
});
console.log(lenArray);
// Output: [10, 4, 1]


console.log("============================================================");


//Pembuatan Class

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

//----------------------------------

class Human {
    // Add static property
    static isLivingOnEarth = true;

    // Add constructor method
    constructor(name , address) {
        this.name - name;
        this.address = address;
    }

    // Add instance method signature
    introduce() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

console.log(Human.isLivingOnEarth);
// Output static property : true



//``````````````````````````````````
class Human {
    //nama , alamat adalah attribute
    // constructor adalah parameter
    constructor(name , address) {
        this.name = name;
        this.address = address;
    }

    inctroduce() {
        console.log(`Hi, my name is ${this.name}`);
    }

    work() {
        console.log("Work!");
    }
} 

//--------------------

class Programmer extends Human {
    constructor(name, address, programmingLanguages) {
        super(name, address)
        this.programmingLanguages = programmingLanguages;
    }
    introduce()
    super. introduce( ) ;
    console.log();
}

