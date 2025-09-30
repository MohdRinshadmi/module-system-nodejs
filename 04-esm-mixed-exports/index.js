import mylog, { info } from './logger.js';

mylog('Hello World'); // [LOG]: Hello World
info('This is an info message'); // [LOG]: [INFO]: This is an info message

/*
🚀 What's happening here:

1. `import mylog, { info } from './logger.js';`
   → Imports **both the default export** (`mylog`) and a **named export** (`info`) from `logger.js`.  
   → Default export comes first without curly braces.  
   → Named exports are listed inside `{ }`.  

2. `mylog('Hello World');`
   → Calls the default export function from `logger.js`.  
   → Example output: `[LOG]: Hello World`

3. `info('This is an info message');`
   → Calls the named export function `info`.  
   → Example output: `[LOG]: [INFO]: This is an info message`

✨ Key takeaways:
- You can combine **default + named imports** in a single line.  
- Default export can be named anything locally (`mylog` here).  
- Named exports must match their exported names (`info`) unless you rename them using `as`.

✔️ Example with renaming named export:
```javascript
import mylog, { info as infoLogger } from './logger.js';
infoLogger('Renamed import works!');
*/