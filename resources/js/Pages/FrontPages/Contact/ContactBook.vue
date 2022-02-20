<template>
  <div>
    <div class="bg-secondary px-8 sm:px-12 md:px-16 xl:px-24 py-20 text-primary">
      <div class="aperto-bold text-5xl md:text-6xl xl:text-7xl">Book a Consultation</div>
      <div class="pt-8">
        <input
          type="text"
          v-model="form.fullname"
          placeholder="What's your name?"
          class="font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
        />
        <div class="border-b border-secondary-4"></div>
      </div>
      <div class="pt-2">
        <input
          type="email"
          v-model="form.email"
          placeholder="We would like to email you..."
          class="pt-8 font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
        />
        <div class="border-b border-secondary-4"></div>
      </div>
      <div class="pt-2">
        <input
          type="text"
          v-model="form.phone"
          placeholder="Let's give you a call..."
          class="pt-8 font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
        />
        <div class="border-b border-secondary-4"></div>
      </div>
      <div class="pt-2">
        <textarea
          v-model="form.message"
          placeholder="Is there anything else?"
          class="pt-8 font-jost text-2xl border-0 focus:ring-0 w-full bg-secondary px-0 placeholder-current"
          rows="4"
        ></textarea
        >
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
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      form: this.$inertia.form({
        _method: 'POST',
        fullname: '',
        email: '',
        phone: '',
        message: '',
        contact: true,
        loading: false
      })
    }
  },
  methods: {
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

<style scoped></style>
