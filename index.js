
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
