import School from './event.js'; // Assuming event.js contains the School class

const school = new School();

// Event Listeners
const listener1 = ({ php, laravel, wordpress }) => {
  console.log(`Listener 1 Received: ${php}, ${laravel}, ${wordpress}`);
};

const listener2 = ({ javascript, node, express }) => {
  console.log(`Listener 2 Received: ${javascript}, ${node}, ${express}`);
};

const listener3 = ({ python, django, tensorflow }) => {
  console.log(`Listener 3 Received: ${python}, ${django}, ${tensorflow}`);
};

const listener4 = ({ python, django, tensorflow }) => {
  console.log(`Listener 4 Received: ${python}, ${django}, ${tensorflow}`);
};

// Limit the number of listeners for all events to 1
school.setMaxListeners(1);

// Register listeners for different events
school.on('hello1', listener1);
school.on('hello2', listener2);
school.on('hello3', listener3);
school.on('hello3', listener4); // Warning: Max listeners exceeded!

// Start emitting predefined events
school.startSchool();

// Print max listeners allowed
console.log(`Max Listeners Allowed: ${school.getMaxListeners()}`);

// Check event names
console.log('Registered Events:', school.eventNames());

// Check listener count for 'hello3'
console.log(`Listener Count for hello3: ${school.listenerCount('hello3')}`);

// Get raw listeners for 'hello1'
console.log('Raw Listeners for hello1:', school.rawListeners('hello1'));

// Get listeners for 'hello3'
console.log('Listeners for hello3:', school.listeners('hello3'));

// 🔥 Add a new listener dynamically
const eventName = 'hello4';
const listener = (data) => console.log('🚀 New listener for hello4:', data);

school.addListener(eventName, listener); // Add listener to 'hello4'

// 🚀 **Emit the event so it actually runs**
school.emit(eventName, { msg: 'This is hello4 event data!' }); // Output will be seen now

// Remove the listener
school.off(eventName, listener);

// Emit again to check if listener is removed (No output expected)
school.emit(eventName, { msg: 'This should not print!' });

// Prepend a listener (adds at the beginning)
school.prependListener(eventName, listener);
school.emit(eventName, { msg: 'Prepended listener for hello4!' });

// Prepend once listener (triggers only once)
school.prependOnceListener(eventName, listener);
school.emit(eventName, { msg: 'Prepended once listener triggered!' });
school.emit(eventName, { msg: 'This should not print since it was once-only!' });

// Optionally, you can change the max listeners limit for each specific event like this:
// school.setMaxListeners(2); // Allow 2 listeners for all events globally

// // Remove all listeners after 5 seconds
// setTimeout(() => {
//   console.log('Removing All Listeners...');
//   school.removeAllListeners();
// }, 5000);

// school.emit('hello1', listener1);
// school.emit('hello2', listener2);
// school.emit('hello3', listener3);

// setTimeout(() => {
//   console.log('Removing listener');

//   school.removeListener('hello', listener1);
// }, 1000);

// school.startSchool();

// console.log(EventEmitter);

// console.log(typeof EventEmitter);

// console.log(Object.getPrototypeOf(EventEmitter) === Function.prototype);
// console.log(EventEmitter.prototype.constructor === EventEmitter);

// try {
//   new EventEmitter();
//   console.log('I am from Class');
// } catch {
//   console.log('I am not from class');
// }

// try {
//   EventEmitter();
//   console.log('I am from Class');
// } catch {
//   console.log('I am not from class');
// }

// console.log(EventEmitter);
// console.log(typeof EventEmitter);

// console.log(Object.getPrototypeOf(EventEmitter) === Function.prototype);

// console.log(EventEmitter.prototype.constructor == EventEmitter);

// try {
//   new EventEmitter();
//   console.log('EventEmitter একটি ক্লাস');
// } catch {
//   console.log('EventEmitter ক্লাস নয়');
// }

// try {
//   EventEmitter(); // যদি এটি ক্লাস হয়, তাহলে এটি এরর দিবে
// } catch {
//   console.log('EventEmitter একটি ক্লাস');
// }

// class MyClass {}

// new MyClass(); // ✅ কাজ করবে
// MyClass(); // ❌ এরর হবে: "Class constructor MyClass cannot be invoked without 'new'"
