<template>
  <div class="">
    <Head title="Edit News " />
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
      <div class="aperto-bold text-5xl md:text-6xl xl:text-7xl">Edit News</div>
      <div class="pt-8">
        <div class="pb-3 font-jost text-2xl w-full bg-secondary" v-if="form.title != ''">News Title</div>
        <input
          type="text"
          v-model="form.title"
          placeholder="News Title"
          class="font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
        />
        <div class="border-b border-secondary-4"></div>
      </div>
      <div class="pt-2">
        <div class="py-3 font-jost text-2xl w-full bg-secondary">News Content</div>
        <div id="editor2" class="w-full"></div>
        <div class="border-b border-secondary-4"></div>
      </div>
      <div class="pt-2">
        <div class="py-3 font-jost text-2xl w-full bg-secondary">News Image</div>
        <div>
          <input type="file" @change="upload_avatar" accept="image/png, image/gif, image/jpeg" ref="image" />
        </div>
        <div class="mt-4 md:mt-6 px-2 md:px-0">
          <img :src="get_avatar()" class="w-full md:w-3/4 mx-auto rounded-md" />
        </div>
      </div>
      <div class="pt-8">
        <button
          @click="updateNews"
          class="py-3 px-14 font-semibold bg-primary text-white hover:bg-secondary-4 hover:text-primary"
        >
          Update News
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MasterLayout from '../../FrontPages/MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Swal from 'sweetalert2'
import CloseIcon from '../../Shared/Icons/CloseIcon.vue'
let editor

export default {
  components: { Head, CloseIcon },
  props: {
    news: Object
  },
  layout: MasterLayout,
  data() {
    return {
      form: this.$inertia.form(
        {
          _method: 'PATCH',
          title: '',
          content: this.news.content,
          image: '',
          loading: false
        },
        {
          bag: 'editNews',
          resetOnSuccess: true
        }
      ),
      view_image: null,
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
      timer: 30
    }
  },
  watch: {
    news() {
      this.fillForm()
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
    get_avatar() {
      //For getting Instant Uploaded Photo
      let photo = this.view_image != null ? this.view_image : ''
      return photo
    },
    updateNews() {
      if (this.validator() == true) {
        this.form.post('/admin/news/' + this.news.id, {
          onSuccess: () => {
            this.form.reset()
            this.timer = 1
            this.view_image = null
          }
        })
      }
    },
    closeMessage() {
      this.timer = 0
    },
    validator() {
      this.form.content = this.getData()
      if (this.form.title != '' && this.form.content) {
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
      if (this.news.id != undefined) {
        this.form.title = this.news.title
        this.view_image = '/img/news/' + this.news.image
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
      return editor.setData(this.news.content)
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
