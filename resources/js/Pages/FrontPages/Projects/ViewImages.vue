<template>
  <div class="fade w-full h-screen fixed inset-0 z-50">
    <div class="flex items-center h-screen max-w-screen-md md:max-w-screen-lg mx-auto">
      <div class="px-6 md:px-8 xl:px-12 py-10 text-primary bg-secondary rounded-md w-full relative">
        <div class="absolute right-5 top-4 z-50" @click="close">
          <close-icon :width="'w-4'" :height="'h-4'" :color="'text-red-600 cursor-pointer'"></close-icon>
        </div>
        <div>
          <img :src="'/img/projects/' + $attrs.img" class="w-full bg-cover bg-center" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'
export default {
  components: { CloseIcon },
  methods: {
    close() {
      this.$emit('close-view')
    }
  }
}
</script>

<style scoped>
.fade {
  background-color: rgba(53, 107, 67, 0.541);
}
</style>
