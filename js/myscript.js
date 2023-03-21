const tip5 = document.getElementById("fivePercent");
const tip10 = document.getElementById("tenPercent");
const tip15 = document.getElementById("fifteenPercent");
const tip25 = document.getElementById("twentyFivePercent");
const tip50 = document.getElementById("fiftyPercent");
const tipCustom = document.getElementById("customtip");
const reset = document.getElementById("reset");
const tipAmount = document.getElementById("tipPerPerson");
const totalAmount = document.getElementById("totalPerPerson");
const billInput = document.getElementById("billAmount");
const partyInput = document.getElementById("partySize");

const buttons = document.querySelectorAll(".tip-options > button");
// console.log(buttons)

let tipValue;

tip5.addEventListener("click", function () {
    tipValue = 0.05;
    calculate()
    // console.log(tipValue)
})
tip10.addEventListener("click", function () {
    tipValue = 0.1;
    calculate()
})
tip15.addEventListener("click", function () {
    tipValue = 0.15;
    calculate()
})
tip25.addEventListener("click", function () {
    tipValue = 0.25;
    calculate()
})
tip50.addEventListener("click", function () {
    tipValue = 0.5;
    calculate()
})
tipCustom.addEventListener("input", function () {
    tipValue = tipCustom.value * 0.01
    calculate()
})

const calculate = function () {
    tipAmount.innerHTML = ((parseInt(billInput.value) * tipValue) / parseInt(partyInput.value)).toFixed(2)
    totalAmount.innerHTML = ((parseInt(billInput.value) / parseInt(partyInput.value)) + parseInt(tipAmount.innerHTML)).toFixed((2))
};

reset.addEventListener("click", function () {
    billInput.value = "";
    partyInput.value = "";
    tipAmount.innerHTML = 0;
    totalAmount.innerHTML = 0;
    tipValue = 0;
    tipCustom.value = "";
})
// buttons.forEach((button) => {
//     console.log(button)
//     button.classList.remove("selected");
//     button.addEventListener('click', ()=>{
//         button.classList.add("selected")
        
//     })
//   });


