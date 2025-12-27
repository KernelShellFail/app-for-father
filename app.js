function getDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) divisors.push(i);
    }
    return divisors;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function analyze() {
    const n = parseInt(document.getElementById("numberInput").value);
    const output = document.getElementById("output");
    output.innerHTML = "";

    if (!n || n <= 0) {
        output.innerHTML = `<p class="error">Please enter a positive number.</p>`;
        return;
    }

    const divisors = getDivisors(n);
    const divisorSum = sum(divisors);

    output.innerHTML += `<p><b>Divisors:</b> ${divisors.join(", ") || "None"}</p>`;
    output.innerHTML += `<p><b>Sum of divisors:</b> ${divisorSum}</p>`;

    // Prime check
    if (n > 1 && divisorSum === 1) {
        output.innerHTML += `<div class="badge prime">✔ Prime Number</div>`;
    }

    // Perfect check
    if (divisorSum === n) {
        output.innerHTML += `<div class="badge perfect">✔ Perfect Number</div>`;
    }

    // Amicable check
    const pair = divisorSum;
    if (pair !== n && pair > 0) {
        const pairDivs = getDivisors(pair);
        const pairSum = sum(pairDivs);

        if (pairSum === n) {
            output.innerHTML += `
        <hr>
        <div class="badge amicable">✔ Amicable Number</div>
        <p><b>Pair:</b> ${pair}</p>
        <p><b>Pair Divisors:</b> ${pairDivs.join(", ")}</p>
        <p><b>Pair Divisor Sum:</b> ${pairSum}</p>
      `;
        }
    }
}
