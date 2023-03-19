// let arr = {1, 2, 3, 4, 5, 6, 7}
// console.log(`panjangan index dari array ini : ${arr.length}`);

// // cetak index dari 3 array
// console.log(arr[3]);



console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~5.) display friends yang gender nya male dan mempunyai hobby basketball ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`");

let maleBasketball = person.flatMap(function(x1) {
    return x1.friends.filter(function(y1) {
        return y1.gender === "male" && y1.hobby.find(function(z1) {
            return z1.hobby === "basketball";
        });
    });
});

console.table(maleBasketball);




