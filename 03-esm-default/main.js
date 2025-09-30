import MyLogger from './logger.js';  // default import

const logger = new MyLogger('INFO'); // create a new Logger instance with name 'INFO'
logger.log('Hello World');           // call the log method

/*
🚀 What's happening here:

1. `import MyLogger from './logger.js';`
   → Imports the **default export** from `logger.js`.  
   → No curly braces `{ }` are used because it’s the default export.  
   → You can give it any name locally (here we used `MyLogger`).

2. `const logger = new MyLogger('INFO');`
   → Creates a new instance of the imported Logger class.  
   → The name `'INFO'` will be used as a prefix for all log messages from this instance.

3. `logger.log('Hello World');`
   → Calls the `log` method on the Logger instance.  
   → Output in console: `[INFO] Hello World`

✨ Key takeaways:
- **Default export** allows you to import a single main thing from a module.  
- You can name the imported value whatever you want locally.  
- Great for classes or modules where there’s a “main” export.  

✔️ Example comparison:
- Default export: `import MyLogger from './logger.js';`
- Named export: `import { log } from './logger.js';`

This code is clean and avoids any name clashes since you control the local name (`MyLogger`).
*/
