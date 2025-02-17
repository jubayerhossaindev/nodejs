function Person(name, age) {
  this.name = name;
  this.age = age;
}
// this = { name: 'Jubayer', age: 30}

// function Person(student1 = { name: 'Jubayer', age: 30}) {
//   student1 = { name: 'Jubayer', age: 30}
//   student1.name = student1.name;
//   student1.name = "Jubayer";
//   student1.age = student1.age;
//   student1.age = 30;
//   return student1
// }
//

Object.assign(Person.prototype, {
  eat() {
    console.log(`${this.name} is eating`);
  },
  sleep() {
    console.log(`${this.name} is sleeping`);
  },
});

Person.prototype.constructor = Person;

function Student(name, age, city, country) {
  Person.call(this, name, age);
  this.city = city;
  this.country = country;
}
// function Student(name, age, city, country) {
//   console.log(this);

//   // Person কন্সট্রাকটরকে কল করা হচ্ছে `name` এবং `age` ইনিশিয়ালাইজ করার জন্য
//   Person.call(this);
//   // এখানে `this` একটি নতুন অবজেক্ট, যার `name` এবং `age` ডিফাইন করা হয়নি

//   // এখানে `this` হলো নতুন Student অবজেক্ট
//   // এই সময় `this = { name: undefined, age: undefined }`

//   this.name = name;
//   // `this.name` এ `name` আসবে, যেমন: `this.name = 'Jubayer'`

//   this.age = age;
//   // `this.age` এ `age` আসবে, যেমন: `this.age = 30`

//   this.city = city;
//   // `this.city` এ `city` আসবে, যেমন: `this.city = 'Narayanganj'`

//   this.country = country;
//   // `this.country` এ `country` আসবে, যেমন: `this.country = 'Bangladesh'`

//   // return this; // এই লাইন অপ্রয়োজনীয় কারণ `new` ব্যবহার করার কারণে `this` অটোম্যাটিক রিটার্ন হয়।
// }

// Properly set up the prototype chain
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

const student1 = new Student('Jubayer', 30, 'Narayanganj', 'Bangladesh');
// { name: 'Jubayer', age: 30, city: 'Narayanganj', country: 'Bangladesh'}
// console.log(student1.valueOf());
console.log(student1);

student1.eat();
student1.sleep();
student1.work();
student1.run();
student1.play();
