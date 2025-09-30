const myModule = (() => {
    // These are private because they’re declared inside the IIFE scope
    const privateFoo = () => {}
    const privateBar = []

    // This logs the private values inside the module
    console.log('Inside:', privateFoo, privateBar);
    
    // This is the only object returned to the outside world
    const exported = {
        publicFoo: () => {},
        publicBar: () => {}
    }
    return exported // return the public interface
})() // once the parenthesis here are parsed, the function will be invoked and the returned value assigned to myModule

// These try to access private values from outside
console.log('Outside:', myModule.privateFoo, myModule.privateBar);

// This logs the public interface object
console.log('Module:', myModule);



// What’s Really Happening

// IIFE (Immediately Invoked Function Expression)
// (() => { ... })() executes immediately.
// Everything declared inside is scoped locally — not accessible outside unless returned.

// Private variables
// privateFoo and privateBar exist only inside the IIFE.
// They’re not attached to the returned object, so the outside can’t see them.

// Public API
// You explicitly return an object with publicFoo and publicBar.
// This is the only thing assigned to myModule.

// Console outputs

// Inside: logs the real private function and array because you’re still inside the IIFE.

// Outside: logs undefined undefined because myModule has no privateFoo or privateBar keys.

// Module: logs the object { publicFoo: f, publicBar: f }.



// existing module and extend it so that you still keep private variables hidden but allow controlled access from the outside. 
// This is exactly what the “Revealing Module Pattern” does.

// const myModule = (() => {
//     // Private stuff
//     const privateFoo = () => console.log('Private foo called!');
//     const privateBar = [];

//     // Public API (exposes private via wrappers)
//     return {
//         // Public function can internally call private
//         publicFoo: () => {
//             console.log('Public foo called!');
//             privateFoo(); // accessing private inside
//         },

//         // Provide a controlled getter
//         getPrivateBar: () => [...privateBar], // returns a copy so it can’t be mutated directly

//         // Provide a controlled setter or method to mutate privateBar
//         addToPrivateBar: (item) => {
//             privateBar.push(item);
//         }
//     };
// })();

// // Now you can call:
// myModule.publicFoo(); // calls privateFoo inside

// myModule.addToPrivateBar('Hello');
// myModule.addToPrivateBar('World');

// console.log(myModule.getPrivateBar()); // ['Hello', 'World']

// // Direct access is still not possible:
// console.log(myModule.privateFoo); // undefined
// console.log(myModule.privateBar); // undefined

// // Module object:
// console.log(myModule); 
