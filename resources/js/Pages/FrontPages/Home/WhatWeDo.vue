<template>
  <div class="pt-8 xl:pt-12 bg-secondary-2">
    <div class="xl:grid grid-cols-8">
      <div class="col-span-5 bg-primary py-24 xl:py-48 px-8 sm:px-12 md:px-16 xl:px-24 text-yellow-50">
        <div class="aperto-bold text-5xl md:text-7xl xl:text-8xl">What We Do</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 pt-3 lg:mr-16">
          <div>
            <house-icon :width="'w-6'" :height="'h-auto'"></house-icon>
            <div class="font-jost font-medium text-2xl pt-2">Residential Estates</div>
            <div class="font-jost text-base pt-2">
              At Daniel Homes, we ensure that clients have value for their money. Our residential estates are tailored
              to deliver value to clients ranging from home owners, to tenants and investors.
            </div>
          </div>
          <div>
            <estate-icon :width="'w-6'" :height="'h-auto'"></estate-icon>
            <div class="font-jost font-medium text-2xl pt-2">Commercial Estates</div>
            <div class="font-jost text-base pt-2">
              Armed with knowledge of the most current market trends, We are keen on providing robust solutions for
              development of commercial real estate, which reflects the needs and expectations of different business
              communities, owners and investors.
            </div>
          </div>
          <div>
            <idea-icon :width="'w-6'" :height="'h-auto'"></idea-icon>
            <div class="font-jost font-medium text-2xl pt-2">Real Estate Advisory</div>
            <div class="font-jost text-base pt-2">
              Daniel Homes simplifies the process of accessing the right information important for customers and
              investors to commit towards a product by offering research outcomes, analysis and assessments for the
              benefit of clients.
            </div>
          </div>
          <div>
            <invest-icon :width="'w-6'" :height="'h-auto'"></invest-icon>
            <div class="font-jost font-medium text-2xl pt-2">Investment</div>
            <div class="font-jost text-base pt-2">
              Daniel Homes offers specialized investment vehicles and advisory services to select clients. The
              experience and skills of our team give us access to major deals and opportunities in the real estate
              sector.
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 bg-primary-2 py-16 hidden xl:inline-block">
        <div class="side-crop w-full h-full -ml-20"></div>
      </div>
    </div>
  </div>
</template>

<script>
import EstateIcon from '../../Shared/Icons/EstateIcon.vue'
import HouseIcon from '../../Shared/Icons/HouseIcon.vue'
import IdeaIcon from '../../Shared/Icons/IdeaIcon.vue'
import InvestIcon from '../../Shared/Icons/InvestIcon.vue'
import WhatWeDoImage from '../../Shared/SVGImages/WhatWeDoImage.vue'
export default {
  components: { WhatWeDoImage, HouseIcon, EstateIcon, IdeaIcon, InvestIcon }
}
</script>

<style scoped>
.side-crop {
  max-width: 80%;
  overflow: hidden;
  background-image: url('/img/what_we_do.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
