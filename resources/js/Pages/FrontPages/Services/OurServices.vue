<template>
  <div class="bg-secondary py-16 px-8 sm:px-12 md:px-16 xl:px-24">
    <div class="aperto-bold text-5xl sm:text-6xl md:text-7xl xl:text-9xl pt-3 text-center text-primary opacity-30">
      Our Services
    </div>
    <div class="bg_about h-52 sm:h-60-screen md:h-72-screen -mt-8 sm:-mt-10 xl:-mt-20 relative animate__animated animate__heartBeat animate__backInLeft"></div>
    <div
      class="aperto-bold text-4xl md:text-5xl xl:text-7xl pt-16 leading-8 md:leading-12 md:w-3/4 mx-auto text-primary md:text-center"
    >
      Ensuring quality delivery and cost-saving opportunities
    </div>
    <div class="font-jost text-xl xl:text-2xl text-primary md:w-4/5 mx-auto pt-10">
      The cornerstone of Daniel Homes is the provision of quality services to all of our clients. Working as a team
      allows us to offer a hands-on approach to every aspect of every process. Our goal is to alleviate the stress
      involved in real estate by providing expert guidance every step of the way.
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-24 pb-8">
      <Link :href="route('residential')" class="relative cursor-pointer h-52 sm:h-96">
        <div
          class="bg-cover bg-center w-full h-full animate__animated animate__heartBeat animate__backInLeft"
          :style="{ 'background-image': backgroungImage('residential.jpg') }"
        ></div>
        <div class="absolute w-full h-full top-0 bottom-0 bg-gradient-to-t from-primary to-transparent bg_transparent">
          <div class="relative h-full">
            <div class="absolute inset-6 max-h-full max-w-full hover:border-2 hover:border-secondary-2"></div>
          </div>
        </div>
        <div class="absolute bottom-6 left-8 md:left-14">
          <div class="text-yellow-50 relative">
            <div class="font-jost font-medium text-lg md:text-xl">BE INSPIRED</div>
            <div class="aperto-bold text-4xl md:text-6xl pt-4">Residential Projects</div>
          </div>
        </div>
      </Link>
      <Link :href="route('commercial')" class="relative cursor-pointer h-52 sm:h-96">
        <div
          class="bg-cover bg-center w-full h-full animate__animated animate__heartBeat animate__backInLeft"
          :style="{ 'background-image': backgroungImage('commercial.jpg') }"
        ></div>
        <div class="absolute w-full h-full top-0 bottom-0 bg-gradient-to-t from-primary to-transparent bg_transparent">
          <div class="relative h-full">
            <div class="absolute inset-6 max-h-full max-w-full hover:border-2 hover:border-secondary-2"></div>
          </div>
        </div>
        <div class="absolute bottom-6 left-8 md:left-14">
          <div class="text-yellow-50 relative">
            <div class="font-jost font-medium text-lg md:text-xl">BE INSPIRED</div>
            <div class="aperto-bold text-4xl md:text-6xl pt-4">Commercial Projects</div>
          </div>
        </div>
      </Link>
      <Link :href="route('advisory')" class="relative cursor-pointer h-52 sm:h-96 col-span-1 lg:col-span-2">
        <div
          class="bg-cover bg-center w-full h-full animate__animated animate__heartBeat animate__backInLeft"
          :style="{ 'background-image': backgroungImage('real_estate.jpg') }"
        ></div>
        <div class="absolute w-full h-full top-0 bottom-0 bg-gradient-to-t from-primary to-transparent bg_transparent">
          <div class="relative h-full">
            <div class="absolute inset-6 max-h-full max-w-full hover:border-2 hover:border-secondary-2"></div>
          </div>
        </div>
        <div class="absolute bottom-6 left-8 md:left-14">
          <div class="text-yellow-50 relative">
            <div class="font-jost font-medium text-lg md:text-xl">BE INSPIRED</div>
            <div class="aperto-bold text-4xl md:text-6xl pt-4">Real Estate Advisory</div>
          </div>
        </div>
      </Link>
      <!-- <Link :href="route('investment')" class="relative cursor-pointer">
        <service-grid-image-4 :width="'w-full'" :height="'h-auto'"></service-grid-image-4>
        <div class="absolute w-full h-full top-0 bottom-0 bg-gradient-to-t from-primary to-transparent bg_transparent">
          <div class="relative h-full">
            <div class="absolute inset-6 max-h-full max-w-full hover:border-2 hover:border-secondary-2"></div>
          </div>
        </div>
        <div class="absolute bottom-6 left-8 md:left-14">
          <div class="text-yellow-50 relative">
            <div class="font-jost font-medium text-lg md:text-xl">BE INSPIRED</div>
            <div class="aperto-bold text-4xl md:text-6xl pt-4">Investment</div>
          </div>
        </div>
      </Link> -->
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: { Link },
  methods: {
    backgroungImage(image) {
      var image_source = "url('/img/" + image + "')"
      return image_source
    }
  }
}
</script>

<style scoped>
.bg_about {
  background-image: url('/img/services_image.jpg');
  background-position: center;
  background-size: cover;
}
.bg_grid_1 {
  background-image: url('/img/services_image2.jpg');
  background-position: center;
  background-size: cover;
}
.bg_transparent {
  background-color: rgb(237 231 223 / 25%);
}
</style>
