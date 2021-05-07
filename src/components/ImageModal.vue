<template>
  <transition name="imagefade">
    <div v-if="show" class="modal__wrapper">
      <div class="modal">
        <img :src="src" class="modal__image" />
      </div>
      <span @click="emitCloseEvent()" class="modal__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ['closeImageModal'],
  props: {
    show: {
      required: true,
    },
    src: {
      required: true,
    },
  },
  methods: {
    emitCloseEvent() {
      // Closes the Modal.
      console.log('Emittingg...');
      this.$emit('closeImageModal')
    },
  },
};
</script>

<style lang="postcss" scoped>
/* For the Image Modal */
.modal__wrapper {
  @apply absolute inset-0 bg-black bg-opacity-90 z-30;
}
.modal {
  @apply relative w-full h-full flex items-center;
}
.modal__btn {
  @apply absolute top-2 right-2 p-3 hover:bg-gray-400 hover:bg-opacity-20 rounded-full text-white cursor-pointer
}

/* For the modal transitions. */
.imagefade-enter-active, .imagefade-leave-active {
  transition: all 200ms ease-in;
}
.imagefade-enter-from, .imagefade-leave-to {
  opacity: 0;
}
.imagefade-enter-to, .imagefade-leave-from {
  opacity: 1;
}

</style>