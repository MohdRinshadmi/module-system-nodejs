import { count, increment } from "./counter";

console.log(count);  // 0
increment();
console.log(count);  // 1

/*
🚀 What's happening here:

1. `import { count, increment } from "./counter";`
   → Brings in the `count` variable and the `increment` function from `counter.js`.  
   → `count` is imported **by reference**, not by value — so when it changes in `counter.js`, the change is visible here.

2. `console.log(count);`
   → Logs the current value of `count`.  
   → Initially 0 (from `counter.js`).

3. `increment();`
   → Calls the function exported from `counter.js`.  
   → Inside, it does `count++`, increasing `count` to 1.

4. `console.log(count);`
   → Logs the updated value of `count`.  
   → Prints 1, because the variable is live and reflects changes.

✨ Key takeaways:
- ES module exports are **live bindings**.  
  This means when `increment()` updates `count` in the `counter.js` module, the new value is visible everywhere `count` is imported.  

✔️ Example run:
```bash
node main.js
# Output:
# 0
# 1
*/