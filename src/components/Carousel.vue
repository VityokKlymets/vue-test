<template>
  <div ref="container" class="owl-carousel">
    <div class="slide" v-for="(src, index) in slides" :key="index">
      <img alt="" :src="src" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

export default defineComponent({
  name: "Carousel",
  props: {
    slides: Object as () => String[],
  },
  setup: () => {
    const container = ref<HTMLDivElement>();
    onMounted(() => {
      if (container.value) {
        $(container.value).owlCarousel({
            items: 5,
            autoplay: true,
            loop: true,
            dots: false,
            margin: 20,
            autoplaySpeed: 1000,
            autoplayTimeout: 3000
        });
      }
    });
    return { container };
  },
});
</script>

<style scoped>
img {
  height: 200px;
  object-fit: cover;
  transform: scale(1);
  transition-duration: 1s;
}
</style>