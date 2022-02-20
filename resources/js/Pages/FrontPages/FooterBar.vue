<template>
  <div class="bg-primary-2 pt-3">
    <div class="bg-primary pt-16 lg:pt-24 pb-7 md:pb-11 px-8 sm:px-12 md:px-16 xl:px-24">
      <div class="lg:flex justify-between items-center text-center lg:text-left">
        <div class="">
          <logo-2-icon :width="'w-40 md:w-52'" :height="'h-auto'" :linear_id="'footer-logo'"></logo-2-icon>
        </div>
        <div class="pt-10 lg:pt-0">
          <div class="text-gray-50">
            <div class="lg:flex">
              <div class="lg:w-52 lg:mr-16">
                <div class="aperto-bold text-xl md:text-2xl">We Are Here</div>
                <div class="font-jost text-base md:text-lg">4 Kudang street, off Monrovia street. Wuse 2 FCT.</div>
              </div>
              <div class="lg:w-48 pt-10 lg:pt-0">
                <div class="aperto-bold text-xl md:text-2xl">Reach Us At</div>
                <div class="font-jost text-base md:text-lg">
                  01-4962409 <br class="hidden lg:inline-block" />
                  <span class="pl-5 lg:pl-0">01-4960783</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-28 md:flex justify-between items-center">
        <div class="text-gray-50 font-jost text-center md:text-left text-base md:text-lg">
          © <Link href="/login"> Copyright</Link> {{ year() }} Daniel Homes Limited.
        </div>
        <div>
          <div class="text-center pt-6 md:pt-0 md:float-right">
            <div
              class="cursor-pointer inline-block pr-2"
              @mouseover="instagram_active = true"
              @mouseleave="instagram_active = false"
            >
              <instagram-icon v-if="!instagram_active" :width="'w-8'" :height="'h-8'"></instagram-icon>
              <instagram-2-icon v-if="instagram_active" :width="'w-8'" :height="'h-8'"></instagram-2-icon>
            </div>
            <div
              class="cursor-pointer inline-block pr-2"
              @mouseover="facebook_active = true"
              @mouseleave="facebook_active = false"
            >
              <facebook-icon v-if="!facebook_active" :width="'w-8'" :height="'h-8'"></facebook-icon>
              <facebook-2-icon v-if="facebook_active" :width="'w-8'" :height="'h-8'"></facebook-2-icon>
            </div>
            <div
              class="cursor-pointer inline-block"
              @mouseover="linkedin_active = true"
              @mouseleave="linkedin_active = false"
            >
              <linkedin-icon v-if="!linkedin_active" :width="'w-8'" :height="'h-8'"></linkedin-icon>
              <linkedin-2-icon v-if="linkedin_active" :width="'w-8'" :height="'h-8'"></linkedin-2-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Facebook2Icon from '../Shared/Icons/Facebook2Icon.vue'
import FacebookIcon from '../Shared/Icons/FacebookIcon.vue'
import Instagram2Icon from '../Shared/Icons/Instagram2Icon.vue'
import InstagramIcon from '../Shared/Icons/InstagramIcon.vue'
import Linkedin2Icon from '../Shared/Icons/Linkedin2Icon.vue'
import LinkedinIcon from '../Shared/Icons/LinkedinIcon.vue'
import Logo2Icon from '../Shared/SVGImages/Logo2Icon.vue'
import { Link } from '@inertiajs/inertia-vue3'
export default {
  components: {
    Logo2Icon,
    Instagram2Icon,
    InstagramIcon,
    Facebook2Icon,
    FacebookIcon,
    LinkedinIcon,
    Linkedin2Icon,
    Link
  },
  data() {
    return {
      instagram_active: false,
      facebook_active: false,
      linkedin_active: false
    }
  },
  methods: {
    year() {
      var year = new Date().getFullYear()
      return year
    }
  }
}
</script>

<style></style>
