import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  agendaItemIcons,
  agendaItemDefaultTitles,

  props: {
    agendaItem: {
      required: true,
      type: Object,
    },
  },

  computed: {
    icon() {
      return '/assets/icons/icon-' + this.$options.agendaItemIcons[this.agendaItem.type] + '.svg';
    },
    title() {
      return this.agendaItem.title
        ? this.agendaItem.title
        : this.$options.agendaItemDefaultTitles[this.agendaItem.type];
    },
    talk() {
      return (this.agendaItem.type === 'talk')
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="icon" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ title }}</h3>
        <p class="agenda-item__talk" v-if="talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>
  `,
});
