// const { sum , sum2 } = require("./penjumlahan.js")
// const { kurang , kurang2 } = require("./pengurangan.js")

// console.log(sum(10, 300))
// console.log(sum2(10, 300))

// console.log(kurang(100, 50))
// console.log(kurang2(100, 50))


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//NOMOR 1
rl.question('angka pertama yang mau dijumlahkan ', (angka1) => {
    rl.question('angka kedua yang mau dijumlahkan ', (angka2) => {
    const hasil = sum(parseInt(angka1), parseInt(angka2));
        console.log(hasil);
        console.log(`hasil dari penjumlahan  ${angka1} and angka ${angka2} adalah ${hasil}!`);
    rl.close();
    })
  });
  


//NOMOR 2
rl.question('angka pertama yang mau dikurangkan ', (angkaa1) => {
    rl.question('angka kedua yang mau dikurangkan ', (angkaa2) => {
    const hasill = kurang(parseInt(angkaa1), parseInt(angkaa2));
        console.log(hasill);
        console.log(`hasil dari pengurangan  ${angkaa1} and angka ${angkaa2} adalah ${hasill}!`);
    rl.close();
    })
  });
  


//NOMOR 3
rl.question('angka pertama yang mau dikali kan ', (angkaaa1) => {
    rl.question('angka kedua yang mau dikali kan ', (angkaaa2) => {
    const result3 = kali(parseInt(angkaaa1), parseInt(angkaaa2));
        console.log(result3);
        console.log(`hasil dari perkalian  ${angkaaa1} and angka ${angkaaa2} adalah ${result3}!`);
    rl.close();
    })
  });
  


  //NOMOR 4
rl.question('angka pertama yang mau dibagi ', (angkaaaa1) => {
    rl.question('angka kedua yang mau dibagi ', (angkaaaa2) => {
    const result4 = bagi(parseInt(angkaaaa1), parseInt(angkaaaa2));
        console.log(result4);
        console.log(`hasil dari pembagian  ${angkaaaa1} and angka ${angkaaaa2} adalah ${result4}!`);
    rl.close();
    })
  });


  
//NOMOR 5
rl.question('Masukkan harga pertama ', (harga1) => {
    rl.question('Masukkan harga kedua ', (harga2) => {
        rl.question('Masukkan kuantitas barang ', (kuantitas) => {
    const result5 = quantitas(parseInt(harga1), parseInt(harga2) , parseInt(kuantitas));
        console.log(result5);
        console.log(`Harga ${harga1} and Harga ${harga2} dijumlahkan , lalu dikali dengan ${kuantitas}  adalah ${result5}!`);
    rl.close();
        })
    })
});


// 1 hasil tambah inputan user (done)
// 2 hasil kurang inputan user
// 3 hasil kali inputan user
// 4 hasil bagi inputan user
// 5 hasil total harga kali quantitas barang
















// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });
