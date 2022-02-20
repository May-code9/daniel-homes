<template>
  <div class="min-h-screen">
    <Head title="Residential Projects | Daniel Homes " />
    <residential-first></residential-first>
    <residential-slide></residential-slide>
    <residential-break></residential-break>
    <book-consultation></book-consultation>
  </div>
</template>

<script>
import MasterLayout from '../../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import ResidentialFirst from './ResidentialFirst.vue'
import BookConsultation from '../../Home/BookConsultation.vue'
import ResidentialBreak from './ResidentialBreak.vue'
import ResidentialSlide from './ResidentialSlide.vue'
export default {
  components: { Head, ResidentialFirst, BookConsultation, ResidentialBreak, ResidentialSlide },
  layout: MasterLayout
}
</script>

<style></style>
