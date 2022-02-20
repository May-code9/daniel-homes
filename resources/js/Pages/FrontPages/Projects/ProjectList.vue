<template>
  <div class="bg-secondary pt-16 pb-36 px-8 sm:px-12 md:px-16 xl:px-24">
    <div class="absolute w-full left-0 z-50" v-if="flash != false && timer != 0">
      <div class="mx-auto max-w-sm">
        <div class="bg-primary-2 px-4 py-4 rounded-md shadow-md flex justify-between">
          <div class="w-full text-white text-center">{{ flash }}</div>
          <div class="cursor-pointer" @click="closeMessage">
            <close-icon :width="'w-3'" :height="'h-3'" :color="'text-white'"></close-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="flex aperto-bold text-2xl text-primary-2" v-if="$page.props.user && $page.props.user.slot != 0">
      <Link :href="route('projects.create')" class="px-4 py-2 mr-3 cursor-pointer">Add Project</Link>
      <!-- <div class="px-4 py-2 cursor-pointer">Admin List</div> -->
      <div class="px-4 py-2 cursor-pointer" @click="logout">Logout</div>
    </div>
    <div class="aperto-bold text-6xl md:text-7xl xl:text-9xl pt-3 text-center text-primary opacity-30">Projects</div>
    <div class="-mt-10 xl:-mt-20 relative">
      <div class="text-primary">
        <div
          class="bg-cover bg-center h-40 animate__animated animate__heartBeat animate__backInLeft"
          :style="{ 'background-image': backgroungImage('1642831695_9115b9fbbb1f11df6600c6388177c648.jpg') }"
        ></div>
        <div
          class="aperto-bold text-4xl md:text-6xl xl:text-8xl pt-16 leading-8 md:leading-12 md:w-3/4 mx-auto text-primary md:text-center animate__animated animate__heartBeat animate__backInRight"
        >
          A Step Above The Rest
        </div>
        <div
          class="font-jost text-lg md:text-xl xl:text-2xl text-primary md:w-4/5 mx-auto pt-1 md:text-center animate__animated animate__heartBeat animate__backInRight"
        >
          Convenient luxury is the guiding principle for every Daniel Homes development – as projects are built to
          provide best-in-class service delivery, infrastructure, environment, security and style. We build more than
          just residences, we build lifestyles.
        </div>
      </div>
    </div>
    <div class="pt-10" v-for="(item, index) in all_projects" :key="index">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-5 md:gap-y-8">
        <Link :href="'/projects/details/' + item.id">
          <!-- <img :src="'/img/projects/' + item.img" :alt="item.title" /> -->
          <div
            class="bg-cover bg-center h-64 lg:h-72 xl:h-96 animate__animated animate__heartBeat animate__backInLeft"
            :style="{ 'background-image': backgroungImageProject(item.img) }"
          ></div>
        </Link>
        <div class="lg:ml-16 xl:ml-20 text-primary">
          <Link
            :href="'/projects/details/' + item.id"
            class="aperto-bold text-4xl md:text-5xl xl:text-7xl pt-4 xl:pt-6"
            >{{ item.title }}</Link
          >
          <div class="text-base md:text-xl pb-4" v-html="content(item.details)"></div>
          <div class="border-secondary-2 border-t-2"></div>
          <div class="pt-4">
            <div class="font-bold text-lg">Property Type:</div>
            <div>{{ item.type }}</div>
          </div>
          <div class="pt-4">
            <div class="font-bold text-lg">Location:</div>
            <div>{{ item.location }}</div>
          </div>
          <div class="text-center text-white pt-8">
            <div
              @click="form = index"
              class="py-3 w-full cursor-pointer font-semibold bg-primary hover:bg-secondary-4 hover:text-primary"
            >
              Contact
            </div>
          </div>
          <pop-form
            v-if="form == index"
            :message_info="'I like ' + item.title + '. I want to know more about this project.'"
            v-on:open-form="openForm"
          ></pop-form>
        </div>
      </div>
      <div class="shadow-lg mt-6" v-if="item.map != null">
        <iframe :src="item.map" class="w-full h-72" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <Link
        :href="'/projects/details/' + item.id"
        class="w-full block text-primary border mt-6 border-secondary-2 cursor-pointer shadow hover:shadow-lg text-center py-3"
      >
        Get to Know More
      </Link>
      <div class="border-t-2 border-secondary-2 mt-10"></div>
    </div>
  </div>
</template>

<script>
import CalendarIcon from '../../Shared/Icons/CalendarIcon.vue'
import EyeIcon from '../../Shared/Icons/EyeIcon.vue'
import { Link } from '@inertiajs/inertia-vue3'
import DateCreated from '../DateCreated.vue'
import PopForm from '../PopForm.vue'
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'

export default {
  components: { Link, CalendarIcon, EyeIcon, DateCreated, PopForm, CloseIcon },
  props: {
    all_projects: Array,
    flash: [String, Boolean]
  },
  data() {
    return {
      form: null,
      timer: 30
    }
  },
  methods: {
    logout() {
      this.$inertia.post(route('logout'))
    },
    arrayCount() {
      return [
        { img: '/img/projects/sapphire.jpg', name: 'The Sapphire' },
        { img: '/img/projects/emerald.jpg', name: 'The Emerald' }
      ]
    },
    backgroungImage(image) {
      var image_source = "url('/img/news/" + image + "')"
      return image_source
    },
    backgroungImageProject(image) {
      var image_source = "url('/img/projects/" + image + "')"
      return image_source
    },
    openForm(val) {
      this.form = null
    },
    content(val) {
      if (val.length > 120) {
        return val.substring(0, 120) + '...'
      } else {
        return val
      }
    },
    closeMessage() {
      this.timer = 0
    }
  }
}
</script>

<style></style>
