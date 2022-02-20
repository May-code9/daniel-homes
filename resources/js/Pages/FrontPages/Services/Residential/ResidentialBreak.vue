<template>
  <div class="py-28 px-10 md:px-16 xl:px-24">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 text-center">
      <div class="text-yellow-100">
        <gated-icon :width="'w-20'" :height="'h-20'"></gated-icon>
        <div class="aperto-bold text-3xl xl:text-4xl pt-12">Gated Communities</div>
        <!-- <div class="font-jost px-3 md:px-10 pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
        </div> -->
      </div>
      <div class="text-yellow-100">
        <cctv-icon :width="'w-20'" :height="'h-20'"></cctv-icon>
        <div class="aperto-bold text-3xl xl:text-4xl pt-12">CCTV Protected</div>
        <!-- <div class="font-jost px-3 md:px-10 pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
        </div> -->
      </div>
      <div class="text-yellow-100">
        <fibre-icon :width="'w-20'" :height="'h-20'"></fibre-icon>
        <div class="aperto-bold text-3xl xl:text-4xl pt-12">Fibre Internet</div>
        <!-- <div class="font-jost px-3 md:px-10 pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CctvIcon from '../../../Shared/Icons/CctvIcon.vue'
import FibreIcon from '../../../Shared/Icons/FibreIcon.vue'
import GatedIcon from '../../../Shared/Icons/GatedIcon.vue'
export default {
  components: { GatedIcon, CctvIcon, FibreIcon }
}
</script>

<style></style>
