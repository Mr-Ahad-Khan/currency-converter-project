const BASE_URL = "https://api.frankfurter.app";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const input = document.querySelector("input");

// Flags
const countryMap = {
    USD: "US",
    EUR: "EU",
    AUD: "AU",
    INR: "IN"
};

// Populate flag when currency changes
dropdowns.forEach((select) => {
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    });
});

function updateFlag(element) {
    const currencyCode = element.value;
    const countryCode = countryMap[currencyCode];
    const img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/shiny/64.png`;
}

// Button click handler
btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const amount = input.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === "" || isNaN(amount)) {
        msg.innerText = "Please enter a valid number.";
        return;
    }

    if (from === to) {
        msg.innerText = `${amount} ${from} = ${amount} ${to}`;
        return;
    }

    const url = `${BASE_URL}/latest?amount=${amount}&from=${from}&to=${to}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const rate = data.rates[to];
        msg.innerText = `${amount} ${from} = ${rate.toFixed(2)} ${to}`;
    } catch (error) {
        msg.innerText = "Failed to fetch exchange rate.";
    }
});
