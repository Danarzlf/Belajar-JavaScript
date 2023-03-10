const levelCharacter = 9

if(levelCharacter > 10){
    console.log("lanjut babak selanjutnya");
}else{
    console.log("gabsa");
}



//boolean = true dan false
console.log(levelCharacter >= 10);


//comparison operator
//apakah a sama dengan b?
console.log("a" === "b");

//apakah a tidak sama dengan b
console.log("a" !== "b");


//mencetak data dengan kondisi tertentu
const fsw3Student = [
        {
            name : "Brahmasta",
            age : 21,
            status : "single",
            favouriteFruit : "melon"
        },
        {
            name : "Dza",
            age : 22,
            status : "double",
            favouriteFruit : "apple"
        },
        {
            name : "Kenny",
            age : 15,
            status : "married",
            favouriteFruit : "melon"
        },
        {
            name : "Stipe",
            age : 21,
            status : "single",
            favouriteFruit : "apple"
        },
        {
            name : "Danar",
            age : 20,
            status : "married",
            favouriteFruit : "apple"
        },
        {
            name : "Very",
            age : 40,
            status : "single",
            favouriteFruit : "apple"
        },
        {
            name : "Rima",
            age : 40,
            status : "married",
            favouriteFruit : "apple"
        },
]


let arr = []

for(let i = 0; i < fsw3Student.length; i++){
    
    //student yang suka apple
    if (fsw3Student[i].favouriteFruit === "apple"){
        arr.push(fsw3Student[i])
        // console.log(fsw3Student[i].name);
    }
}

    console.table(arr);
    // berapa banyak data diatas yg suka apple
    //apakah banyak yang suka apple
    if (arr.length > 2) {
        console.log(`banyak kok , yag suka apple ada = ${arr.length}`);
    } else {
        console.log(`ga banyak kok , yag suka apple  = ${arr.length}`);
    }
