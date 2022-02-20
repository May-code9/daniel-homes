<template>
  <div class="min-h-screen">
    <Head title="Daniel Homes " />
    <list-projects :projects="projects"></list-projects>
    <home-first-layer></home-first-layer>
    <home-news :news_items="news_items"></home-news>
    <know-us></know-us>
    <what-we-do></what-we-do>
    <your-best></your-best>
    <book-consultation></book-consultation>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import KnowUs from './KnowUs.vue'
import HomeFirstLayer from './HomeFirstLayer.vue'
import WhatWeDo from './WhatWeDo.vue'
import YourBest from './YourBest.vue'
import BookConsultation from './BookConsultation.vue'
import ListProjects from './ListProjects.vue'
import HomeNews from './HomeNews.vue'

export default {
  components: { Head, KnowUs, HomeFirstLayer, WhatWeDo, YourBest, BookConsultation, ListProjects, HomeNews },
  props: {
    projects: Array,
    news_items: Array
  },
  layout: MasterLayout
}
</script>

<style></style>
