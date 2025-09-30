// Uncomment and execute the code below to trigger a "SyntaxError: Unexpected reserved word"

// import { default } from './logger.js'
// const logger = new default('a')
// logger.log('Hello World')

/*
🚀 What's happening here:

1. `import { default } from './logger.js'`
   → This tries to import a member literally named `default` from `logger.js`.  
   → ❌ This will cause a syntax error: "Unexpected reserved word"  
     because `default` is a **reserved keyword** in JavaScript for default exports.  
     You cannot use it as a named import like this.

2. `const logger = new default('a')`
   → This line also fails if the import above fails.  
   → JavaScript does not allow using `default` as a class or variable name in this context.

✨ Correct ways to use default exports:

Option 1: If `logger.js` had a **default export**, you import it without `{ }`:

```javascript
// logger.js
export default class Logger {
    constructor(name){ this.name = name }
    log(msg){ console.log(`[${this.name}] ${msg}`) }
}

// main.js
import Logger from './logger.js'   // no curly braces
const logger = new Logger('a')
logger.log('Hello World')

*/