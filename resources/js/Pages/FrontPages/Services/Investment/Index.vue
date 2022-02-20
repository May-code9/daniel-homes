<template>
  <div class="min-h-screen">
    <Head title="Investment | Daniel Homes " />
    <investment-first></investment-first>
    <book-consultation></book-consultation>
  </div>
</template>

<script>
import MasterLayout from '../../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import BookConsultation from '../../Home/BookConsultation.vue'
import InvestmentFirst from './InvestmentFirst.vue'
export default {
  components: { Head, BookConsultation, InvestmentFirst },
  layout: MasterLayout
}
</script>

<style></style>
