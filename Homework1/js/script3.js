console.log('Task 3')

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let r = (consumptionPerWeek * weeksAmount) % sheetsInReamPaper 
let numberOfReams = (consumptionPerWeek * weeksAmount - r) / sheetsInReamPaper
if (r > 0) {
    numberOfReams += 1;
}
console.log('Number of reams: '+numberOfReams);