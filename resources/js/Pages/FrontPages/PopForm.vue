<template>
  <div class="fade w-full h-screen fixed inset-0">
    <div class="flex items-center h-screen max-w-screen-sm mx-auto">
      <div class="px-6 md:px-8 xl:px-12 py-10 text-primary bg-secondary rounded-md w-full relative">
        <div class="absolute right-8 top-6" @click="close">
          <close-icon :width="'w-4'" :height="'h-4'" :color="'text-red-600 cursor-pointer'"></close-icon>
        </div>
        <div class="aperto-bold text-4xl">Register Interest</div>
        <div class="pt-8">
          <input
            type="text"
            v-model="form.fullname"
            placeholder="What's your name?"
            class="font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          />
          <div class="border-b border-secondary-4"></div>
        </div>
        <div class="pt-2">
          <input
            type="email"
            v-model="form.email"
            placeholder="We would like to email you..."
            class="pt-8 font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          />
          <div class="border-b border-secondary-4"></div>
        </div>
        <div class="pt-2">
          <input
            type="text"
            v-model="form.phone"
            placeholder="Let's give you a call..."
            class="pt-8 font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          />
          <div class="border-b border-secondary-4"></div>
        </div>
        <div class="pt-2">
          <textarea
            v-model="form.message"
            placeholder="Is there anything else?"
            class="pt-8 font-jost text-xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
            rows="4"
          ></textarea>
          <div class="border-b border-secondary-4"></div>
        </div>
        <div class="pt-8">
          <button
            @click="sendMessage"
            class="py-3 px-14 font-semibold bg-primary text-white hover:bg-secondary-4 hover:text-primary"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import CloseIcon from '../Shared/Icons/CloseIcon.vue'
export default {
  components: { CloseIcon },
  props: {
    message_info: String
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        fullname: '',
        email: '',
        phone: '',
        message: this.message_info,
        contact: false,
        loading: false
      })
    }
  },
  methods: {
    close() {
      this.$emit('open-form', false)
    },
    sendMessage() {
      if (this.validator()) {
        this.form.loading = true
        this.form.post('/contact/post', {
          onSuccess: () => {
            this.form.reset()
            Swal.fire('Info', 'Message Sent!')
          }
        })
      }
    },
    validator() {
      if (this.form.fullname != '' && this.form.email != '' && this.form.phone != '' && this.form.message != '') {
        return true
      } else {
        Swal.fire('Error', 'Fill all fields')
      }
    }
  }
}
</script>

<style scoped>
.fade {
  background-color: rgba(53, 107, 67, 0.541);
}
</style>
