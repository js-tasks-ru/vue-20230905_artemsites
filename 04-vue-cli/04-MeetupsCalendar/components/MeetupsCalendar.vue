<template>
  <div class="calendar-view">
    <div class="calendar-view__controls">
      <div class="calendar-view__controls-inner">
        <button class="calendar-view__control-left" type="button" aria-label="Previous month"></button>
        <div class="calendar-view__date">Декабрь 2022 г.</div>
        <button class="calendar-view__control-right" type="button" aria-label="Next month"></button>
      </div>
    </div>

    <div class="calendar-view__grid">
      <div v-for="day in calendar[curMonth]" :key="day" class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">{{ day.date }}</div>
        <div class="calendar-view__cell-content"></div>
      </div>
    </div>

    <br>

    <div class="calendar-view__grid">
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">28</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">29</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">30</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">1</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">2</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">3</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">4</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <!-- -->
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">5</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">6</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">7</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">8</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">9</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">10</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">11</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <!-- -->
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">12</div>
        <div class="calendar-view__cell-content">
          <a href="/meetups/1" class="calendar-event">Meetup 1</a>
          <a href="/meetups/2" class="calendar-event">Meetup 2</a>
        </div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">13</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">14</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">15</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">16</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">17</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">18</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <!-- -->
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">19</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">20</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">21</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">22</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">23</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">24</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">25</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <!-- -->
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">26</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">27</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">28</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">29</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">30</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">31</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">1</div>
        <div class="calendar-view__cell-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

import { getCalendar } from '../utils/getCalendar.js';

export default defineComponent({
  name: 'MeetupsCalendar',

  props: {
    // @note Дата митапа хранится в свойстве date в формате UNIX Timestamp;
    meetups: {
      type: Array,
      required: true,
    },
  },

  setup(props) {

    // let prevMonthDays = ref([]);
    // let curMonthDays = ref([]);
    // let nextMonthDays = ref([]);

    let curMonth = new Date().getMonth();
    let calendar = getCalendar();

    let curCalendarTable = createCurCalendarTable(calendar, curMonth);

    // console.log(curMonthName);
    // console.log(props.meetups);

    // console.log('calendar')
    // console.log(calendar)

    function createCurCalendarTable(calendar, month) {
      let curMonth = calendar[month];
      console.log('curMonth')
      console.log(curMonth)

      let countDaysFromPrevMonth = 0;
      if (curMonth[0].day > 1) {
        countDaysFromPrevMonth = (1 - curMonth[0].day) * -1;
      }
      console.log('countDaysFromPrevMonth')
      console.log(countDaysFromPrevMonth)

      let countDaysFromNextMonth = 0;
      if (curMonth[0].day < 7) {
        countDaysFromNextMonth = 7 - curMonth[curMonth.length-1].day;
      }
      console.log('countDaysFromNextMonth')
      console.log(countDaysFromNextMonth)

      for (let i=1; i<=35; i++) {
        // console.log('i')
        // console.log(i)
      }
    }

    return {
      curMonth,
      calendar,
    }

  }
})
</script>

<style scoped>
.calendar-view {
}

.calendar-view__controls {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: var(--blue);
  background-color: var(--blue-extra);
  padding: 24px;
  display: flex;
  justify-content: center;
}

.calendar-view__controls-inner {
  max-width: 325px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
}

.calendar-view__controls-inner button {
  border: none;
  padding: 0;
}

.calendar-view__control-left,
.calendar-view__control-right {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all;
  background: url('@/assets/icons/icon-pill-active.svg') left center no-repeat;
  background-size: cover;
}

.calendar-view__control-left:hover,
.calendar-view__control-right:hover {
  opacity: 0.8;
}

.calendar-view__control-right {
  transform: rotate(180deg);
}

.calendar-view__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.calendar-view__grid {
  border: 1px solid var(--grey);
  border-bottom: none;
}

.calendar-view__cell {
  position: relative;
  height: auto;
  padding: 6px 8px;
  background-color: var(--white);
  color: var(--grey-8);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid var(--grey);
  border-left: 1px solid var(--grey);
  text-align: right;
}

.calendar-view__cell.calendar-view__cell_inactive {
  background-color: var(--grey-light);
}

@media all and (max-width: 767px) {
  .calendar-view__cell:nth-child(5n + 1) {
    border-left: none;
  }
}

@media all and (min-width: 767px) {
  .calendar-view__grid {
    grid-template-columns: repeat(7, 1fr);
  }

  .calendar-view__cell {
    height: 144px;
  }

  .calendar-view__cell:nth-child(7n + 1) {
    border-left: none;
  }
}

.calendar-event {
  --max-lines: 2;
  --line-height: 16px;

  display: block;
  text-align: left;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  line-height: var(--line-height);
  color: var(--white);
  padding: 4px 6px;
  border-radius: 2px;
  background-color: var(--blue);
  margin-top: 4px;
}

@media all and (min-width: 767px) {
  .calendar-event {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: calc(var(--max-lines) * var(--line-height) + 6px);
  }
}
</style>
