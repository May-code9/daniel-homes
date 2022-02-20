<template>
  <div class="bg-secondary py-16 px-8 sm:px-12 md:px-16 xl:px-24">
    <div class="aperto-bold text-6xl md:text-7xl xl:text-9xl pt-3 text-center text-primary opacity-30">
      Residential Projects
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6 md:px-16 lg:px-0 -mt-10 xl:-mt-20 relative">
      <div class="relative animate__animated animate__heartBeat animate__backInLeft">
        <img src="/img/affordable_housing.jpg" />
        <div class="absolute top-0 w-full h-full bg_transparent"></div>
        <div class="bg-secondary-3 pt-10 pb-5 text-center relative text-primary">
          <div class="aperto-bold text-2xl xl:text-3xl">Mid-Premium Housing</div>
          <div class="font-jost font-medium pt-2 text-4xl xl:text-5xl">Apartments</div>
          <div class="font-jost text-xl xl:text-2xl font-light pt-5 pb-6">The Sapphire</div>
        </div>
      </div>
      <div class="relative">
        <img src="/img/premium_housing.jpg" />
        <div class="absolute top-0 w-full h-full bg_transparent"></div>
        <div class="bg-secondary-3 pt-10 pb-5 text-center relative text-primary">
          <div class="aperto-bold text-2xl xl:text-3xl">Premium Housing</div>
          <div class="font-jost font-medium pt-2 text-4xl xl:text-5xl">Studios</div>
          <div class="font-jost text-xl xl:text-2xl font-light pt-5 pb-6">The Pearl</div>
        </div>
      </div>
      <div class="relative animate__animated animate__heartBeat animate__backInRight">
        <img src="/img/luxury_housing.jpg" />
        <div class="absolute top-0 w-full h-full bg_transparent"></div>
        <div class="bg-secondary-3 pt-10 pb-5 text-center relative text-primary">
          <div class="aperto-bold text-2xl xl:text-3xl">Luxury Housing</div>
          <div class="font-jost font-medium pt-2 text-4xl xl:text-5xl">Villas</div>
          <div class="font-jost text-xl xl:text-2xl font-light pt-5 pb-6">The Malachite</div>
        </div>
      </div>
    </div>
    <div class="aperto-bold text-6xl md:text-7xl xl:text-8xl pt-20 md:w-3/4 mx-auto text-primary text-center">
      Find your Refuge
    </div>
    <div class="font-jost text-xl xl:text-2xl text-primary md:w-4/5 mx-auto pt-10 pb-6">
      In response to the rising demand for housing, Daniel Homes leverages on modern architecture and technology to
      deliver sustainable communities with building designs, infrastructure, and facilities that make up an environment
      for an ideal lifestyle.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.first_grid {
  background-image: url('/img/affordable_housing.jpg');
  background-position: center;
  background-size: cover;
}
.bg_transparent:hover {
  background-color: rgb(237 231 223 / 25%);
}
</style>
