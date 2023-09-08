import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: null,
      result: 0,
    };
  },
  methods: {
    handlerCalculate() {
      if (this.operator !== null) {
        this.result = this.mathIt(this.num1, this.operator, this.num2);
      }
    },
    mathIt(a, operator, b) {
      let calcFunctions = {
        '+': () => a + b,
        '-': () => a - b,
        '*': () => a * b,
        '/': () => a / b,
      };
      return calcFunctions[operator]();
    },
  },
}).mount('#app');
