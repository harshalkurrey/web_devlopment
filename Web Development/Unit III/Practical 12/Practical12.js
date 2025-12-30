
console.log("--- I. CONDITIONAL STATEMENTS DEMO ---");
let temperature = 25; // temperature
let weather = "sunny"; // weather condition

// 1. If / Else If / Else Statement
if (temperature > 30) {
    console.log(`1. It's ${temperature}°C. It's too hot outside.`);
} else if (temperature >= 20 && weather === "sunny") {
    // here €77 means "and" both conditions must be true
    console.log(`1. It's ${temperature}°C and ${weather}. Perfect outdoor weather.`);
} else {
    console.log(`1. It's ${temperature}°C. Could be better.`);
}

// 2. Switch Statement
let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("2. It's Monday. Start of the week.");
        break;
    case 5:
        console.log("2. It's Friday. Weekend is near!");
        break;
    case 6:
    case 7:
        
        console.log("2. It's the weekend!");
        break;
    default:
        console.log("2. It's a regular weekday.");
        // break is optional here 
}

// Loops Statements
console.log("\n--- II. LOOPING STATEMENTS DEMO ---");

// 1. For Loop ( Normal Loop)
console.log("3. FOR Loop (1 to 5):");
for (let i = 1; i <= 5; i++) {
    // i = 1, 2, 3, 4, 5
    console.log(`   Count: ${i}`);
}

// 2. While Loop
let countdown = 4;
console.log("\n4. WHILE Loop (Countdown):");
while (countdown > 0) {
    console.log(`   Time left: ${countdown}`);
    countdown--;
}

// 3. Do Whie Loop
let checkNum = 10;
console.log("\n5. DO...WHILE Loop (Runs at least once):");
do {
    console.log(`   Checking number: ${checkNum}`);
    checkNum++;
}
 while (checkNum < 5); 
console.log("\n6. Loop Control (Break/Continue):");
for (let j = 1; j <= 10; j++) {
    if (j === 3) {   
        console.log("   Skipping number 3 (Continue)");
        continue; 
    }
    
    if (j === 7) {
        console.log("   Stopping at 7 (Break)");
        break;
    }
    console.log(`   Processing: ${j}`);
}