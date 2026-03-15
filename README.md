# 💱 Currency Converter

A simple **Currency Converter Web App** built using **HTML, CSS, and JavaScript**.
It allows users to convert currencies in real time using the **Frankfurter Exchange Rate API**.

---

## 🚀 Features

* Convert between different currencies
* Real-time exchange rates using API
* Dynamic country flags based on selected currency
* Simple and responsive UI
* Error handling for invalid inputs
* Built with pure JavaScript (no frameworks)

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Logic and API handling
* **Frankfurter API** – Currency exchange rates
* **FlagsAPI** – Country flag images
* **Font Awesome** – Icons

---

## 📁 Project Structure

```
.
├── currency converter project/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling and layout
│   └── app.js          # JavaScript logic and API handling
│
└── README.md           # Project documentation
```

---

## ⚙️ How It Works

1. User enters an amount.
2. Selects **From** currency.
3. Selects **To** currency.
4. Clicks **Get Exchange Rate**.
5. App fetches exchange rate from the API and displays the result.

Example:

```
100 USD = 8400 INR
```

---

## 🌐 API Used

This project uses the **Frankfurter Exchange Rate API** to fetch real-time currency exchange rates.

**Base URL**

```
https://api.frankfurter.app
```

**Example API Request**

```
https://api.frankfurter.app/latest?amount=100&from=USD&to=INR
```

This request converts **100 USD to INR** and returns the latest exchange rate.

Example Response:

```
{
  "amount": 100,
  "base": "USD",
  "date": "2026-03-15",
  "rates": {
    "INR": 8400
  }
}
```



## ▶️ How to Run the Project

1. Clone the repository

```
git clone https://github.com/your-username/currency-converter-project.git
```

2. Open the folder

3. Run **index.html** in your browser

---

## 📈 Future Improvements

* Add more currencies
* Add swap button for currencies
* Improve UI/UX design
* Add historical exchange rate charts
* Add mobile responsive improvements

---

## 👨‍💻 Author

**Ahad Khan**

GitHub:
https://github.com/Mr-Ahad-Khan

---

⭐ If you like this project, consider giving it a **star** on GitHub!
