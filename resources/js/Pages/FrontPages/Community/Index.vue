<template>
  <div class="min-h-screen">
    <Head title="Community | Daniel Homes " />
    <community-first></community-first>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import CommunityFirst from './CommunityFirst.vue'
export default {
  components: { Head, CommunityFirst },
  layout: MasterLayout
}
</script>

<style></style>
