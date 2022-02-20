<template>
  <div class="min-h-screen">
    <Head title="Contact Us | Daniel Homes " />
    <contact-first></contact-first>
    <contact-break></contact-break>
    <contact-book></contact-book>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import ContactFirst from './ContactFirst.vue'
import ContactBreak from './ContactBreak.vue'
import ContactBook from './ContactBook.vue'
export default {
  components: { Head, ContactFirst, ContactBreak, ContactBook },
  layout: MasterLayout
}
</script>

<style></style>
