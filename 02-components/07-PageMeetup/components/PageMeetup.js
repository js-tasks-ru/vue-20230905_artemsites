import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';



export default defineComponent({
  name: 'PageMeetup',

  data() {
    return {
      meetup: null,
      error: null,
    };
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      default: 1,
      // required: true,
      type: Number,
    },
  },

  watch: {
    meetupId: {
      immediate: true,
      handler(newId) {
        this.meetup = null
        this.error = null

        fetchMeetupById(newId)
        .then((res) => {
          this.error = null
          this.meetup = res
        })
        .catch((err) => {
          this.error = err.message
        })
      }
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="meetup" :meetup="meetup" />

      <UiContainer v-else-if="!meetup && !error">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-else-if="error">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>
  `,

});
