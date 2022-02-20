<template>
  <div>
    <div class="bg-secondary py-16 px-8 sm:px-12 md:px-16 xl:px-24">
      <div class="relative">
        <div
        class="aperto-bold text-3xl md:text-4xl xl:text-5xl text-primary text-center"
      >
        Latest News
      </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 text-primary">
          <div
            v-for="(news, index) in news_items"
            :key="index"
            class="animate__animated animate__heartBeat animate__backInLeft"
          >
            <div class="bg-cover bg-center h-56 md:h-80" :style="{ 'background-image': backgroungImage(news.image) }"></div>
            <div class="pt-7">
              <div class="aperto-bold text-3xl xs:text-4xl" :title="news.title">{{ title(news.title) }}</div>
              <div class="font-jost text-lg xs:text-xl font-medium" v-html="content(news.content)"></div>
              <div class="flex justify-between items-center pt-4 text-sm">
                <div class="flex">
                  <div class="flex pr-4">
                    <calendar-icon :width="'w-5'" :height="'h-5'"></calendar-icon>
                    <span class="font-medium font-jost pl-1">
                      <date-created :created_at="news.created_at" :time="false"></date-created>
                    </span>
                  </div>
                  <!-- <div class="flex">
                  <eye-icon :width="'w-5'" :height="'h-5'"></eye-icon>
                  <span class="font-medium font-jost pl-1">465</span>
                </div> -->
                </div>
                <div class="font-jost font-medium">
                  <Link
                    :href="'/news/details/' + news.id"
                    class="border-2 border-secondary-4 hover:bg-secondary-4 px-3 py-1 cursor-pointer"
                    >Read More</Link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" h-6 w-full bg-secondary-2"></div>
  </div>
</template>

<script>
import CalendarIcon from '../../Shared/Icons/CalendarIcon.vue'
import EyeIcon from '../../Shared/Icons/EyeIcon.vue'
import { Link, Head } from '@inertiajs/inertia-vue3'
import DateCreated from '../DateCreated.vue'

export default {
  components: { Link, CalendarIcon, EyeIcon, DateCreated, Head },
  props: {
    news_items: Array
  },
  methods: {
    logout() {
      this.$inertia.post(route('logout'))
    },
    title(val) {
      if (val.length > 20) {
        return val.substring(0, 20) + '...'
      } else {
        return val
      }
    },
    content(val) {
      if (val.length > 150) {
        return val.substring(0, 150) + '...'
      } else {
        return val
      }
    },
    backgroungImage(image) {
      var image_source = "url('/img/news/" + image + "')"
      return image_source
    }
  }
}
</script>

<style></style>
