<template>
  <div ref="container" class="owl-carousel owl-theme">
    <div class="slide" v-for="(src, index) in slides" :key="index">
      <img alt="" :src="src" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

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
          autoplay: true,
          loop: true,
          margin: 20,
          autoplaySpeed: 1000,
          autoplayTimeout: 3000,
          responsive: {
            0: {
              items: 2,
              dots: true,
            },
            578: {
              dots: false,
              items: 4,
            },
            992: {
              dots: false,
              items: 5,
            },
          },
        });
      }
    });
    return { container };
  },
});
</script>

<style lang='sass' scoped>
img
  height: 200px
  object-fit: cover
  transform: scale(1)
  transition-duration: 1s
  @media (max-width: 992px)
    height: 150px
</style>