<template>
  <Container>
    <div class="row">
      <div class="col-12 mb-4">
        <h1 class="title">{{ title }}</h1>
      </div>
      <div class="col-12 mb-4">
        <h3 class="text">
          {{ text }}
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Carousel :slides="slides" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <slot></slot>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "./Carousel.vue";
import Container from "./Container.vue";

export default defineComponent({
  name: "SlidesSection",
  components: {
    Carousel,
    Container,
  },
  props: {
    title: String,
    text: String,
    slides: Object as () => String[],
  },
});
</script>

<style scoped>
.title {
  font-weight: 300;
  font-size: 35px;
  line-height: 1.2;
}
.text {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
}
</style>