//Contoh For Loop
for (let i=1; i <= 5; i++) {
    console.log(i);
}

//Contoh For Loop
const initialFloorLevel = 1;
for (let floorLevel = initialFloorLevel;
     floorLevel <= 5; 
     floorLevel++) {
  console.log("Aku lagi di lantai", floorLevel);
  console.log("Ngepel!");
  console.log("Meres pel!");
  console.log("Ngepel lagi!");
}

//Contoh While Loop
let i = 1
while (i <= 5) {
  console.log(i)
  i++;
}

//Contoh While Loop
const maxFloorLevel = 5;
let floorLevel = 1;

function getRandomInteger(min, max) {
  min = Math.cell(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (floorLevel <= maxFloorLevel) {
  let isSpotless = false;
  console.log("Ngepel Lantai", floorLevel);

  //Simulasi peluan lantai
  //spotless enggak setelah dipel
  let godsWill = getRandomInteger(0, 1);

  //0 berarti lantainya ga
  //spotless setelah dipel
  if (godsWill === 0) isSpotless = true;

  //Kalau lantainya udah gaada noda
  //bisa lanjut ke lantai berikutnya
  if (isSpotless) floorLevel++;
}


//Contoh Do While
const maxFloorLevel = 5;
const floorLevel = 1;

function getRandomInteger(min, max) {
  min = Math.cell(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

do {
  let isSpotless = false;
  console.log("Ngepel lantai floor", floorLevel);

   //Simulasi peluan lantai
  //spotless enggak setelah dipel
  let godsWill = getRandomInteger(0, 1);

  //0 berarti lantainya ga
  //spotless setelah dipel
  if (godsWill === 0) isSpotless = true;

  //Kalau lantainya udah gaada noda
  //bisa lanjut ke lantai berikutnya
  if (isSpotless) floorLevel++;
}while(floorLevel <= maxFloorLevel);



