<template>
  <div class="min-h-screen">
    <Head title="Services | Daniel Homes " />
    <our-services></our-services>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import OurServices from './OurServices.vue'
export default {
  components: { Head, OurServices },
  layout: MasterLayout
}
</script>

<style></style>
