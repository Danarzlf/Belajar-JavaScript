//if else
const gebetan = {
  name: "Joko",
  isOnline: true
};

if (gebetan.isOnline) {
  console.log(`Halo, ${gebetan.name}!`);
  console.log("Lagi ngapain nih! Sleepcall yuk!");
}

//switch case
const day = "MONDAY";

switch(day){
    case "MONDAY":
        console.log("Hari senin? Gue sih santai aja!");
        break;
    case "TUESDAY":
        console.log("Hari selasa gini gatau sih mau ngapain");
        break;
    case "WEDNESDAY":
        console.log("Rabu  manja!");
        break;
    case "THURSDAY":
        console.log("Kamis mantab!");
        break;
    case "FRIDAY":
        console.log("Thanks God It's Friday");
        break;
    case "SATURDAY":
        console.log("Healing dulu, bos");
        break; 
    case "SUNDAY":
        console.log("Besok senin? Gue sih santai aja!");
        break;   
    default:
        console.log("Lu masukin hari apa bro? Hari kiamat?")
}
