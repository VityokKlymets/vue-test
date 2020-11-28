<template>
  <figure>
    <img
      loading="lazy"
      :src="src"
      alt=""
      :width="width"
      :height="height"
      :srcset="srcset"
      :sizes="sizes"
    />
  </figure>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Image",
  props: {
    src: String,
    width: Number,
    height: Number,
    srcset: String,
    sizes: String,
  },
});
</script>

<style scoped>
img {
  height: auto;
  width: 100%;
  object-fit: contain;
  max-width: 100%;
}
figure {
  display: table;
  margin-bottom: 1rem;
}
</style>