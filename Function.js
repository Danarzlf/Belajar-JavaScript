//Dasar Function
function addName() {
    return `NarrIzzy`
}
alert(addName())

//---------------------------
function addName(fullname){
    return (fullname)
}
alert(addName('Danar'))

//---------------------------
function addName(fullname){
    console.log('Nama Saya adalah ' + fullname)
}
addName('Danar Zulfian W')

//---------------------------
function addName(firstname , lastname){
    console.log(firstname , lastname)
}
addName('Stipe','Hohe')



//Contoh Function 1
const x = 1;
const y = 2;
const z = 3;

function sayIfOdd(number) {
    if (number % 2 !==0) {
        console.log(number, "itu ganjil");
    }
}
sayIfOdd(x); // Output 1 itu ganjil
sayIfOdd(y);
sayIfOdd(z); //Output 3 itu ganjil




// Contoh Function Keyword

//Fungsi untuk menghitung luas persegi
//dimana meminta size seperti parameter
function computeSquareArea(size) {
    //Ketika kita ingin menggunakan hasil dari
    //fungsi ini, kita perlu menggunakan keyword
    //return, karena return membuat nilai yang ada di fungsi
    //ini dapat diakses secara global
    return size * size;
}

const squareArea0f4 = computeSquareArea(4);
console.log(squareArea0f4)// Output 16





//Contoh Function Keyword tapi anonim

//Fungsi untuk menghitung luas persegi
//dimana meminta size seperti parameter
const computeSquareArea = function(size) {
    //Ketika kita ingin menggunakan hasil dari
    //fungsi ini, kita perlu menggunakan keyword
    //return, karena return membuat nilai yang ada di fungsi
    //ini dapat diakses secara global
    return size * size;
}

const squareArea0f4 = computeSquareArea(4);
console.log(squareArea0f4)// Output 16




//Contoh Arrow Function

//Fungsi untuk menghitung luas persegi
//dimana meminta size seperti parameter
const computeSquareArea = (size) => {
    //Ketika kita ingin menggunakan hasil dari
    //fungsi ini, kita perlu menggunakan keyword
    //return, karena return membuat nilai yang ada di fungsi
    //ini dapat diakses secara global
    return size * size;
}

const squareArea0f4 = computeSquareArea(4);
console.log(squareArea0f4)// Output 16
