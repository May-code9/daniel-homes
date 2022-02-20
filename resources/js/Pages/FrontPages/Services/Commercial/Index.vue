<template>
  <div class="min-h-screen">
    <Head title="Commercial Projects | Daniel Homes " />
    <commercial-first></commercial-first>
    <commercial-slide></commercial-slide>
    <commercial-break></commercial-break>
    <book-consultation></book-consultation>
  </div>
</template>

<script>
import MasterLayout from '../../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import BookConsultation from '../../Home/BookConsultation.vue'
import CommercialFirst from './CommercialFirst.vue'
import CommercialSlide from './CommercialSlide.vue'
import CommercialBreak from './CommercialBreak.vue'
export default {
  components: { Head, BookConsultation, CommercialFirst, CommercialSlide, CommercialBreak },
  layout: MasterLayout
}
</script>

<style></style>
