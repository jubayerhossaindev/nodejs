import Mobile from './mobile.js';

const mobile = new Mobile();

const displayMobileBrand1 = ({ nokia }) => {
  console.log(`Mobile Brand Name: ${nokia}`);
};

const displayMobileBrand2 = ({ redmi }) => {
  console.log(`Mobile Brand Name: ${redmi}`);
};

const displayMobileBrand3 = ({ winstar }) => {
  console.log(`Mobile Brand Name: ${winstar}`);
};

// Set max listeners to 10 (এটি 10টির বেশি listener যোগ করলে সতর্কতা দেখাবে)
mobile.setMaxListeners(10);

// Event listeners যোগ করা
mobile.on('mobileBrand', displayMobileBrand1);
mobile.on('mobileBrand', displayMobileBrand2);
mobile.on('mobileBrand', displayMobileBrand3);

// mobileList ইভেন্টটি তোলা
mobile.mobileList();

// PrependOnceListener ব্যবহার করা (এই listener গুলি প্রতি ইভেন্টে একবারই রান করবে এবং তারপর অটোমেটিক ভাবে সরানো হবে)
mobile.prependOnceListener('mobileBrand', () => {
  console.log('Test'); // এটি একবার রান করবে এবং পরে আর চালু হবে না
});

// PrependListener ব্যবহার করা (এই listener গুলি প্রতি বার ইভেন্টটিতে রান করবে)
mobile.prependListener('mobileBrand', () => {
  console.log('PrependListener: প্রতি বার mobileBrand ইভেন্ট তোলা হলে এটি রান করবে');
});

// // আবার mobileList ইভেন্টটি তোলা
mobile.mobileList();
