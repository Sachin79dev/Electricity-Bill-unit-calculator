// Unit calculator for Electricity Bill
// 0-100 units: 4.2 Rs/unit
// 101-200 units: 6 Rs/unit
// 201-400 units: 8 Rs/unit
// Above 400 units: 13 Rs/unit


let unit = Number(prompt("Enter the number of units consumed:"));
let billAmount = 0;

if (unit > 0 && unit <= 100) {
    billAmount = unit * 4.2;
    console.log(billAmount);
}
else if (unit > 100 && unit <= 200) {
    billAmount = (100 * 4.2) + ((unit - 100) * 6);
    console.log(billAmount);
}
else if (unit > 200 && unit <= 400) {
    billAmount = (100 * 4.2) +  (100 * 6) + ((unit - 200) * 8);
    console.log(billAmount);
}
else {
    billAmount = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unit - 400) * 13);
    console.log(billAmount);
}




// Optimized way for the same 

if(unit>400) {
    billAmount += (unit - 400) * 13;
    unit = 400;
}
if(unit>200) {
    billAmount += (unit - 200) * 8;
    unit = 200;
}
if(unit>100) {
    billAmount += (unit - 100) * 6;
    unit = 100;
}

billAmount += unit*4.2;

console.log(billAmount);
