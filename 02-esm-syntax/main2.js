// import a single member from the module
import { log } from "./logger.js";

log("Hello, World!");

/*
🚀 What's happening here:

1. `import { log } from "./logger.js";`
   → This line imports ONLY the `log` function from the `logger.js` file.  
   → The curly braces `{ }` mean we’re doing a "named import" — we must type the name
     exactly as it was exported (case-sensitive).

2. `log("Hello, World!");`
   → Calls the imported `log` function, which simply prints "Hello, World!" to the console.

✨ In simple terms:  
- Instead of pulling in the whole module (like with `import * as loggerModule ...`),  
  we’re just grabbing the one thing we need (`log`).  

✔️ Why use this?  
- **Beginners:** Less confusing — you only bring in what you’re actually using.  
- **Pros:** Keeps code cleaner, avoids unnecessary imports, and can improve tree-shaking
  (smaller final bundle in production).

👉 Example comparison:  
- Namespace import (everything): `loggerModule.log("msg");`  
- Named import (single item): `log("msg");`

Both work, but named imports are preferred if you only need specific pieces.
*/