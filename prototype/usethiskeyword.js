function Person(name, age) {
  const person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}

Object.assign(Person.prototype, {
  // constructor: Person,
  eat() {
    console.log(`${this.name} is eating`);
  },
  sleep() {
    console.log(`${this.name} is sleeping`);
  },
});

Person.prototype.constructor = Person;

const p1 = Person('Jubayer', 30);

console.log(p1);

p1.eat();
p1.sleep();

function Student(name, age, city, country) {
  const student = Object.create(Student.prototype);
  const person = Person(name, age);
  Object.assign(student, person);
  student.city = city;
  student.country = country;
  return student;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Object.assign(Student.prototype, {
  work() {
    console.log(`${this.name} is working`);
  },
  run() {
    console.log(`${this.name} is running`);
  },
  play() {
    console.log(`${this.name} is playing`);
  },
});

const student1 = Student('Jubayer', 30, 'Narayanganj', 'Bangladesh');

console.log(student1);

student1.eat();
student1.sleep();
student1.work();
student1.run();
student1.play();
