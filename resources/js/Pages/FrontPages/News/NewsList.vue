<template>
  <div class="bg-secondary pt-16 pb-36 px-8 sm:px-12 md:px-16 xl:px-24">
    <Head title="News List " />
    <div class="flex aperto-bold text-2xl text-primary-2" v-if="$page.props.user && $page.props.user.slot != 0">
      <Link :href="route('news.create')" class="px-4 py-2 mr-3 cursor-pointer">Add News</Link>
      <!-- <div class="px-4 py-2 cursor-pointer">Admin List</div> -->
      <div class="px-4 py-2 cursor-pointer" @click="logout">Logout</div>
    </div>
    <div class="absolute w-full left-0" v-if="this.$attrs.flash != false && timer != 0">
      <div class="mx-auto max-w-sm">
        <div class="bg-primary-2 px-4 py-4 rounded-md shadow-md flex justify-between">
          <div class="w-full text-white text-center">{{ this.$attrs.flash }}</div>
          <div class="cursor-pointer" @click="closeMessage">
            <close-icon :width="'w-3'" :height="'h-3'" :color="'text-white'"></close-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="aperto-bold text-6xl md:text-7xl xl:text-9xl pt-3 text-center text-primary opacity-30">News</div>
    <div class="-mt-10 xl:-mt-20 relative">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 text-primary">
        <div
          v-for="(news, index) in all_news"
          :key="index"
          class="animate__animated animate__heartBeat animate__backInLeft"
        >
          <div
            class="bg-cover bg-center h-56 md:h-80"
            :style="{ 'background-image': backgroungImage(news.image) }"
          ></div>
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
</template>

<script>
import CalendarIcon from '../../Shared/Icons/CalendarIcon.vue'
import EyeIcon from '../../Shared/Icons/EyeIcon.vue'
import { Link, Head } from '@inertiajs/inertia-vue3'
import DateCreated from '../DateCreated.vue'
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'

export default {
  components: { Link, CalendarIcon, EyeIcon, DateCreated, Head, CloseIcon },
  props: {
    all_news: Array
  },
  data() {
    return {
      timer: 30
    }
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
    },
    closeMessage() {
      this.timer = 0
    }
  }
}
</script>

<style></style>
