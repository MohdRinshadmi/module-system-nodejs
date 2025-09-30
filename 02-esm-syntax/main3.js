// import multiple members of the module
import { log, Logger } from "./logger.js";

log("Hello from main3.js");

const logger = new Logger("DEFAULT");
logger.log("This is a log message.");

/*
🚀 What's happening here:

1. `import { log, Logger } from "./logger.js";`
   → This line imports two specific things from `logger.js`:  
      - `log` (a function)  
      - `Logger` (a class)  
   → This is called a "named import". You can list as many exports as you need inside the { }.

2. `log("Hello from main3.js");`
   → Uses the `log` function that was imported.  
   → Prints: Hello from main3.js

3. `const logger = new Logger("DEFAULT");`
   → Creates a new instance of the `Logger` class, giving it the name "DEFAULT".  
   → Now `logger` is an object with its own `log` method.

4. `logger.log("This is a log message.");`
   → Calls the `log` method on the `logger` object.  
   → Output in console: [DEFAULT] This is a log message.

✨ In simple terms:  
- We imported two exports (`log` and `Logger`) at once.  
- `log` is just a quick function to print messages.  
- `Logger` is more advanced: it lets us create loggers with labels (like "DEFAULT") so the logs are easier to trace in bigger apps.

✔️ Why use multiple named imports?  
- **Beginners:** You only bring in what you need, nothing extra.  
- **Pros:** Code stays clean, readable, and optimized for bundling.  
- It also makes it obvious to other developers which parts of a module are being used.
*/