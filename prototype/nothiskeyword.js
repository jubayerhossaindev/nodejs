function Person(name, age) {
  const person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}

Object.assign(Person.prototype, {
  // constructor: Person,
  eat({ name }) {
    console.log(`${name} is eating`);
  },
  sleep({ name }) {
    console.log(`${name} is sleeping`);
  },
});

Person.prototype.constructor = Person;

const p = Person('Jubayer', 30);

console.dir(p);
p.eat(p);
p.sleep(p);

function Student(name, age, city, country) {
  const student = Object.create(Student.prototype);
  const person = Person(name, age);
  Object.assign(student, person);
  student.city = city;
  student.country = country;
  return student;
}

// Student.prototype = Object.create(Person.prototype);
// Object.setPrototypeOf(Student.prototype, Person.prototype);
Object.assign(Student.prototype, Person.prototype);
Student.prototype.constructor = Student;

Object.assign(Student.prototype, {
  work({ name }) {
    console.log(`${name} is working`);
  },
  run({ name }) {
    console.log(`${name} is running`);
  },
  play({ name }) {
    console.log(`${name} is playing`);
  },
});

const student1 = Student('Jubayer', 30, 'Narayanganj', 'Bangladesh');

console.log(student1);
student1.eat(student1);
student1.sleep(student1);
student1.work(student1);
student1.run(student1);
student1.play(student1);

// function Person(name, age) {
//   const person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// // Optimized prototype methods for Person
// Object.assign(Person.prototype, {
//   eat({ name }) {
//     console.log(`${name} is eating`);
//   },
//   sleep({ name }) {
//     console.log(`${name} is sleeping`);
//   },
// });

// Person.prototype.constructor = Person;

// function Student(name, age, city, country) {
//   const student = Object.create(Student.prototype);
//   const person = Person(name, age); // Properly call Person constructor
//   Object.assign(student, person); // Copy Person properties into the student object
//   student.city = city;
//   student.country = country;
//   return student;
// }

// // Proper inheritance: Student's prototype chain should link to Person
// Object.setPrototypeOf(Student.prototype, Person.prototype);
// Student.prototype.constructor = Student;

// // Optimized prototype methods for Student
// Object.assign(Student.prototype, {
//   work({ name }) {
//     console.log(`${name} is working`);
//   },
//   run({ name }) {
//     console.log(`${name} is running`);
//   },
// });

// const student1 = Student('Jubayer', 30, 'Narayanganj', 'Bangladesh');

// console.log(student1);

// student1.eat(student1); // Jubayer is eating
// student1.work(student1); // Jubayer is working
// student1.run(student1); // Jubayer is running
// student1.sleep(student1); // Jubayer is sleeping

// function Person(name, age) {
//   const person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// // Organized & optimized prototype methods
// Object.assign(Person.prototype, {
//   eat({ name }) {
//     console.log(`${name} is eating`);
//   },
//   sleep({ name }) {
//     console.log(`${name} is sleeping`);
//   },
// });

// function Student(name, age, city, country) {
//   const student = Object.create(Student.prototype);
//   const person = Person(name, age);
//   // Object.assign(student, Person(name, age));
//   Object.assign(student, person);
//   // student.name = person.name;
//   // student.age = person.age;
//   student.city = city;
//   student.country = country;
//   return student;
// }

// // Object.setPrototypeOf(Student.prototype, Person.prototype);
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Object.assign(Student.prototype, {
//   work({ name }) {
//     console.log(`${name} is working`);
//   },
//   run({ name }) {
//     console.log(`${name} is running`);
//   },
// });

// const student1 = Student('Jubayer', 30, 'Narayanganj', 'Bangladesh');

// console.log(student1);

// student1.eat(student1);
// student1.work(student1);
// student1.run(student1);
// student1.sleep(student1);
