<template>
  <div class="bg-secondary">
    <div class="relative w-full pt-40 md:pt-72 pattern_bg text-primary">
      <div class="mx-auto px-12 md:px-0 md:w-2/3 lg:w-1/2 pb-20 lg:pb-52">
        <div class="aperto-bold text-5xl md:text-7xl lg:text-8xl text-center lg:text-left">
          Perfection at it’s peak.
        </div>
        <div class="pt-8 lg:pt-14 pb-16 lg:pb-32 text-xl lg:text-2xl font-jost">
          Flawlessness is a rare commodity in the modern world, but you recognise it when you see it. That’s exactly
          what we have created at Daniel Homes. We build properties on the idea that “good enough” simply never is.
          Designing for discerning people who know excellence is in every detail, it’s the new standard-bearer for
          luxury living.
        </div>
        <Link
          :href="route('about')"
          class="hover:bg-primary px-5 pb-3 pt-6 text-center block lg:inline-block hover:text-gray-50 cursor-pointer"
          :style="{ transition: 'all 0.3s ease-in' }"
        >
          <div class="text-shadow-hover text-3xl lg:text-4xl pt-1 leading-7 aperto-bold">Get to know us better</div>
        </Link>
      </div>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: { Link }
}
</script>

<style scoped>
.pattern_bg {
  background-image: url('/img/logo_in_background_1.png');
}
</style>
