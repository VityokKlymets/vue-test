
<template>
  <div class="title-wrapper">
    <div class="title">
      <h1>{{ titleText }}</h1>
      <h3>{{ subtitleText }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    titleText: String,
    subtitleText: String,
  },
});
</script>
<style lang="sass" scoped>
.title-wrapper
  position: relative
  height: 100%

.title
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  text-align: center
  color: white
  width: 100%

h1,
h3
  font-family: "Architects Daughter", sans-serif

h3
  font-weight: 400
  margin-top: 36px

@media (min-width: 1200px)
  h1
    font-size: 4rem
  h3
    font-size: 3rem
</style>