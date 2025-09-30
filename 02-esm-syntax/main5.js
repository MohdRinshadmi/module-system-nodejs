// avoid name clash

import { log as log2 } from "./logger.js"


const log = console.log // <- this would generate a "SyntaxError: Identifier 'log' has already been declared" error

log('message from log')   // calls the local console.log
log2('message from log2') // calls the imported log function from logger.js

/*
🚀 What's happening here:

1. `import { log as log2 } from './logger.js'`
   → We import the `log` function from `logger.js` but rename it to `log2`.  
   → The `as` keyword lets us avoid a name conflict with any local variable named `log`.

2. `const log = console.log`
   → Defines a local variable `log` that points to the built-in console.log function.  
   → Safe because it has a different name than `log2`.

3. `log('message from log')`
   → Calls the local `log` variable, which is `console.log`.  
   → Output: message from log

4. `log2('message from log2')`
   → Calls the imported function from `logger.js`, which we renamed to `log2`.  
   → Output: message from log2

✨ Key takeaway:
- **Use `as` to rename imports** when you have variables with the same name.  
- This avoids **name clashes** and keeps your code clear.

✔️ Example practical use:
- In large projects, different modules might export functions with the same name.  
- Using `as` allows you to import them safely without conflicts.

*/
