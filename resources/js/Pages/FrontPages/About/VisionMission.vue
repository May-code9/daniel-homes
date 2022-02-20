<template>
  <div class="bg-secondary-2 pt-4">
    <div class="xl:grid grid-cols-8">
      <div class="col-span-3 bg-secondary xl:py-16 hidden xl:inline-block">
        <div class="side-crop w-full h-full ml-44 relative"></div>
      </div>
      <div class="col-span-5 bg-secondary-5 py-24 xl:py-48 px-8 sm:px-12 md:px-16 xl:px-24 text-primary">
        <div class="aperto-bold text-6xl xl:text-8xl">Our Vision</div>
        <div class="font-jost text-xl xl:text-2xl -mt-3">
          Is to be the leading real estate service provider in the Africa. We consistently strive to develop
          collaborative partnerships, based on transparency and mutual trust, which serve to build enduring client
          relationships.
        </div>
        <div class="border-b border-secondary-2 pt-14"></div>
        <div class="aperto-bold text-6xl xl:text-8xl pt-16">Our Mission</div>
        <div class="font-jost text-xl xl:text-2xl -mt-3">
          We’re dedicated to achieving our vision by creating an energetic, positive, results-driven work environment
          focused on the investment and development of long-term relationships. We measure our success by the results
          delivered to clients.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.side-crop {
  max-width: 80%;
  overflow: hidden;
  background-image: url('/img/about_image2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
