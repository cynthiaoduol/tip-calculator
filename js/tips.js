// Declaring Variables
let tipValue = 0;
let billValue = 0;
let partySize = 0;
const tip5 = document.getElementById("tip-5");
const tip10 = document.getElementById("tip-10");
const tip15 = document.getElementById("tip-15");
const tip25 = document.getElementById("tip-25");
const tip50 = document.getElementById("tip-50");
const tipCustom = document.getElementById("tip-custom");
const reset = document.getElementById("reset");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const billInput = document.getElementById("bill");
const partyInput = document.getElementById("party");
const partyWarning = document.getElementById("people-warning");

// Calling Functions from Click or Change
reset.addEventListener("click", resetInputs);
tip5.addEventListener("click", activeButton5);
tip10.addEventListener("click", activeButton10);
tip15.addEventListener("click", activeButton15);
tip25.addEventListener("click", activeButton25);
tip50.addEventListener("click", activeButton50);
tipCustom.addEventListener("input", activeButtonCustom);
tipCustom.addEventListener("click", activeButtonCustomSelected);
billInput.addEventListener("input", updateValues);
billInput.addEventListener("focusout", billDecimals);
partyInput.addEventListener("input", updateValues);

// Getting Updated Bill & Party Size Values
function updateValues() {
  billValue = billInput.value;
  partySize = partyInput.value;
  activateResetButton();
  calculate();
}

function billDecimals() {
  billInput.value = Number.parseFloat(billInput.value).toFixed(2);
}

// Function to Reset Active Tip Button
function resetButtons() {
  //   ? Is it possible to create a loop through class names instead of listing them all individually?
  tip5.classList.remove(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  tip5.classList.add("bg-cyan-900", "text-white");
  tip10.classList.remove(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  tip10.classList.add("bg-cyan-900", "text-white");
  tip15.classList.remove(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  tip15.classList.add("bg-cyan-900", "text-white");
  tip25.classList.remove(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  tip25.classList.add("bg-cyan-900", "text-white");
  tip50.classList.remove(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  tip50.classList.add("bg-cyan-900", "text-white");
  tipCustom.classList.remove(
    "text-cyan-900",
    "bg-white",
    "border-2",
    "border-teal-400",
    "animate__animated",
    "animate__swing"
  );
  tipCustom.classList.add("bg-slate-100", "text-slate-500");
  reset.classList.remove(
    "text-cyan-900",
    "bg-teal-400",
    "cursor-pointer",
    "hover:bg-rose-300"
  );
  reset.classList.add("bg-cyan-800", "text-cyan-900");
}

function activateResetButton() {
  reset.classList.remove("bg-cyan-800", "text-cyan-900");
  reset.classList.add(
    "text-cyan-900",
    "bg-teal-400",
    "cursor-pointer",
    "hover:bg-rose-300"
  );
}

function resetInputs() {
  resetButtons();
  billInput.value = "";
  partyInput.value = "";
  tipAmount.innerHTML = 0;
  totalAmount.innerHTML = 0;
  tipValue = 0;
  tipCustom.value = "";
  partyWarning.classList.add("hidden");
  partyInput.classList.remove("border-2", "border-rose-500");
}

// Function to Set Active Tip Button
function activeButton5() {
  resetButtons();
  tip5.classList.remove("bg-cyan-900", "text-white");
  tip5.classList.add(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  activateResetButton();
  tipValue = 0.05;
  updateValues();
}

function activeButton10() {
  resetButtons();
  tip10.classList.remove("bg-cyan-900", "text-white");
  tip10.classList.add(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  activateResetButton();
  tipValue = 0.1;
  updateValues();
}

function activeButton15() {
  resetButtons();
  tip15.classList.remove("bg-cyan-900", "text-white");
  tip15.classList.add(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  activateResetButton();
  tipValue = 0.15;
  updateValues();
}

function activeButton25() {
  resetButtons();
  tip25.classList.remove("bg-cyan-900", "text-white");
  tip25.classList.add(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  activateResetButton();
  tipValue = 0.25;
  updateValues();
}

function activeButton50() {
  resetButtons();
  tip50.classList.remove("bg-cyan-900", "text-white");
  tip50.classList.add(
    "text-cyan-900",
    "bg-teal-400",
    "animate__animated",
    "animate__swing"
  );
  activateResetButton();
  tipValue = 0.5;
  updateValues();
}

function activeButtonCustom() {
  tipValue = tipCustom.value * 0.01;
  updateValues();
}

function activeButtonCustomSelected() {
  resetButtons();
  tipCustom.classList.add(
    "text-cyan-900",
    "bg-white",
    "border-2",
    "border-teal-400",
    "animate__animated",
    "animate__swing"
  );
  tipCustom.classList.remove("bg-slate-100", "text-slate-500");
  activateResetButton();
  tipValue = tipCustom.value * 0.01;
  updateValues();
}

// Tip Calculator Function
function calculate() {
  if (billValue > 0 && partySize > 0) {
    tipAmount.innerHTML = ((billValue * tipValue) / partySize).toFixed(2);
    totalAmount.innerHTML = ((billValue * (1 + tipValue)) / partySize).toFixed(
      2
    );
  //   partyWarning.classList.add("hidden");
  //   partyInput.classList.remove("border-2", "border-rose-500");
  // } else if (partySize < 1) {
  //   partyWarning.classList.remove("hidden");
  //   partyInput.classList.add("border-2", "border-rose-500");
  // } else {
  //   partyWarning.classList.add("hidden");
  //   partyInput.classList.remove("border-2", "border-rose-500");
   }
}