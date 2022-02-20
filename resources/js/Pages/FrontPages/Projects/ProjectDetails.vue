<template>
  <div class="min-h-screen">
    <Head title="Project Details " />
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
        <Link :href="'/admin/projects/' + project.id + '/edit'" class="px-4 py-2 cursor-pointer inline-block"
          >Edit Project</Link
        >
        <div @click="pop = !pop" class="px-4 py-2 cursor-pointer inline-block">Delete Project</div>
      </div>
      <div class="absolute w-full left-0 z-50" v-if="pop">
        <div class="mx-auto max-w-sm">
          <div class="bg-primary-2 px-4 py-4 rounded-md shadow-md">
            <div>
              <div class="w-full text-white text-center">
                Are you sure you want to delete this project, this action cannot be reversed!
              </div>
              <div class="flex justify-between items-center text-white font-bold pt-3">
                <div class="px-4 py-2 rounded-md bg-secondary-2 cursor-pointer" @click="deleteProject">Yes, Delete</div>
                <div class="px-4 py-2 rounded-md bg-gray-400 cursor-pointer" @click="pop = false">Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        :src="'/img/projects/' + project.img"
        class="w-full animate__animated animate__heartBeat animate__backInLeft"
      />
      <div
        class="aperto-bold text-5xl md:text-6xl xl:text-8xl pt-16 leading-8 md:leading-12 text-primary text-center"
      >
        {{ project.title }}
      </div>
      <div class="font-jost text-xl xl:text-2xl text-center text-primary pt-10" v-html="project.details"></div>
      <div class="flex justify-between items-center my-6">
        <div class="w-3/4 border-t-2 border-secondary-2"></div>
        <div class="w-1/4 text-center aperto-bold text-2xl text-primary">House Types</div>
        <div class="w-3/4 border-t-2 border-secondary-2"></div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
        <div v-for="(img, index) in project.project_images" :key="index">
          <div class="block md:hidden">
            <img :src="'/img/projects/' + img.img" class="w-full bg-cover bg-center" />
          </div>
          <div class="w-full cursor-pointer hidden md:inline-block" @click="view_image = index">
            <div
              class="bg-cover bg-center h-64 lg:h-72 xl:h-96 animate__animated animate__heartBeat animate__backInLeft"
              :style="{ 'background-image': backgroungImage(img.img) }"
            ></div>
            <div class="aperto-bold text-xl text-primary mt-2">{{ img.type }}</div>
          </div>
          <view-images :img="img.img" v-if="view_image == index" v-on:close-view="closeView"></view-images>
        </div>
      </div>
      <div
        class="py-3 w-full cursor-pointer text-white text-center font-semibold bg-primary hover:bg-secondary-4 hover:text-primary"
        @click="show_form = true"
      >
        Register Interest
      </div>
    </div>
    <pop-form
      v-if="show_form"
      :message_info="'I like ' + project.title + '. I want to know more about this project.'"
      v-on:open-form="openForm"
    ></pop-form>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head, Link } from '@inertiajs/inertia-vue3'
import DateCreated from '../DateCreated.vue'
import PopForm from '../PopForm.vue'
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'
import ViewImages from './ViewImages.vue'
export default {
  components: { Head, DateCreated, Link, PopForm, CloseIcon, ViewImages },
  props: {
    project: Object
  },
  layout: MasterLayout,
  data() {
    return {
      pop: false,
      form: this.$inertia.form({
        password: ''
      }),
      show_form: false,
      timer: 30,
      view_image: null
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
    deleteProject() {
      this.form.delete('/admin/projects/' + this.project.id, {
        preserveScroll: true,
        onFinish: () => this.form.reset()
      })
    },
    openForm(val) {
      this.show_form = val
    },
    closeMessage() {
      this.timer = 0
    },
    backgroungImage(image) {
      var image_source = "url('/img/projects/" + image + "')"
      return image_source
    },
    closeView() {
      this.view_image = null
    }
  }
}
</script>

<style></style>
