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
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
} from "vue";

import "jquery-parallax.js";

interface IBreakPointOptions {
  height: number;
}

interface IResponsiveOption {
  [key: number]: IBreakPointOptions;
}

export default defineComponent({
  name: "ParallaxImage",
  props: {
    imageSrc: String,
    containerHeight: { type: Number, default: 492 },
    responsive: Object as () => IResponsiveOption,
  },
  setup: ({ containerHeight, responsive }) => {
    const state = reactive({
      height: containerHeight,
    });

    const checkBreakPoints = () => {
      if (responsive) {
        for (let breakpoint of Object.keys(responsive).reverse()) {
          if (innerWidth > +breakpoint) {
            state.height = responsive[+breakpoint].height;
            return;
          }
        }
      }
    };

    onMounted(() => {
      checkBreakPoints();
      window.addEventListener("resize", checkBreakPoints);
      jQuery(window).trigger("resize").trigger("scroll");
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkBreakPoints);
    });

    const containerCss = computed(() => ({
      height: `${state.height}px`,
    }));

    return {
      containerCss,
    };
  },
});
</script>

<style scoped>
.parallax__container {
  background: transparent;
}
</style>