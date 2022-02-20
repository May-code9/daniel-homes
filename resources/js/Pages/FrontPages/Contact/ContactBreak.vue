<template>
  <div class="md:px-16 xl:px-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 text-center">
      <div class="text-yellow-100 py-16 md:py-36">
        <office-icon :width="'w-20'" :height="'h-20'"></office-icon>
        <div class="aperto-bold text-4xl pt-12">Abuja Office</div>
        <div class="font-jost px-10 pt-2">4 Kudang street, off Monrovia street. Wuse 2 FCT.</div>
      </div>
      <div class="bg_img_center h-60-screen w-full md:w-auto md:h-auto md:hidden lg:inline-block"></div>
      <div class="text-yellow-100 py-16 md:py-36">
        <office-icon :width="'w-20'" :height="'h-20'"></office-icon>
        <div class="aperto-bold text-4xl pt-12">Lagos Office</div>
        <div class="font-jost px-10 pt-2">
          Plot 1038A, Ologun Agbaje Street, off Adeola Odeku Street, VI, Lagos Nigeria
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OfficeIcon from '../../Shared/Icons/OfficeIcon.vue'
export default {
  components: { OfficeIcon }
}
</script>

<style scoped>
.bg_img_center {
  background-image: url('/img/contact_break.jpg');
  background-position: center;
  background-size: cover;
}
</style>
