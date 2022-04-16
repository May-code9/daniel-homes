<template>
  <div class="bg-secondary-4">
    <div class="lg:flex">
      <div class="w-full lg:w-2/5 bg_best">
        <!-- <your-best-image :width="'w-full'"></your-best-image> -->
        <div class=""></div>
      </div>
      <div class="lg:pl-5 pt-4 lg:pt-0"></div>
      <div class="pt-20 lg:pt-36 bg-secondary px-8 sm:px-12 md:px-16 xl:px-24 w-full lg:w-3/5 text-primary">
        <div class="text-5xl md:text-7xl xl:text-8xl aperto-bold">Your best life wants to relocate.</div>
        <div class="pt-6 font-jost text-xl md:text-2xl">
          Never one to follow the pack, Daniel Homes leads by doing things its own way. We are committed to building
          projects that are uncommon and sustainably ready for tomorrow’s technology, yet are also aesthetically
          pleasing and practical in today’s world.
        </div>
        <div class="pt-4 pb-8 md:pb-20 text-2xl md:text-4xl aperto-bold">
          <div class="grid grid-cols-2" @mouseover="show_image = 1" @mouseleave="show_image = null">
            <Link href="/projects" class="relative" v-if="show_image != null">
              <div class="opacity-40">
                <completed-image :width="'w-full'" :height="'h-auto'"></completed-image>
              </div>
              <div class="absolute top-24 px-8 text-primary">View Our Projects</div>
            </Link>
            <div class="cursor-pointer px-8 pt-24 pb-10" v-if="show_image != null"></div>
            <div class="cursor-pointer px-8 pt-24 pb-10" v-if="show_image == null">View Our Projects</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <sliding-houses></sliding-houses> -->
  </div>
</template>

<script>
import CompletedImage from '../../Shared/SVGImages/CompletedImage.vue'
// import SlidingHouses from './SlidingHouses.vue'
import { Link } from '@inertiajs/inertia-vue3'
export default {
  components: { CompletedImage, Link },
  data() {
    return {
      show_image: null,
      show_image_2: null
    }
  }
}
</script>

<style scoped>
.background_completed:hover {
  background-image: url('/img/image_1.png');
  transition: 'all 0.3s ease-in';
}
.trans:hover {
  background-color: rgba(53, 53, 53, 0.514);
}
.bg_best {
  background-image: url('/img/your_best.jpg');
  background-position: center;
  background-size: cover;
}
</style>
