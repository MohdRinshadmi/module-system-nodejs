// using a namespace import

// biome-ignore lint/style/noNamespaceImport: demonstrating namespace import syntax

import * as loggerModule from "./logger.js"

console.log(loggerModule);

/*
🚀 What's happening here:

1. `import * as loggerModule from "./logger.js"`
   → This imports EVERYTHING that was exported from `logger.js`.  
   → Instead of importing each function, constant, or class one by one,  
     we grab them all and put them inside a single object named `loggerModule`.

2. `console.log(loggerModule);`
   → Prints the whole `loggerModule` object so we can see what was imported.  
   → It will look something like this in the console:
     {
       log: [Function: log],
       DEFAULT_LEVEL: "INFO",
       LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
       Logger: [class Logger]
     }

✨ In simple terms:  
- `loggerModule` acts like a "namespace" that holds all the exports from `logger.js`.  
- You can now use them like:
   loggerModule.log("Hello World");
   console.log(loggerModule.DEFAULT_LEVEL);
   console.log(loggerModule.LEVELS.info);
   const appLogger = new loggerModule.Logger("App");
   appLogger.log("App started!");

✔️ Why use this?  
- Beginners: Easier to import everything at once if you’re experimenting.  
- Pros: Useful when you want a single object to group related exports,  
  or to avoid naming conflicts with other modules.
*/