<template>
  <ParallaxImage
    imageSrc="http://blumen.varion.net/wp-content/uploads/2020/10/2.jpg"
  ></ParallaxImage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ParallaxImage from "./components/ParallaxImage.vue";

export default defineComponent({
  name: "App",
  components: {
    ParallaxImage,
  },
});
</script>

<style>

</style>
