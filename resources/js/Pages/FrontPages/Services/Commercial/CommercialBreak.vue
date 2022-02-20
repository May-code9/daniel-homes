<template>
  <div class="py-28 px-8 sm:px-12 md:px-16 xl:px-24">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 text-center">
      <div class="text-yellow-100">
        <spacious-icon :width="'w-20'" :height="'h-20'"></spacious-icon>
        <div class="aperto-bold text-3xl xl:text-4xl pt-12">Spacious Area</div>
        <!-- <div class="font-jost px-3 md:px-10 pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
        </div> -->
      </div>
      <div class="text-yellow-100">
        <parking-icon :width="'w-20'" :height="'h-20'"></parking-icon>
        <div class="aperto-bold text-3xl xl:text-4xl pt-12">Easy Parking Access</div>
        <!-- <div class="font-jost px-3 md:px-10 pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
        </div> -->
      </div>
      <div class="text-yellow-100">
        <eco-friendly-icon :width="'w-20'" :height="'h-20'"></eco-friendly-icon>
        <div class="aperto-bold text-3xl xl:text-4xl pt-12">Eco-friendly</div>
        <!-- <div class="font-jost px-3 md:px-10 pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import EcoFriendlyIcon from '../../../Shared/Icons/EcoFriendlyIcon.vue'
import ParkingIcon from '../../../Shared/Icons/ParkingIcon.vue'
import SpaciousIcon from '../../../Shared/Icons/SpaciousIcon.vue'
export default {
  components: { SpaciousIcon, ParkingIcon, EcoFriendlyIcon }
}
</script>

<style></style>
