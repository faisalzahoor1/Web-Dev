const BASE_URL = "http://data.fixer.io/api/latest?access_key=ea2d8446e1151b53b7ce610ad273caee";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".bt");
const fromcurr = document.querySelector(".from select ");
const tocurr = document.querySelector(".to select ");
const msg = document.querySelector(".msg");

for (const select of dropdowns) {
    for (const currcode in countryList) {
        let newoptions = document.createElement("option");
        newoptions.innerText = currcode;
        newoptions.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newoptions.selected = "selected";
        }
        else if (select.name === "to" && currcode === "PKR") {
            newoptions.selected = "selected";
        }
        select.append(newoptions);
    }
    select.addEventListener("change", (evt) => {
        flagchng(evt.target)
    })
}

const updateval = async () => {
    let amount = document.querySelector("input");
    let amntval = amount.value;
    if (amntval === "" || amntval < 1) {
        amntval = 1;
        amount.value = 1;
    }
    let response = await fetch(BASE_URL);
    let data = await response.json();
    console.log(data)
    let fromRate = data.rates[fromcurr.value.toUpperCase()];
    console.log(fromRate);
    let toRate = data.rates[tocurr.value.toUpperCase()];
    console.log(toRate);
    console.log(amntval);
    let finalAmount = (amntval / fromRate) * toRate;

    msg.innerText = `${amntval}  ${fromcurr.value} = ${finalAmount}  ${tocurr.value} `;
}

const flagchng = (element) => {
    let currcode = element.value;
    let countryCode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let imgs = element.parentElement.querySelector("img");
    imgs.src = newsrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateval();
})


window.addEventListener("load", () => {
    updateval();
})