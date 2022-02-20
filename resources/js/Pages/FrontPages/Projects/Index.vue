<template>
  <div class="min-h-screen">
    <Head title="Projects List " />
    <project-list :all_projects="all_projects" :flash="$attrs.flash"></project-list>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import ProjectList from './ProjectList.vue'
export default {
  components: { Head, ProjectList },
  props: {
    all_projects: Array
  },
  layout: MasterLayout
}
</script>

<style></style>
