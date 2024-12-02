function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // KRA Tax rates (2024) - Monthly brackets
    const taxBrackets = [
        { upperLimit: 24000, rate: 0.1 }, // 10% for the first Ksh. 24,000
        { upperLimit: 32333, rate: 0.25 }, // 25% for the next Ksh. 8,333
        { upperLimit: Infinity, rate: 0.3 }, // 30% for income above Ksh. 32,333
    ];

    // NHIF Rates (2024)
    const nhifRates = [
        { upperLimit: 5999, deduction: 150 },
        { upperLimit: 7999, deduction: 300 },
        { upperLimit: 11999, deduction: 400 },
        { upperLimit: 14999, deduction: 500 },
        { upperLimit: 19999, deduction: 600 },
        { upperLimit: 24999, deduction: 750 },
        { upperLimit: 29999, deduction: 850 },
        { upperLimit: 34999, deduction: 900 },
        { upperLimit: 39999, deduction: 950 },
        { upperLimit: Infinity, deduction: 1000 },
    ];

    // NSSF Rate (2024) - Tier I (6% of up to Ksh. 6000) and Tier II (6% of next Ksh. 18000)
    const tier1Limit = 6000; // First 6,000 of pensionable income
    const tier2Limit = 18000; // Next 18,000 of pensionable income

    // Calculate PAYE (Tax)
    let taxableIncome = grossSalary;
    let paye = 0;
    for (const bracket of taxBrackets) {
        if (taxableIncome <= bracket.upperLimit) {
            paye += taxableIncome * bracket.rate;
            break;
        } else {
            paye += bracket.upperLimit * bracket.rate;
            taxableIncome -= bracket.upperLimit;
        }
    }

    // Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
        if (grossSalary <= rate.upperLimit) {
            nhifDeduction = rate.deduction;
            break;
        }
    }

    // Calculate NSSF deduction
    const nssfDeduction =
        Math.min(grossSalary, tier1Limit) * 0.06 +
        Math.min(Math.max(grossSalary - tier1Limit, 0), tier2Limit) * 0.06;

    // Calculate net salary
    const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);

    return {
        grossSalary,
        paye,
        nhifDeduction,
        nssfDeduction,
        netSalary,
    };
}

// Example Usage
const basicSalary = 50000; // Input the basic salary
const benefits = 10000; // Input the benefits
const result = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", result.grossSalary);
console.log("PAYE (Tax):", result.paye);
console.log("NHIF Deduction:", result.nhifDeduction);
console.log("NSSF Deduction:", result.nssfDeduction);
console.log("Net Salary:", result.netSalary);
