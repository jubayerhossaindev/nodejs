class Person {
  // Constructor to initialize common properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to simulate eating
  eat() {
    console.log(`${this.name} is eating`);
  }

  // Method to simulate sleeping
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Student extends Person {
  // Constructor to initialize specific properties of Student
  constructor(name, age, city, country) {
    super(name, age); // Calls the constructor of the parent class (Person)
    this.city = city;
    this.country = country;
  }

  // Method to simulate working
  work() {
    console.log(`${this.name} is working`);
  }

  // Method to simulate running
  run() {
    console.log(`${this.name} is running`);
  }

  // Method to simulate playing
  play() {
    console.log(`${this.name} is playing`);
  }
}

// Creating a new instance of Student
const student1 = new Student('Jubayer', 30, 'Narayanganj', 'Bangladesh');

// Logging student1 instance (properties and methods)
console.log(student1); // Output: Student { name: 'Jubayer', age: 30, city: 'Narayanganj', country: 'Bangladesh' }

// Calling methods on the student1 instance
student1.eat(); // Output: Jubayer is eating
student1.sleep(); // Output: Jubayer is sleeping
student1.work(); // Output: Jubayer is working
student1.run(); // Output: Jubayer is running
student1.play(); // Output: Jubayer is playing
