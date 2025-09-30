// name clash
import { log } from './logger.js'

// const log = console.log // <- this would generate a "SyntaxError: Identifier 'log' has already been declared" error
log('Hello world');

/*
 What's happening here:

1. `import { log } from './logger.js'`
   → We import the `log` function from the `logger.js` module.  
   → Now `log` exists as a variable in this file.

2. `const log = console.log`
   → This line is commented out because if you uncomment it,  
     JavaScript will throw an error:  
     "SyntaxError: Identifier 'log' has already been declared".  
   → Why? Because `log` is already defined by the import. You cannot declare a variable with the same name twice in the same scope.

3. `log('Hello world');`
   → Calls the imported `log` function from `logger.js`.  
   → Prints: Hello world

 Key takeaway:  
- **Imports are like constants:** once you import a name, you cannot redeclare it in the same file.  
- **Avoid name clashes:** if you want a local variable with the same name, you can rename the import using `as`:
  
  ```javascript
  import { log as loggerLog } from './logger.js';
  const log = console.log; // now safe, different names
  loggerLog("Hello from imported log");
  log("Hello from console.log");
  ```

This helps prevent confusion and keeps your code clean!
*/
