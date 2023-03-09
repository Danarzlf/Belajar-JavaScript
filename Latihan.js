console.log("Hello FSW")

const array = []

const studentFsw3 = [
    {
        name : "Brahmasta",
        age : 21,
        status : "single"
    },
    {
        name : "Dza",
        age : 22,
        status : "double"
    },
    {
        name : "Kenny",
        age : 15,
        status : "married"
    },
    {
        name : "Stipe",
        age : 21,
        status : "single"
    },
    {
        name : "Danar",
        age : 20,
        status : "married"
    },
    {
        name : "Very",
        age : 40,
        status : "single"
    },
    {
        name : "Rima",
        age : 40,
        status : "married"
    },
]

//Jawaban menggunakan filter dan function
// nomor 1
console.log("------------YANG SUDAH MENIKAH------------")
var nikah = studentFsw3.filter(function studentMarried (x) {
    return x.status == "married";
});

console.table(nikah);



//nomor 2
console.log("------------YANG NAMA DEPANNYA D------------");
var hurufDepan = studentFsw3.filter(function namaDepanD(x) {
    return x.name[0] == "D";
});

console.table(hurufDepan);



// nomor 3
console.log("------------YANG UMURNYA DIATAS 20------------");
var umurDiatas = studentFsw3.filter(function umurLebih20(x) {
    return x.age > 20;
});

console.table(umurDiatas);



// nomor 4
console.log("------------YANG UMURNYA DIATAS 20 , STATUS SINGLE DAN NAMA BELAKANG Y------------");
var hurufBelakangY = studentFsw3.filter(function namaBelakangnyaY(x) {
    
    return x.age > 20 && x.status == "single" && x.name.slice(-1) == "y";
});

console.log(hurufBelakangY);



// //nomor 5
console.log("------------YANG UMURNYA DIATAS 20 , STATUS MENIKAH HURUF TENGAH N------------");
var hurufTengahN = studentFsw3.filter(function namaTengahnyaN(x){

    return x.age > 9 && x.status == "married" && x.name.charAt(Math.floor(x.name.length / 2)) == "n" ;
});

console.log(hurufTengahN)

// 1. print student yang sudah menikah
// 2. print student yang nama depannya D
// 3. print student yang umurnya diatas 20
// 4. print student yang umurnya diatas 20 , status single dan nama belakang Y
// 5. print student yang umurnya diatas 20 , status menikah dan huruf tengahnhya N

