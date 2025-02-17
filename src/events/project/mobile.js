/* eslint-disable no-magic-numbers */
/* eslint-disable unicorn/prefer-event-target */
import { EventEmitter } from 'node:events';

class Mobile extends EventEmitter {
  constructor() {
    super();
    this.brandName = {
      nokia: 'Nokia',
      redmi: 'Redmi',
      winstar: 'Winstar',
    };
  }
  mobileList(brand = this.brandName) {
    console.log('Mobile List');
    setTimeout(() => {
      this.emit('mobileBrand', brand);
    }, 2000);
  }
}

export default Mobile;
