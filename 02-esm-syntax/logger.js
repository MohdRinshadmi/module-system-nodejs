// export a function named log
export function log(message) {
    console.log(message);
}

// export a constant
export const DEFAULT_LEVEL = 'INFO';

// export an object
export const LEVELS = {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
}

// export a class named Logger
export class Logger {
    constructor(name){
        this.name = name;
    }
    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
}

/*
🚀 What's happening in this file:

1. `export function log(message)`  
   → This creates a simple function that prints a message to the console.  
   → Because it’s exported, other files can import and use it.  
   Example use after import: log("Hello World");

2. `export const DEFAULT_LEVEL = 'INFO'`  
   → A constant value (string "INFO") is defined.  
   → It represents the default logging level.  
   → Exported so other files can reuse the same default instead of hardcoding.

3. `export const LEVELS = { ... }`  
   → An object that lists all the logging levels (error, debug, warn, etc.)  
   → Each level is given a number, often used for filtering or comparing log importance.  
   Example: LEVELS.error is 0, LEVELS.info is 4.

4. `export class Logger { ... }`  
   → A class is defined to create "logger objects".  
   → When you create a new Logger with a name (like `new Logger("App")`),  
     every message logged will include that name.  
   Example: `[App] Server started`.

✨ In summary:  
This file is a small logging utility.  
- You get a **basic log function** (`log`)  
- Some **predefined logging levels** (`DEFAULT_LEVEL` and `LEVELS`)  
- And a **Logger class** that prints messages with a label (useful for larger apps).  

Everything is exported so it can be imported and used in other files.
*/