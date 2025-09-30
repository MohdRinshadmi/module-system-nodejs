export default class Logger {
  constructor(name) {
    this.name = name
  }

  log(message) {
    console.log(`[${this.name}] ${message}`)
  }
}

// This file exports a class named Logger as the default export.
// When another module imports from this file without using curly braces,
// it will receive this Logger class by default.

// Example usage after importing:
// import MyLogger from './logger.js';
// const logger = new MyLogger('App');
// logger.log('This is a log message.');