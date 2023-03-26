//Membuat class dalam OOP JavaScript versi lama harus dengan function
//Constructor Function 
//Harus diawali dengan huruf besar per kata

//Class
function PremiumMember() {
    this.firstName = ""
    this.lastName = ""
    this.sayHello = function(name) {
        console.info(`Hello ${name} nama saya adalah ${this.firstName} ${this.lastName}`)
    }
    this.familyName = function(nameSon , nameDaughter) {
        console.info(`Putra saya ${nameSon} dan putri saya ${nameDaughter}`)
    }
}

//Object
const eko = new PremiumMember();
// eko,firstName = "Eko";   //bisa ajj seperti ini , tapi semua gadapet dan Constructor Functionnya tidak berguna
eko.firstName = "Eko"
eko.lastName = "Oliveira"
eko.sayHello("Kiw-1")
eko.familyName("Amanda" , "Nunes")

const budi = new PremiumMember();
budi.firstName = "Budi"
budi.lastName = "Poirier"
budi.sayHello("Kiw-2")
budi.familyName("Justin" , "Valentina")

console.log(eko);
console.log(budi);
        
