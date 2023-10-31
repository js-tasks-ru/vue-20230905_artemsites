<template>
  <div class="toasts">

    <div class="toast" :class="[toast.class]" v-for="toast in toasts" :key="toast.id">
      <button
        class="toast__close-btn"
        v-if="toast.closeBtn"
        @click="closeToast(toast.id)">&times;</button>

      <UiIcon class="toast__icon" :icon="toast.icon" />
      <span>{{ toast.message }}</span>
    </div>

  </div>
</template>

<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'TheToaster',

  components: { UiIcon },

  data() {
    return {
      toasts: [],
      id: 1,//start toast id

      icons: {
        success: 'check-circle',
        error: 'alert-circle',
        info: 'check',
      },
    }
  },

  methods: {
    success() {
      this.addToast('success', ...arguments)
    },
    error() {
      this.addToast('error', ...arguments)
    },
    info() {
      this.addToast('info', ...arguments)
    },

    addToast(type, message, sec, closeBtn=false) {
      const s = ((sec&&sec>0)?sec:5) * 1000

      const toast = {
        id: this.id++,
        class: 'toast_'+type,
        icon: this.icons[type],
        message,
        closeBtn
      }

      this.toasts.push(toast)

      setTimeout(() => {
        this.closeToast(toast.id)
      }, s)
    },

    closeToast(toastId) {
      const i = this.toasts.findIndex(tst => tst.id === toastId)
      this.toasts.splice(i, 1);
    }
  },

};
</script>

<style scoped>
.toasts {
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;

  position: fixed;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;

  position: relative;
}

.toast+.toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}
.toast__close-btn {
  position: absolute;
  right: 0;
  top: 0;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}

.toast.toast_info {
  color: var(--blue);
}
</style>
