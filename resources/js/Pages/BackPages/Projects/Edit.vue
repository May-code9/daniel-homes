<template>
  <div class="">
    <Head title="Edit Project " />
    <div class="bg-secondary px-10 md:px-16 xl:px-20 py-20 text-primary relative">
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
      <div class="aperto-bold text-5xl md:text-6xl xl:text-7xl">Create Project</div>
      <div class="pt-8 grid grid-cols-2 gap-x-4 gap-y-8">
        <div>
          <div class="pb-3 font-jost text-2xl w-full bg-secondary" v-if="form.title != ''">Project Title</div>
          <input
            type="text"
            v-model="form.title"
            placeholder="Project Title"
            class="font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          />
          <div class="border-b border-secondary-4"></div>
        </div>
        <div>
          <div class="pb-3 font-jost text-2xl w-full bg-secondary" v-if="form.type != ''">Project Type</div>
          <input
            type="text"
            v-model="form.type"
            placeholder="Project Type"
            class="font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          />
          <div class="border-b border-secondary-4"></div>
        </div>
        <div>
          <div class="pb-3 font-jost text-2xl w-full bg-secondary" v-if="form.location != ''">Project Location</div>
          <input
            type="text"
            v-model="form.location"
            placeholder="Project Location"
            class="font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          />
          <div class="border-b border-secondary-4"></div>
        </div>
        <div>
          <div class="pb-3 font-jost text-2xl w-full bg-secondary" v-if="form.map != ''">Add Map</div>
          <input
            type="text"
            v-model="form.map"
            placeholder="Add map"
            class="font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          />
          <div class="border-b border-secondary-4"></div>
        </div>
      </div>
      <div class="pt-5">
        <div class="py-3 font-jost text-2xl w-full bg-secondary">Project Details</div>
        <div id="editor2" class="w-full"></div>
        <div class="border-b border-secondary-4"></div>
      </div>
      <div class="pt-2">
        <div class="grid grid-cols-3 gap-x-6">
          <div>
            <div class="py-3 font-jost text-2xl w-full bg-secondary">Main Image</div>
            <input type="file" @change="upload_avatar" accept="image/png, image/gif, image/jpeg" ref="image" />
            <img :src="get_avatar()" class="w-full rounded-md mt-4 md:mt-6" />
          </div>
        </div>
      </div>
      <div class="pt-8">
        <button
          @click="saveProjects"
          class="py-3 px-14 font-semibold bg-primary text-white hover:bg-secondary-4 hover:text-primary"
        >
          Update Project
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MasterLayout from '../../FrontPages/MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import Swal from 'sweetalert2'
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'

let editor

export default {
  components: { Head, CloseIcon },
  props: {
    project: Object
  },
  layout: MasterLayout,
  data() {
    return {
      form: this.$inertia.form(
        {
          _method: 'PATCH',
          title: '',
          details: this.project.details,
          type: '',
          location: '',
          map: '',
          image: '',
          image2: [],
          image_name: [],
          loading: false
        },
        {
          bag: 'addProjects',
          resetOnSuccess: true
        }
      ),
      view_image: null,
      view_image2: [],
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            '|',
            'link',
            '|',
            'outdent',
            'indent',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'insertTable',
            '|',
            'blockQuote',
            '|',
            'undo',
            'redo'
          ],
          shouldNotGroupWhenFull: true
        }
      },
      timer: 30,
      count_array: [],
      count: 0,
      index_value: null
    }
  },
  methods: {
    upload_avatar(e) {
      let file = e.target.files[0]

      let reader = new FileReader()

      if (file['size'] < 2111775) {
        reader.onload = e => {
          this.view_image = e.target.result
        }

        reader.readAsDataURL(this.$refs.image.files[0])
        this.form.image = this.$refs.image.files[0]
      } else {
        this.form.image = ''
        this.view_image = null
        alert('File size can not be bigger than 2 MB')
      }
    },
    upload_avatar2(e) {
      let file = e.target.files[0]

      let reader = new FileReader()

      if (file['size'] < 2111775) {
        reader.onload = e => {
          this.view_image2.splice(this.index_value, 1, e.target.result)
        }
        if (this.index_value == 0) {
          reader.readAsDataURL(this.$refs.image0[0].files[0])
          this.form.image2.splice(this.index_value, 1, this.$refs.image0[0].files[0])
        } else if (this.index_value == 1) {
          reader.readAsDataURL(this.$refs.image1[0].files[0])
          this.form.image2.splice(this.index_value, 1, this.$refs.image1[0].files[0])
        } else if (this.index_value == 2) {
          reader.readAsDataURL(this.$refs.image2[0].files[0])
          this.form.image2.splice(this.index_value, 1, this.$refs.image2[0].files[0])
        } else if (this.index_value == 3) {
          reader.readAsDataURL(this.$refs.image3[0].files[0])
          this.form.image2.splice(this.index_value, 1, this.$refs.image3[0].files[0])
        } else if (this.index_value == 4) {
          reader.readAsDataURL(this.$refs.image4[0].files[0])
          this.form.image2.splice(this.index_value, 1, this.$refs.image4[0].files[0])
        } else if (this.index_value == 5) {
          reader.readAsDataURL(this.$refs.image5[0].files[0])
          this.form.image2.splice(this.index_value, 1, this.$refs.image5[0].files[0])
        }
      } else {
        this.form.image2.splice(this.index_value, 1, null)
        this.view_image2.splice(this.index_value, 1, null)
        alert('File size can not be bigger than 2 MB')
      }
    },
    get_avatar() {
      //For getting Instant Uploaded Photo
      let photo = this.view_image != null ? this.view_image : ''
      return photo
    },
    get_avatar2(index) {
      //For getting Instant Uploaded Photo
      let photo = this.view_image2[index] != null ? this.view_image2[index] : ''
      return photo
    },
    saveProjects() {
      if (this.validator() == true) {
        this.form.post('/admin/projects/' + this.project.id, {
          onSuccess: () => {
            this.form.reset()
            this.timer = 1
            this.view_image = null
            this.count_array = []
            this.count = 0
          }
        })
      }
    },
    increment() {
      this.count = this.count + 1
      this.count_array.push(this.count)
    },
    decrement() {
      const num = this.count - 1
      this.count = this.count - 1
      this.count_array.splice(num, 1)
      this.view_image2.splice(num, 1)
      this.form.image2.splice(num, 1)
    },
    closeMessage() {
      this.timer = 0
    },
    validator() {
      if (this.form.title != '' && this.form.details != '' && this.form.type && this.form.location) {
        return true
      } else {
        Swal.fire({
          position: 'center',
          icon: 'info',
          text: 'Missing field(s)',
          showConfirmButton: false,
          timer: 2000
        })
      }
    },
    fillForm() {
      if (this.project.id != undefined) {
        this.form.title = this.project.title
        this.form.type = this.project.type
        this.form.location = this.project.location
        this.form.map = this.project.map
        this.view_image = '/img/projects/' + this.project.img
      }
    },
    forCkEditor() {
      ClassicEditor.create(document.querySelector('#editor2'))
        .then(newEditor => {
          editor = newEditor
        })
        .catch(error => {
          console.error(error)
        })
    },
    getData() {
      return editor.getData()
    },
    setData() {
      return editor.setData(this.project.details)
    }
  },
  mounted() {
    this.forCkEditor()
    this.fillForm()
    setTimeout(() => {
      this.setData()
    }, 2000)
  }
}
</script>

<style></style>
