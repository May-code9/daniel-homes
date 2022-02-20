<template>
  <div class="bg-primary" @click="sub_menu = sub_menu + 1">
    <nav-bar :sub_menu="sub_menu"></nav-bar>
    <div>
      <slot></slot>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from './FooterBar.vue'
import NavBar from './NavBar.vue'
export default {
  components: { NavBar, FooterBar },
  data() {
    return {
      sub_menu: 0
    }
  }
}
</script>

<style></style>
