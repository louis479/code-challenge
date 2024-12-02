# Week 1 Code Challenges
This repository contains solutions to the Week 1 code challenges: 
1. **Grading System**
2. **Speed Detector**
3. **Net Salary Calculator**

## Description

Each challenge solves a specific problem using JavaScript. The solutions are implemented in Node.js, and some scripts utilize the `readline-sync` package for input.

---

### Challenge 1: Grading System (`challenge1.js`)

**Problem Statement**  
Write a program that prompts the user to input student marks (0-100). Based on the input, it generates a grade using the following scale:
- A: 80-100
- B: 60-79
- C: 50-59
- D: 40-49
- E: 0-39

**Solution Overview**  
The script reads input using `readline-sync`, validates the input, and calculates the grade based on the given scale.
```markdown
**How to Run**  
1. Install dependencies: `npm install readline-sync`
2. Execute the script: `node challenge1.js`

**Example Input and Output**  
Input: `85`  
Output: `Grade: A`

```


---

### Challenge 2: Speed Detector (`challenge2.js`)

**Problem Statement**  
Write a program that takes the speed of a car as input and outputs:
- "Ok" if the speed is <= 70 km/h.
- Demerit points for speeds above 70, calculated as 1 point for every 5 km/h over the limit.
- "License suspended" if points exceed 12.

**Solution Overview**  
The script reads input using `readline-sync`, validates it, and calculates the demerit points based on the speed.
```markdown
**How to Run**  
1. Install dependencies: `npm install readline-sync`
2. Execute the script: `node challenge2.js`

**Example Input and Output**  
Input: `80`  
Output: `Points: 2`
```
---

### Challenge 3: Net Salary Calculator (`challenge3.js`)

**Problem Statement**  
Write a program that calculates net salary by considering:
1. PAYE tax based on the 2024 KRA brackets.
2. NHIF deductions based on gross salary.
3. NSSF contributions (Tier I and II).

**Solution Overview**  
The script calculates gross salary from user-provided basic salary and benefits, applies the tax rules, and computes the net salary.

```markdown
**How to Run**  
1. Execute the script: `node challenge3.js`
2. Update the `basicSalary` and `benefits` variables for custom inputs.

**Example Input and Output**  

Input:  
- Basic Salary: `50000`  
- Benefits: `10000`  

Output:  
plaintext
Gross Salary: Ksh. 60,000.00
PAYE (Tax): Ksh. 10,099.50
NHIF Deduction: Ksh. 1,000.00
NSSF Deduction: Ksh. 2,400.00
Net Salary: Ksh. 46,500.50
```

---

## Requirements

- Node.js installed on your machine.
- `readline-sync` package for `challenge1.js` and `challenge2.js`.

```markdown
## How to Run the Challenges

1. Clone the repository.
2. Install required dependencies for `challenge1.js` and `challenge2.js`:  
   ```bash
   npm install readline-sync
   ```
3. Run each challenge script using Node.js:  
   ```bash
   node challenge1.js
   node challenge2.js
   node challenge3.js
   ```
---

## CONCLUSION 

- After completing the code-challenges, push the codes to the github repository for submission of assignment in canvas.

**STEPS**
```bash
1. git add. (to add all files and folders in the code-challenge)
2. git commit - m "completed the challenges"
3. git push origin main
```

That's all for today. Thank you for your time.
