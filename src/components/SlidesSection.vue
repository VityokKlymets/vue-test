<template>
  <section class="container">
    <div class="row">
      <div class="col-12 pl-0 mb-4">
        <h1 class="title">{{ title }}</h1>
      </div>
      <div class="col-12 pl-0 mb-4">
        <h3 class="section-text">
          {{ sectionText }}
        </h3>
      </div>
    </div>
    <div class="row">
      <Carousel :slides="slides" />
    </div>
    <div class="row mt-5">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "./Carousel.vue";

export default defineComponent({
  name: "SlidesSection",
  components: {
    Carousel,
  },
  props: {
    title: String,
    sectionText: String,
    slides: Object as () => String[],
  },
});
</script>

<style scoped>
.container {
  padding: 40px 0;
}
.title {
  font-weight: 300;
  font-size: 35px;
  line-height: 1.2;
}
.section-text {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
}
</style>