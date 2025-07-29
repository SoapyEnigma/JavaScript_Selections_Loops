console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++)
    if (i % 2 != 0)
        console.log(i);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    let result = "";

    if (i % 3 == 0)
        result = "FIZZ";
    if (i % 5 == 0)
        result += "BUZZ";

    if (result != "")
        console.log("Number " + i + ": " + result);
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let counter = 0;
while (counter <= 100)
{
    if (counter % 2 != 0)
        console.log("While loop: " + counter);

    counter++;
}

counter = 0;
do
{
    let result = "";

    if (counter % 3 == 0)
        result = "FIZZ";
    if (counter % 5 == 0)
        result += "BUZZ";

    if (result != "")
        console.log("Do While loop - " + counter + ": " + result);

    counter++;

} while (counter <= 100)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let foundVal = false;

for (let i = 0; i <= n; i++)
{
    if (i == value)
    {
        console.log("Found value! - iter: " + i + " | val: " + value);
        foundVal = true;
        break;
    }
}

if (!foundVal)
    console.log("Did not find value.");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++)
{
    let result = "";

    if (i % fizzDivisor == 0)
        result = "FIZZ";
    if (i % buzzDivisor == 0)
        result += "BUZZ";

    if (result != "")
        console.log("Custom FizzBuzz - Number " + i + ": " + result);
}

console.log("fizzDivisor: " + fizzDivisor + " | buzzDivisor: " + buzzDivisor + "\n"
    + "Start: " + start + " | End: " + end);