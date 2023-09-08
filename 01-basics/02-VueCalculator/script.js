import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: null,
    };
  },
  methods: {
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
  computed: {
    result() {
      if (this.operator !== null) {
        return this.mathIt(this.num1, this.operator, this.num2);
      }
    },
  }
}).mount('#app');
