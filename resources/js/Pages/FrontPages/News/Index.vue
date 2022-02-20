<template>
  <div class="min-h-screen">
    <Head title="News | Daniel Homes " />
    <news-list :all_news="all_news" :flash="$attrs.flash"></news-list>
  </div>
</template>

<script>
import MasterLayout from '../MasterLayout.vue'
import { Head } from '@inertiajs/inertia-vue3'
import NewsList from './NewsList.vue'
export default {
  components: { Head, NewsList },
  props: {
    all_news: Array
  },
  layout: MasterLayout
}
</script>

<style></style>
