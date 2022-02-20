<template>
  <div class="min-h-screen">
    <Head title="Facility Management | Daniel Homes " />
    <facility-first></facility-first>
    <book-consultation></book-consultation>
  </div>
</template>

<script>
import MasterLayout from '../../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import BookConsultation from '../../Home/BookConsultation.vue'
import FacilityFirst from './FacilityFirst.vue'
export default {
  components: { Head, BookConsultation, FacilityFirst },
  layout: MasterLayout
}
</script>

<style></style>
