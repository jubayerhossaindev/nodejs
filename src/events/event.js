/* eslint-disable unicorn/prefer-event-target */
/* eslint-disable no-magic-numbers */

import { EventEmitter } from 'node:events';

class School extends EventEmitter {
  startSchool() {
    console.log('School is starting...');
    setTimeout(() => {
      // প্রথম লিসেনারের জন্য ইভেন্ট
      this.emit('hello1', {
        php: 'PHP',
        laravel: 'Laravel',
        wordpress: 'WordPress',
      });

      // দ্বিতীয় লিসেনারের জন্য ইভেন্ট
      this.emit('hello2', {
        javascript: 'JavaScript',
        node: 'NodeJS',
        express: 'ExpressJS',
      });

      // তৃতীয় লিসেনারের জন্য ইভেন্ট
      this.emit('hello3', {
        python: 'Python',
        django: 'Django',
        tensorflow: 'TensorFlow',
      });
    }, 2000);
  }
}

export default School;
