import * as loggerModule from './logger.js'

console.log(loggerModule.default);

/*
🚀 What's happening here:

1. `import * as loggerModule from './logger.js'`
   → Imports **everything exported** from `logger.js` as a single object called `loggerModule`.  
   → All named exports become properties of this object.  
   → If `logger.js` also has a default export, it becomes a property called `default` on this object.

2. `console.log(loggerModule.default)`
   → Accesses the default export from `logger.js` via the `default` property of the namespace object.  
   → Prints the default export (e.g., the Logger class) to the console.  

✨ Key takeaways:
- When using `import * as ...`, **named exports** are accessed by their names (`loggerModule.log`, `loggerModule.LEVELS`, etc.).  
- The **default export**, if it exists, is always accessible via `.default`.  

✔️ Example usage:
```javascript
const logger = new loggerModule.default('INFO');
logger.log('Hello World');
*/
