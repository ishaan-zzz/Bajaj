const fetch = require('node-fetch');

// API endpoints
const createAccountUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount";
const buyStocksUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks";

// Your information
const name = "Your Full Name";
const email = "your_colle@example.com";
const rollNumber = 123456; // Your roll number
const phone = "1234567890"; // Your phone number

// Headers for API requests
const headers = {
    "Content-Type": "application/json",
    "bfhl-auth": rollNumber.toString()
};

// Function to create an investment account
async function createInvestmentAccount() {
    const createAccountPayload = {
        name,
        email,
        rollNumber,
        phone
    };

    try {
        const response = await fetch(createAccountUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(createAccountPayload)
        });
        const data = await response.json();
        if (response.ok) {
            console.log("Investment account created successfully. Account Number:", data.accountNumber);
            return data.accountNumber;
        } else {
            console.error("Failed to create investment account.");
            return null;
        }
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Function to buy stocks
async function buyStocks(company, currentPrice, accountNumber, githubRepoLink) {
    const buyStocksPayload = {
        company,
        currentPrice,
        accountNumber,
        githubRepoLink
    };

    try {
        const response = await fetch(buyStocksUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(buyStocksPayload)
        });
        if (response.ok) {
            console.log("Successfully invested in", company, "stocks.");
        } else {
            console.error("Failed to buy stocks.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Main function
async function main() {
    // Simulated stock information for Bajaj Finserv
    const bajajFinservCurrentPrice = 5000; // Replace this with the real current price from the internet
    const githubRepoLink = "https://github.com/ishaan-zzz";

    // Step 1: Create an investment account
    const accountNumber = await createInvestmentAccount();
    if (!accountNumber) return;

    // Step 2: Buy stocks in Bajaj Finserv
    await buyStocks("Bajaj Finserv", bajajFinservCurrentPrice, accountNumber, githubRepoLink);
}

main();
