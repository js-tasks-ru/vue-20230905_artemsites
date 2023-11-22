<template>
  <div class="dropdown" :class="{ 'dropdown_opened': isDropdownOpened }">
    <button type="button" class="dropdown__toggle" :class="{dropdown__toggle_icon: isBtnWithIcon}" @click="toggleDropdown">
      <UiIcon v-if="selected.icon" :icon="selected.icon" class="dropdown__icon" />
      {{ selected.text }}
    </button>

    <!-- v-show="false" -->
    <div class="dropdown__menu" role="listbox" v-show="isDropdownOpened">
      <button
        class="dropdown__item"
        :class="{
          'dropdown__item_icon': options.find(opt => opt.icon),
        }"
        role="option"
        type="button"
        v-for="opt in options"
        :key="opt.value"
        @click="handlerDropdownSelect(opt)"
      >

        <UiIcon v-if="opt.icon" :icon="opt.icon" class="dropdown__icon" />
        {{ opt.text }}

      </button>
    </div>



    <select
      @change="handlerSelect($event)"
    >
      <option
        v-for="opt in options"
        :value="opt.value"
        :key="opt.value"
        :selected="(selected.value === opt.value) ? true : false"
      >
        {{ opt.text }}
      </option>
    </select>

  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';
import { ref, watch, defineComponent, computed } from 'vue';



export default defineComponent({
  name: 'UiDropdown',

  components: { UiIcon },

  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Object
    },
    title: {
      type: String
    },
  },

  emits: ['update:modelValue'],



  setup(props, { emit }) {
    let isDropdownOpened = ref(false);
    let selected = ref({ value: props.modelValue, text: props.title, icon: '' });



    watch(() => props.modelValue, (newVal) => {
      if (newVal) selected.value = props.options.find(opt => opt.value === newVal)
      // console.log('selected.value')
      // console.log(selected.value)
    }, { immediate: true })



    let isBtnWithIcon = computed(() => {
      return props.options.find(opt => opt.icon)
    })



    function toggleDropdown() {
      isDropdownOpened.value = !isDropdownOpened.value
    }



    function handlerDropdownSelect(opt) {
      selected.value = opt
      emit('update:modelValue', opt.value)
      closeDropdown()
    }



    function handlerSelect(e) {
      emit('update:modelValue', e.target.value)
    }



    function closeDropdown() {
      isDropdownOpened.value = false
    }



    return {
      isBtnWithIcon,
      selected,
      isDropdownOpened,
      toggleDropdown,
      closeDropdown,
      handlerDropdownSelect,
      handlerSelect,
    }
  }
});
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown__toggle {
  display: inline-block;
  background-color: var(--white);
  background-position: calc(100% - 10px) calc(100% - 10px);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  position: relative;
  padding: 10px 56px 10px 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: initial;
  text-align: center;
  transition-duration: 0.2s;
  transition-property: background-color, fill, color;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
}

.dropdown__toggle:after {
  content: '';
  position: absolute;
  top: 15px;
  right: 16px;
  transform: none;
  background: url('@/assets/icons/icon-chevron-down.svg') no-repeat;
  background-size: cover;
  display: block;
  width: 24px;
  height: 24px;
  transition: 0.2s transform;
}

.dropdown__toggle_icon {
  padding-left: 56px;
}

.dropdown_opened .dropdown__toggle {
  border-color: var(--blue);
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.dropdown_opened .dropdown__toggle:after {
  transform: rotate(180deg);
}

.dropdown__menu {
  background-clip: padding-box;
  border-radius: 0 0 8px 8px;
  border-top: none;
  bottom: auto;
  display: flex;
  flex-direction: column;
  left: 0;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: auto;
  top: -2px;
  transform: translate3d(0px, 52px, 0px);
  width: 100%;
  will-change: transform;
  z-index: 95;

  height: 0;
  border: none;
}

.dropdown_opened .dropdown__menu {
  height: auto;
  border: 0 solid var(--blue);
  border-width: 0 2px 2px 2px;
}

.dropdown__item {
  padding: 8px 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  background-color: var(--white);
  box-shadow: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color;
  outline: none;
  text-decoration: none;
}

.dropdown__item:hover,
.dropdown__item:focus {
  background-color: var(--grey-light);
}

.dropdown__item_icon {
  padding-left: 56px;
  position: relative;
}

.dropdown__item_icon .dropdown__icon,
.dropdown__toggle_icon .dropdown__icon {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
}
</style>
