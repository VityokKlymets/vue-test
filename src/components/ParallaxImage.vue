<template>
  <div
    data-parallax="scroll"
    :data-image-src="imageSrc"
    :style="containerCss"
    class="parallax__container"
  >
    <slot></slot>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted } from "vue";
import jQuery from "jquery";
import "jquery-parallax.js";

export default defineComponent({
  name: "ParallaxImage",
  props: {
    imageSrc: String,
    containerHeight: Number,
  },
  setup: ({ containerHeight = 492 }) => {
    onMounted(() => {
      jQuery(window).trigger("resize").trigger("scroll");
    });

    return {
      containerCss: {
        height: `${containerHeight}px`,
      },
    };
  },
});
</script>

<style scoped>
.parallax__container {
  background: transparent;
}
</style>