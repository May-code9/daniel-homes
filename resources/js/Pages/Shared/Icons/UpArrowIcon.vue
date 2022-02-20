<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block fill-current"
    :class="[width, height]"
    viewBox="0 0 26.531 14.192"
  >
    <path
      v-if="withcolor"
      id="Icon_metro-chevron-thin-down"
      data-name="Icon metro-chevron-thin-down"
      d="M29.437,24.537a1.074,1.074,0,0,0,1.51,0,1.049,1.049,0,0,0,0-1.495l-12.2-12.077a1.074,1.074,0,0,0-1.51,0L5.042,23.042a1.05,1.05,0,0,0,0,1.495,1.074,1.074,0,0,0,1.51,0L18,13.522Z"
      transform="translate(-4.729 -10.655)"
      fill="#c69e6f"
    />
    <path
      v-else
      id="Icon_metro-chevron-thin-down"
      data-name="Icon metro-chevron-thin-down"
      d="M29.437,24.537a1.074,1.074,0,0,0,1.51,0,1.049,1.049,0,0,0,0-1.495l-12.2-12.077a1.074,1.074,0,0,0-1.51,0L5.042,23.042a1.05,1.05,0,0,0,0,1.495,1.074,1.074,0,0,0,1.51,0L18,13.522Z"
      transform="translate(-4.729 -10.655)"
      fill="#fff"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    withcolor: {
      default: true
    }
  }
}
</script>

<style></style>
