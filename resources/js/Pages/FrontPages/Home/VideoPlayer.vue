<template>
  <div class="bg-opacity-70 bg-primary-2 fixed z-50 top-0 w-full h-full">
    <div class="w-9/12 mx-auto relative">
      <div class="absolute top-10 cursor-pointer z-30" @click="close">
        <close-icon :width="'w-6'" :height="'h-6'" :color="'text-secondary-2'"></close-icon>
      </div>
    </div>
    <div class="flex h-full items-center">
      <video src="/dh_logo_reveal.mp4" class="h-auto w-9/12 mx-auto" autoplay muted loop controls></video>
    </div>
  </div>
</template>

<script>
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'

export default {
  components: { CloseIcon },
  methods: {
    close() {
      this.$emit('open-video', false)
    }
  }
}
</script>

<style></style>
