<template>
  <div class="min-h-screen">
    <Head title="News Details " />
    <div class="px-8 sm:px-12 md:px-16 xl:px-24 py-16 bg-secondary">
      <div class="absolute w-full left-0 z-50" v-if="this.$attrs.flash != false && timer != 0">
        <div class="mx-auto max-w-sm">
          <div class="bg-primary-2 px-4 py-4 rounded-md shadow-md flex justify-between">
            <div class="w-full text-white text-center">{{ this.$attrs.flash }}</div>
            <div class="cursor-pointer" @click="closeMessage">
              <close-icon :width="'w-3'" :height="'h-3'" :color="'text-white'"></close-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="aperto-bold text-2xl text-primary-2 pb-3" v-if="$page.props.user && $page.props.user.slot != 0">
        <Link :href="'/admin/news/' + news.id + '/edit'" class="px-4 py-2 mr-3 cursor-pointer">Edit News</Link>
        <div @click="pop = !pop" class="px-4 py-2 mr-3 cursor-pointer inline-block">Delete News</div>
      </div>
      <div class="absolute w-full left-0 z-50" v-if="pop">
        <div class="mx-auto max-w-sm">
          <div class="bg-primary-2 px-4 py-4 rounded-md shadow-md">
            <div>
              <div class="w-full text-white text-center">
                Are you sure you want to delete this news, this action cannot be reversed!
              </div>
              <div class="flex justify-between items-center text-white font-bold pt-3">
                <div class="px-4 py-2 rounded-md bg-secondary-2 cursor-pointer" @click="deleteNews">Yes, Delete</div>
                <div class="px-4 py-2 rounded-md bg-gray-400 cursor-pointer" @click="pop = false">Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img :src="'/img/news/' + news.image" class="w-full animate__animated animate__heartBeat animate__backInLeft" />
      <div class="flex pt-5">
        <div class="flex pr-4">
          <calendar-icon :width="'w-5'" :height="'h-5'"></calendar-icon>
          <span class="font-medium font-jost pl-1">
            <date-created :created_at="news.created_at"></date-created>
          </span>
        </div>
        <!-- <div class="flex">
          <eye-icon :width="'w-5'" :height="'h-5'"></eye-icon>
          <span class="font-medium font-jost pl-1">465</span>
        </div> -->
      </div>
      <div
        class="aperto-bold text-5xl md:text-6xl xl:text-8xl pt-16 leading-8 md:leading-12 text-primary md:text-center"
      >
        {{ news.title }}
      </div>
      <div class="font-jost text-xl xl:text-2xl text-primary pt-10" v-html="news.content"></div>
    </div>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head, Link } from '@inertiajs/inertia-vue3'
import CalendarIcon from '../../Shared/Icons/CalendarIcon.vue'
import EyeIcon from '../../Shared/Icons/EyeIcon.vue'
import DateCreated from '../DateCreated.vue'
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'
export default {
  components: { Head, CalendarIcon, EyeIcon, DateCreated, Link, CloseIcon },
  props: {
    news: Object
  },
  layout: MasterLayout,
  data() {
    return {
      pop: false,
      form: this.$inertia.form({
        password: ''
      }),
      timer: 30
    }
  },
  watch: {
    pop(val) {
      if (val) {
        setTimeout(() => {
          this.pop = false
        }, 10000)
      }
    }
  },
  methods: {
    deleteNews() {
      this.form.delete('/admin/news/' + this.news.id, {
        preserveScroll: true,
        onFinish: () => this.form.reset()
      })
    },
    closeMessage() {
      this.timer = 0
    }
  }
}
</script>

<style></style>
