import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      required: false,
    },
    image: {
      required: false,
    },
  },

  computed: {
    imageStyle() {
      if (this.image) {
        return {
          '--bg-url': `url(${this.image})`,
        };
      }
      else {
        return '';
      }
    }
  },

  template: `
    <div class="meetup-cover" :style="imageStyle">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
