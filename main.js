// variables

let circle_1 = document.querySelector("aside .step .cr-1");
let circle_2 = document.querySelector("aside .step .cr-2");
let circle_3 = document.querySelector("aside .step .cr-3");
let circle_4 = document.querySelector("aside .step .cr-4");
let allCircles = [, circle_2, circle_3, circle_4];

let step_1 = document.querySelector(".container .step-1");
let step_2 = document.querySelector(".container .step-2");
let step_3 = document.querySelector(".container .step-3");
let step_4 = document.querySelector(".container .step-4");
let thanks = document.querySelector(".container .thank-you");

let allSteps = [step_1, step_2, step_3, step_4];

//* step-1 variables
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let btn_step1 = document.querySelector(".step-1 .next-stp");

let errors = document.querySelectorAll(".error");
let errName = document.querySelector(".err-name");
let errEmail = document.querySelector(".err-email");
let errPhone = document.querySelector(".err-phone");

let theName = false;
let theEmail = false;
let thePhone = false;

//* step-2 variables
let card_1 = document.querySelector(".step-2 .card-1");
let card_2 = document.querySelector(".step-2 .card-2");
let card_3 = document.querySelector(".step-2 .card-3");
let card_1payments = document.querySelector(".step-2 .card-1 .p-payments");
let card_2payments = document.querySelector(".step-2 .card-2 .p-payments");
let card_3payments = document.querySelector(".step-2 .card-3 .p-payments");
let allExtra = document.querySelectorAll(".step-2 .cards .extra");

let allCards = [card_1, card_2, card_3];

let monthOrYearbtn = document.querySelector(".step-2 .options .button");

let monthly = document.querySelector(".step-2 .options .monthly");
let yearly = document.querySelector(".step-2 .options .yearly");

let btn_step2 = document.querySelector(".step-2 .next-stp");
let btn_backStep2 = document.querySelector(".step-2 .back-stp");

//* step-3 varialbes
let card1 = document.querySelector(".step-3 .cards .card1");
let card2 = document.querySelector(".step-3 .cards .card2");
let card3 = document.querySelector(".step-3 .cards .card3");
let step3Cards = [card1, card2, card3];

let price_card1 = document.querySelector(".step-3 .cards .card1 .p-payments");
let price_card2 = document.querySelector(".step-3 .cards .card2 .p-payments");
let price_card3 = document.querySelector(".step-3 .cards .card3 .p-payments");

let input1 = document.querySelector(".step-3 .cards .card1 input");
let input2 = document.querySelector(".step-3 .cards .card2 input");
let input3 = document.querySelector(".step-3 .cards .card3 input");
let allinputs = document.querySelectorAll(".step-3 .cards .card input");

let btn_step3 = document.querySelector(".step-3 .next-stp");
let btn_backStep3 = document.querySelector(".step-3 .back-stp");

//* step-4 variables
let a = document.querySelector(".step-4 .final-data a");
let allplans = document.querySelector(".step-4 .final-data .step-2-data .data ");
let allServices = document.querySelector(".step-4 .final-data .step-3-data");


let arcadeP_payment = document.querySelector(".step-4 .final-data .step-2-data .arcade .p-payments");
let advancedP_payment = document.querySelector(".step-4 .final-data .step-2-data .advanced .p-payments");
let proP_payment = document.querySelector(".step-4 .final-data .step-2-data .pro .p-payments");

let onlineServices = document.querySelector(".step-4 .final-data .step-3-data .online-service .p-payments");
let largerStorage = document.querySelector(".step-4 .final-data .step-3-data .larger-storage .p-payments");
let customaizableProfile = document.querySelector(".step-4 .final-data .step-3-data .customizable-profile .p-payments");

let totalperMorY = document.querySelector(".step-4 .total div p span");

let final_price = document.querySelector(".step-4 .total div .final-price");

let btn_step4 = document.querySelector(".step-4 .next-stp");
let btn_backStep4 = document.querySelector(".step-4 .back-stp");


//* aside
function toggleCircles(arr) {
  arr.forEach(function (e) {
    if (e.classList.contains("active")) {
      document
        .querySelector(`.${e.getAttribute("data-class")}`)
        .classList.add("active");
    }
  });
}

//todo [1]
function verifyData(name, email, phone) {
  if (name === "") {
    errName.style.cssText = "display:block";
    errName.textContent = "This field is required";
  } else {
    errName.style.cssText = "display:none";
    if (name.length <= 5) {
      errName.style.cssText = "display:block";
      errName.textContent = "Must be more 5 char";
    } else {
      errName.style.cssText = "display:none";
      theName = true;
    }
  }

  if (email === "") {
    errEmail.style.cssText = "display:block";
    errEmail.textContent = "This field is required";
  } else {
    errEmail.style.cssText = "display:none";

    let emailReg = /\w{5,}@\w+.\w+/g;
    if (emailReg.test(email) === true) {
      errEmail.style.cssText = "display:none";
      theEmail = true;
    } else {
      errEmail.style.cssText = "display:block";
      errEmail.textContent = "Unavailable email";
    }
  }

  if (phone === "") {
    errPhone.style.cssText = "display:block";
    errPhone.textContent = "This field is required";
  } else {
    errPhone.style.cssText = "display:none";

    let phoneReg = /\d \d{3} \d{3} \d{3}/g;
    if (phoneReg.test(phone) === true) {
      errPhone.style.cssText = "display:none";
      thePhone = true;
    } else {
      errPhone.style.cssText = "display:block";
      errPhone.textContent = "Unavailable phone";
    }
  }
}


toggleCircles(allSteps);

btn_step1.onclick = function () {
  verifyData(name.value, email.value, phone.value);

  if (theName === true && theEmail === true && thePhone === true) {
    step_1.className = "step-1";
    step_2.className = "step-2 active";
  }
  toggleCircles(allSteps);
};

//todo [2]
allCards.forEach((card) => {
  card.addEventListener("click", function () {
    allCards.forEach(function (c) {
      c.classList.remove("active");
    });
    this.classList.add("active");
    for (let i = 0; i < allplans.children.length; i++) {
      allplans.children[i].classList.remove("active");
    }
    document.querySelector(`.step-4 .final-data .step-2-data .data .${this.getAttribute("data-4")}`).classList.add("active");
  });
});

monthOrYearbtn.addEventListener("click", function () {
  if (monthly.classList.contains("active")) {
    monthly.classList.remove("active");
    yearly.classList.add("active");
    monthOrYearbtn.classList.add("active");
    allExtra.forEach((e) => {
      e.classList.add("active");
    })
    card_1payments.textContent = "$90/ye";
    card_2payments.textContent = "$120/ye";
    card_3payments.textContent = "$150/ye";
    document.querySelectorAll(".step-4 .final-data .step-2-data .data .mo-or-ye").forEach((e) => {
      e.textContent = "(Yearly)";
    })
    arcadeP_payment.textContent = "$90/ye";
    advancedP_payment.textContent = "$120/ye";
    proP_payment.textContent = "$150/ye";

    price_card1.textContent = "+$10/ye";
    price_card2.textContent = "+$20/ye";
    price_card3.textContent = "+$20/ye";

    onlineServices.textContent = "+$10/ye";
    largerStorage.textContent = "+$20/ye";
    customaizableProfile.textContent = "+$20/ye";

    totalperMorY.textContent = "(per year)";
  }else {
    yearly.classList.remove("active");
    monthly.classList.add("active");
    monthOrYearbtn.classList.remove("active");
    allExtra.forEach((e) => {
      e.classList.remove("active");
    });
    card_1payments.textContent = "$9/mo";
    card_2payments.textContent = "$12/mo";
    card_3payments.textContent = "$15/mo";
    document.querySelectorAll(".step-4 .final-data .step-2-data .data .mo-or-ye").forEach((e) => {
      e.textContent = "(Monthly)";
    })
    arcadeP_payment.textContent = "$9/mo";
    advancedP_payment.textContent = "$12/mo";
    proP_payment.textContent = "$15/mo";

    price_card1.textContent = "+$1/mo";
    price_card2.textContent = "+$2/mo";
    price_card3.textContent = "+$2/mo";

    onlineServices.textContent =       "+$1/mo";
    largerStorage.textContent =        "+$2/mo";
    customaizableProfile.textContent = "+$2/mo";

    totalperMorY.textContent = "(per month)";
  }
})

btn_step2.addEventListener("click", function () {
  step_2.classList.remove("active");
  step_3.classList.add("active");
  toggleCircles(allSteps);
})

btn_backStep2.addEventListener("click", function () {
  step_2.classList.remove("active");
  step_1.classList.add("active");

  circle_2.classList.remove("active");
})


//todo [3]
step3Cards.forEach((card) => {
  card.addEventListener("click", function () {
    if(this.children[0].children[0].hasAttribute("checked")) {
      this.children[0].children[0].removeAttribute("checked");
      this.style.cssText = " background-color: none;";
    } else {
      this.children[0].children[0].setAttribute("checked","");
      this.style.cssText = "background-color: var(--Light_blue);";
    }
    //* add data to step-4 
    if (card.style.cssText == "background-color: var(--Light_blue);") {
      document.querySelector(`.step-4 .final-data .step-3-data .${this.getAttribute("data-4")}`).classList.add("active");
    }else {
      document.querySelector(`.step-4 .final-data .step-3-data .${this.getAttribute("data-4")}`).classList.remove("active");
    }
  })
})

//*for step-4
let StartingPrice;
let totalPrice ;
let myArray = [...allServices.children];

btn_step3.addEventListener("click", function () {
  step_3.classList.remove("active");
  step_4.classList.add("active");
  toggleCircles(allSteps);

  //* for step-4
  let regex = /\d/g;
for(let i = 0; i < allplans.children.length; i++) {
  if (allplans.children[i].classList.contains("active")) {
    totalPrice = +allplans.children[i].children[1].textContent.match(regex).join("");
  }
}
myArray.forEach((e) => {
  if (e.classList.contains("active")) {
    StartingPrice = +e.firstElementChild.children[1].textContent.match(regex).join("");
    totalPrice = totalPrice + StartingPrice;
  }
})

if (totalperMorY.textContent == "(per month)") {
  final_price.textContent = `$${totalPrice}/mo`;
}else {
  final_price.textContent = `$${totalPrice}/ye`;
}
})
btn_backStep3.addEventListener("click", function () {
  step_3.classList.remove("active");
  step_2.classList.add("active");
  circle_3.classList.remove("active");
})


//todo [4]

btn_step4.addEventListener("click", function () {
  step_4.classList.remove("active");
  thanks.classList.add("active");
  toggleCircles(allSteps);
})
btn_backStep4.addEventListener("click", function () {
  step_4.classList.remove("active");
  step_3.classList.add("active"); 
  circle_4.classList.remove("active");
})