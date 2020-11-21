<template>
  <div
    ref="mirrorContainerRef"
    class="parallax__container parallax__container--mirror"
  >
    <img ref="imageRef" class="parallax__image" :src="imageSrc" />
  </div>
  <div ref="containerRef" class="parallax__container"></div>
</template>


<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  name: "ParallaxImage",
  props: {
    imageSrc: String,
  },
  setup: () => {
    const containerRef = ref<HTMLDivElement>();
    const mirrorContainerRef = ref<HTMLDivElement>();
    const imageRef = ref<HTMLImageElement>();

    const handleScroll = () => {
      const { innerHeight: windowHeigth, scrollY } = window;

      const speed = 0.2;

      const mirrorContainer = mirrorContainerRef.value;
      const container = containerRef.value;

      if (mirrorContainer && container) {
        const offsetTop = container.offsetTop;
        const mirrorTranslateY = offsetTop - scrollY;
        const traslateY = mirrorTranslateY * -speed;

        if (scrollY > offsetTop - windowHeigth) {
          mirrorContainer.style.visibility = "visible";
          mirrorContainer.style.transform = `translate(0,${mirrorTranslateY}px)`;
          imageRef.value!.style.transform = `translate(0,${traslateY}px)`;
        } else {
          mirrorContainer.style.visibility = "hidden";
        }
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return { containerRef, imageRef, mirrorContainerRef };
  },
});
</script>

<style scoped>
.parallax__container {
  overflow: hidden;
  visibility: hidden;
  height: 492px;
  width: 100%;
}

.parallax__container--mirror {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.parallax__image {
  position: absolute;
  left: 0;
  top: 0;
  height: 754px;
  width: 100%;
}
</style>