<template>
  <div class="w-full overflow-x-hidden relative">
    <div
      class="h-80-screen flex"
      :class="{
        'w-400-screen': projects.length == 4,
        'w-300-screen': projects.length == 3,
        'w-200-screen': projects.length == 2,
        'w-screen': projects.length == 1
      }"
    >
      <div class="w-full bg-cover bg-center relative z-30" v-for="(item, index) in projects" :key="index">
        <div
          class="w-full h-80-screen bg-cover bg-center"
          :style="{
            'background-image': backgroungImage(index),
            marginLeft: '-' + page_width + 'px',
            transition: 'all 2s ease-in'
          }"
        ></div>
        <div
          class="bg-gradient-to-r from-primary via-gray-600 to-primary-2 opacity-40 absolute bottom-0 w-screen h-52 sm:h-64 lg:h-80"
          :style="{
            marginLeft: '-' + page_width + 'px',
            transition: 'all 2s ease-in'
          }"
        ></div>
        <div
          class="px-8 sm:px-12 md:px-16 xl:px-24 text-white absolute bottom-10 sm:bottom-12 lg:bottom-32 w-full animate__animated animate__bounce"
          :style="{
            marginLeft: '-' + page_width + 'px',
            transition: 'all 2s ease-in'
          }"
        >
          <Link :href="'/projects/details/' + item.id" class="aperto-bold text-3xl xs:text-4xl md:text-5xl">
            {{ item.title }}
          </Link>
          <div class="flex justify-between w-full">
            <div class="animate__animated animate__backInRight">
              <div class="text-sm xs:text-base md:text-xl font-bold">Type:</div>
              <div class="font-bold text-sm xs:text-base">{{ item.type }}</div>
            </div>
            <div class="animate__animated animate__backInLeft">
              <div class="text-sm xs:text-base md:text-xl font-bold">Location:</div>
              <div class="font-bold text-sm xs:text-base">{{ item.location }}</div>
            </div>
          </div>
        </div>
        <div class="absolute w-full sm:w-72 xl:w-96 h-52 xl:h-60 sm:right-5 top-0 sm:top-5 z-50">
          <iframe
            :src="item.map"
            class="w-full h-full animate__animated animate__heartBeat animate__backInLeft"
            :style="{
              marginLeft: '-' + page_width + 'px',
              transition: 'all 2s ease-in'
            }"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="absolute w-full bottom-4 z-50">
      <div class="flex justify-between w-20 mx-auto">
        <div
          class="w-2 h-2 rounded-full"
          v-for="(item, index) in projects"
          :key="index"
          :class="{ 'bg-secondary-2': slide == index, 'bg-white': slide != index }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
  components: { Link },
  props: {
    projects: Array
  },
  data() {
    return {
      page_width: 0,
      slide: 0
    }
  },
  methods: {
    backgroungImage(index) {
      var image_source = "url('/img/projects/" + this.projects[index].img + "')"
      //   var image_source = '/img/projects/' + this.projects[index].img
      return image_source
    },
    pageWidth() {
      return document.getElementById('app').offsetWidth
    },
    switchSlide() {
      var width = this.pageWidth()
      if (this.projects.length != this.slide + 1) {
        var count = this.slide + 1
        this.slide = count
        this.page_width = width * count
      } else if (this.projects.length == this.slide + 1) {
        this.slide = 0
        this.page_width = 0
      }
    }
  },
  mounted() {
    window.setInterval(() => {
      this.switchSlide()
    }, 10000)
  }
}
</script>

<style scoped></style>
