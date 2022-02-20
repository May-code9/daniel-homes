<template>
  <div class="min-h-screen">
    <Head title="About | Daniel Homes " />
    <about-first-layer></about-first-layer>
    <vision-mission></vision-mission>
    <management></management>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import AboutFirstLayer from './AboutFirstLayer.vue'
import VisionMission from './VisionMission.vue'
import Management from './Management.vue'
export default {
  components: { Head, AboutFirstLayer, VisionMission, Management },
  layout: MasterLayout
}
</script>

<style></style>
