import { createApp } from './vendor/vue.esm-browser.js';
import {fetchMeetupById} from './helpers/fetchMeetupById';

createApp({
  data() {
    return {
      meetupTitle: '',
      selectedID: null,
    }
  },
  watch: {
    selectedID(newID) {
      fetchMeetupById(newID)
      .then(res=>{
        this.meetupTitle = res.title
      })
    }
  }
}).mount('#app')
