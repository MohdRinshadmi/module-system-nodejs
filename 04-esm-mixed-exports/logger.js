export default function log(message){
    console.log(`[LOG]: ${message}`);
}

export function info(message){
    log(`[INFO]: ${message}`);
}

/*
🚀 What's happening here:

1. `export default function log(message){ ... }`
   → Defines a function called `log` that prints a message to the console.  
   → The `[LOG]:` prefix is added for clarity.  
   → Because it’s a **default export**, other files can import it without curly braces.  
     Example: `import mylog from './logger.js';`

2. `export function info(message){ ... }`
   → Defines a named export function `info`.  
   → It calls the default `log` function, adding an `[INFO]:` prefix.  
   → Named exports must be imported using curly braces:  
     Example: `import { info } from './logger.js';`

✨ Key takeaways:
- Default export: the "main" function of this module (`log`).  
- Named export: additional utility (`info`) that depends on the default function.  
- `[LOG]:` and `[INFO]:` prefixes make messages easier to read in the console.

✔️ Example usage in another file:
```javascript
import mylog, { info } from './logger.js';

mylog('Hello World');          // [LOG]: Hello World
info('This is an info message'); // [LOG]: [INFO]: This is an info message
*/