// Global Scope Variable
var globalVar = "I am global (var)";
let globalLet = "I am global (let)";
const globalConst = "I am global (const)";

function scopeDemoFunction() {
  // --- Start of Function Scope ---

  // 1. var: Function-Scoped
  var functionVar = "I am function-scoped (var)";

  // 2. let & const: Block-Scoped (but this block is the entire function)
  let functionLet = "I am function-scoped (let)";
  const functionConst = "I am function-scoped (const)";

  console.log("--- INSIDE scopeDemoFunction ---");

  // All variables are accessible inside the function
  console.log("Accessing Global var:", globalVar);
  console.log("Accessing Global let:", globalLet);
  console.log("Accessing Function var:", functionVar);
  console.log("Accessing Function let:", functionLet);

  if (true) {
    // 3. Block-Scoped Variables
    var blockVar = "I am block-scoped? (var)"; // HOISTED to function scope
    let blockLet = "I am block-scoped (let)";
    const blockConst = "I am block-scoped (const)";

    console.log("--- INSIDE IF Block ---");
    console.log("Accessing Block var:", blockVar);
    console.log("Accessing Block let:", blockLet);
    // --- End of Block Scope ---
  }
  
  console.log("Accessing Block var AFTER IF:", blockVar); // Output: I am block-scoped? (var)
}

scopeDemoFunction();

console.log("\n--- OUTSIDE ALL FUNCTIONS (Global Scope) ---");

// Global variables are accessible here
console.log("Accessing Global var:", globalVar);
console.log("Accessing Global let:", globalLet);
