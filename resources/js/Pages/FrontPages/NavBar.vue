<template>
  <div class="bg-primary py-8 lg:pt-32 lg:pb-12 px-10 lg:px-24 aperto text-xl" @click="show_extra = null">
    <div class="lg:flex justify-between items-center text-gray-200 hidden">
      <div>
        <Link :href="route('about')" class="">About Us</Link>
      </div>
      <div class="relative" @mouseover="show_extra = 0">
        <div class="flex">
          <Link :href="route('services')" class="w-full">Services</Link>
          <div class="pl-2 cursor-pointer" v-if="show_extra == null">
            <down-arrow-icon :width="'w-2'" :height="'h-auto'" :withcolor="false"></down-arrow-icon>
          </div>
          <div class="pl-2 cursor-pointer" v-if="show_extra == 0">
            <up-arrow-icon :width="'w-2'" :height="'h-auto'" :withcolor="false"></up-arrow-icon>
          </div>
        </div>
        <div class="absolute bg-primary pt-5 text-center w-52 z-50" v-if="show_extra == 0">
          <div class="relative">
            <Link class="px-6 py-1 block border-b border-t border-primary-2 cursor-pointer" :href="route('residential')"
              >Residential Projects</Link
            >
            <Link class="px-6 py-1 block border-b border-primary-2 cursor-pointer" :href="route('commercial')"
              >Commercial Projects</Link
            >
            <Link class="px-6 py-1 block border-b border-primary-2 cursor-pointer" :href="route('advisory')"
              >Real Estate Advisory</Link
            >
            <!-- <Link class="px-6 py-1 block border-t border-primary-2 cursor-pointer" :href="route('investment')"
              >Investment</Link
            > -->
          </div>
        </div>
      </div>
      <div><Link :href="route('projects')" class="w-full">Projects</Link></div>
      <div class="-mt-14 xl:-mt-24 w-32 xl:w-52">
        <Link :href="route('home')" class="w-full">
          <logo-icon :width="'w-full'" :height="'h-auto'"></logo-icon>
        </Link>
      </div>
      <div>
        <Link :href="route('community')" class="w-full">Community</Link>
      </div>
      <div>
        <Link :href="route('news')" class="w-full">News</Link>
      </div>
      <div>
        <Link :href="route('contact')" class="w-full">Contact Us</Link>
      </div>
    </div>
    <div class="text-gray-200 flex items-center justify-between lg:hidden">
      <div class="w-28">
        <Link :href="route('home')" class="w-full">
          <logo-2-icon :width="'w-full'" :height="'h-auto'"></logo-2-icon>
        </Link>
      </div>
      <div @click="mobile = !mobile">
        <menu-icon :width="'w-8'" :height="'h-8'"></menu-icon>
      </div>
    </div>
    <div id="mobile_menu" class="absolute right-0 w-72 z-40 bg-primary-2 rounded-md" v-if="mobile">
      <div class="relative px-7 py-4 text-yellow-100">
        <div>
          <Link @click="mobile = false" :href="route('about')" class="w-full py-2 block">About Us</Link>
        </div>
        <div class="">
          <div class="flex items-center">
            <Link @click="mobile = false" :href="route('services')" class="w-full py-2">Services</Link>
            <div class="px-5 cursor-pointer" v-if="show_extra_mobile == null" @click="show_extra_mobile = 0">
              <down-arrow-icon :width="'w-2'" :height="'h-auto'" :withcolor="false"></down-arrow-icon>
            </div>
            <div class="px-5 cursor-pointer" v-if="show_extra_mobile == 0" @click="show_extra_mobile = null">
              <up-arrow-icon :width="'w-2'" :height="'h-auto'" :withcolor="false"></up-arrow-icon>
            </div>
          </div>
          <div class="bg-primary text-right w-full z-30" v-if="show_extra_mobile == 0">
            <div class="relative">
              <Link
                class="px-6 py-1 block border-b border-t border-primary-2 cursor-pointer"
                :href="route('residential')"
                @click="mobile = false"
                >Residential Projects</Link
              >
              <Link
                @click="mobile = false"
                class="px-6 py-1 block border-b border-primary-2 cursor-pointer"
                :href="route('commercial')"
                >Commercial Projects</Link
              >
              <Link
                @click="mobile = false"
                class="px-6 py-1 block border-b border-primary-2 cursor-pointer"
                :href="route('advisory')"
                >Real Estate Advisory</Link
              >
              <!-- <Link
                @click="mobile = false"
                class="px-6 py-1 block border-b border-primary-2 cursor-pointer"
                :href="route('investment')"
                >Investment</Link
              > -->
            </div>
          </div>
        </div>
        <div>
          <Link @click="mobile = false" :href="route('projects')" class="w-full py-2 block">Projects</Link>
        </div>
        <div>
          <Link @click="mobile = false" :href="route('community')" class="w-full py-2 block">Community</Link>
        </div>
        <div>
          <Link @click="mobile = false" :href="route('news')" class="w-full py-2 block">News</Link>
        </div>
        <div>
          <Link @click="mobile = false" :href="route('contact')" class="w-full py-2 block">Contact Us</Link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from '../Shared/SVGImages/LogoIcon.vue'
import { Link } from '@inertiajs/inertia-vue3'
import DownArrowIcon from '../Shared/Icons/DownArrowIcon.vue'
import UpArrowIcon from '../Shared/Icons/UpArrowIcon.vue'
import MenuIcon from '../Shared/Icons/MenuIcon.vue'
import Logo2Icon from '../Shared/SVGImages/Logo2Icon.vue'

export default {
  components: { LogoIcon, Link, DownArrowIcon, UpArrowIcon, MenuIcon, Logo2Icon },
  props: {
    sub_menu: [String, Number]
  },
  data() {
    return {
      show_extra: null,
      show_extra_mobile: null,
      mobile: false
    }
  },
  watch: {
    sub_menu() {
      this.show_extra = null
    }
  }
}
</script>

<style></style>
