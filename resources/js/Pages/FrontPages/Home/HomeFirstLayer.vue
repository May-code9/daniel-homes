<template>
  <div class="py-20 md:py-36">
    <div class="w-4/5 lg:w-3/4 mx-auto mt-2 lg:mt-8 relative">
      <div
          class="bg-cover bg-center w-full h-44 md:h-96 animate__animated animate__heartBeat animate__backInLeft"
          :style="{ 'background-image': backgroungImage('home_img.jpg') }"
        ></div>
      <div class="absolute w-full h-full top-0 -right-28 hidden lg:inline-block">
        <div class="flex items-center justify-end h-full">
          <div class="cursor-pointer relative" @click="show_player = true">
            <play-icon :width="'w-52'" :height="'h-auto'"></play-icon>
            <play-2-icon :width="'w-52 absolute left-0 opacity-0 hover:opacity-100'" :height="'h-auto'"></play-2-icon>
          </div>
        </div>
      </div>
      <div class="absolute w-full h-full inset-0 transparent"></div>
    </div>
    <div class="w-3/5 mx-auto relative -mt-10">
      <div
        class="text-center aperto-bold text-3xl md:text-5xl lg:text-6xl text-yellow-50 text-shadow animate__animated animate__backInUp"
      >
        Building for the uncompromised future of Africa Now.
      </div>
    </div>
    <div class="cursor-pointer relative text-center pb-5 block lg:hidden" @click="show_player = true">
      <mobile-play-icon :width="'w-16 md:w-20'" :height="'h-auto'"></mobile-play-icon>
      <mobile-play-2-icon
        :width="'w-16 md:w-20 absolute left-0 opacity-0 hover:opacity-100'"
        :height="'h-auto'"
      ></mobile-play-2-icon>
    </div>
    <div class="w-3/4 mx-auto">
      <div
        class="text-center font-jost font-semibold text-lg lg:text-xl text-yellow-50 animate__animated animate__backInUp"
      >
        With our premium services, we ensure quality delivery and cost-savings opportunities for our clients.
      </div>
    </div>
    <transition
      enter-active-class="animate__animated animate__backInRight animate__heartBeat"
      leave-active-class="animate__animated animate__backOutRight"
    >
      <video-player v-if="show_player" v-on:open-video="openVideo"></video-player>
    </transition>
  </div>
</template>

<script>
import PlayIcon from '../../Shared/Icons/PlayIcon.vue'
import Play2Icon from '../../Shared/Icons/Play2Icon.vue'
import VideoPlayer from './VideoPlayer.vue'
import MobilePlayIcon from '../../Shared/Icons/MobilePlayIcon.vue'
import MobilePlay2Icon from '../../Shared/Icons/MobilePlay2Icon.vue'
export default {
  components: { PlayIcon, Play2Icon, VideoPlayer, MobilePlayIcon, MobilePlay2Icon },
  data() {
    return {
      show_player: false
    }
  },
  methods: {
    openVideo(val) {
      this.show_player = val
    },
    backgroungImage(image) {
      var image_source = "url('/img/" + image + "')"
      return image_source
    }
  }
}
</script>

<style scoped>
.transparent {
  background-color: rgb(40 78 84 / 40%);
}
</style>
