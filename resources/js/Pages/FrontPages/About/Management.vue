<template>
  <div class="bg-dh-black px-8 sm:px-12 md:px-16 xl:px-24 pt-10 md:pt-20 pb-56">
    <div class="text-center md:px-10">
      <lion-head :width="'w-20 lg:w-28 mx-auto'"></lion-head>
      <div class="text-yellow-50 aperto-bold text-5xl md:text-6xl xl:text-8xl pt-5">The Management</div>
      <div class="text-yellow-50 font-jost text-lg md:text-xl xl:text-2xl">
        Daniel Homes is guided by the most experienced, knowledgeable &amp; connected leadership in the industry.
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 xl:flex xl:justify-center gap-x-8 xl:gap-x-12 gap-y-10 md:gap-y-20 pt-16 pb-10">
        <div>
          <div class="border-4 border-secondary-2">
            <img src="/img/daniel_imeh.jpg" alt="Daniel Imeh's Image" class="w-full h-full" />
          </div>
          <div class="aperto-bold text-2xl text-center text-yellow-50 pt-8">Daniel Imeh</div>
          <div class="font-jost text-lg -mt-2 text-center text-yellow-50">CEO</div>
        </div>
        <div>
          <div class="border-4 border-secondary-2">
            <img src="/img/cindy_.jpg" alt="Cindy Lethicia's Image" class="w-full h-full" />
          </div>
          <div class="aperto-bold text-2xl text-center text-yellow-50 pt-8">Cindy Lethicia Brochard</div>
          <div class="font-jost text-lg -mt-2 text-center text-yellow-50">Agent, Mauritius</div>
        </div>
        <div>
          <div class="border-4 border-secondary-2">
            <img src="/img/comas_mmaduka.jpg" alt="Barrister Comas Mmaduka's Image" class="w-full h-full" />
          </div>
          <div class="aperto-bold text-2xl text-center text-yellow-50 pt-8">Barrister Comas Mmaduka</div>
          <div class="font-jost text-lg -mt-2 text-center text-yellow-50">Lawyer, Nigeria</div>
        </div>
        <!-- <div>
          <div class="border-4 border-secondary-2">
            <img src="/img/mayowa.jpg" alt="Mayowa Elugbadebo's Image" class="w-full h-full" />
          </div>
          <div class="aperto-bold text-3xl text-center text-yellow-50 pt-8">Mayowa Elugbadebo</div>
          <div class="font-jost text-lg -mt-2 text-center text-yellow-50">Agent, Dubai</div>
        </div>
        <div>
          <div class="border-4 border-secondary-2">
            <img src="/img/emma.jpg" alt="Emmanuel Ibeabuchi's Image" class="w-full h-full" />
          </div>
          <div class="aperto-bold text-3xl text-center text-yellow-50 pt-8">Emmanuel Ibeabuchi</div>
          <div class="font-jost text-lg -mt-2 text-center text-yellow-50">Agent, Nigeria</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import DownArrowIcon from '../../Shared/Icons/DownArrowIcon.vue'
import LionHead from '../../Shared/Icons/LionHead.vue'
import UpArrowIcon from '../../Shared/Icons/UpArrowIcon.vue'
export default {
  components: { LionHead, DownArrowIcon, UpArrowIcon },
  data() {
    return {
      person_1: false,
      person_2: false,
      person_3: false,
      person_4: false
    }
  }
}
</script>

<style></style>
