export let count = 0;

export function increment(){
    count++;
}

/*
🚀 What's happening here:

1. `export let count = 0;`
   → Exports a variable `count` starting at `0`.  
   → Because it's declared with `let`, its value can change over time.  
   → Other modules that import it will always "see" the current value.

2. `export function increment(){ count++; }`
   → Exports a function called `increment`.  
   → Each time it’s called, it increases the value of `count` by 1.

✨ Key takeaways:
- The `count` variable is **live**. That means when it's updated here, any module importing it sees the updated value.
- You don’t need to return `count` from `increment`, because the variable itself is shared between modules.

✔️ Example usage in another file:
```javascript
import { count, increment } from './counter.js';

console.log(count); // 0
increment();
console.log(count); // 1
increment();
console.log(count); // 2
*/