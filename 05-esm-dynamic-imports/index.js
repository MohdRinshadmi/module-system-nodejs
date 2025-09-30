const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'pl'] // (1)
const selectedLanguage = process.argv[2]  // get the language code from command line arguments

// Check if the user provided a language code
if(!selectedLanguage){
    console.error(
        `Please specify a language
        Usage: node ${process.argv[1]} <language_code> 
        Supported languages: ${SUPPORTED_LANGUAGES.join(', ')}`
    )
    process.exit(1); // exit the program with an error code
}

// Check if the provided language is supported
if(!SUPPORTED_LANGUAGES.includes(selectedLanguage)){
    console.error('The specified language is not supported.');
    process.exit(1); // exit the program with an error code
}

// Dynamically construct the module path based on the selected language
const translationModule = `./strings-${selectedLanguage}.js`

// Dynamically import the module (ESM syntax)
const strings = await import(translationModule)

// Access a property from the imported module
console.log(strings.HELLO);

/*
🚀 What's happening here:

1. `SUPPORTED_LANGUAGES` is an array of language codes the program can handle.  
2. `process.argv[2]` reads the 3rd command-line argument (node filename.js <arg>).  
3. If no language code is provided, the program prints usage info and exits.  
4. If the language code is not in SUPPORTED_LANGUAGES, the program prints an error and exits.  
5. `translationModule` dynamically constructs the path to the correct translation file.  
   Example: if selectedLanguage is 'en', it becomes './strings-en.js'.
6. `await import(translationModule)` dynamically imports the module at runtime.  
   - This is useful when you don’t know which module you’ll need until runtime.
7. `console.log(strings.HELLO)` accesses the `HELLO` export from the dynamically imported module.

✨ Key takeaways:
- Dynamic import allows loading modules **on demand**, which is great for localization, plugins, or lazy-loading.  
- `process.argv` lets you read command-line arguments in Node.js.  
- Always validate inputs before dynamically importing modules to avoid runtime errors.

✔️ Example usage:
```bash
node main.js en
# Output: Hello (from strings-en.js)
node main.js es
# Output: Hola (from strings-es.js)
*/