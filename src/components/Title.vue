
<template>
  <div class="title-wrapper">
    <div class="title">
      <h1>Blumen sind das Lächeln der Erde.</h1>
      <h3>Ralph Waldo Emerson</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
});
</script>
<style scoped>
.title-wrapper {
  position: relative;
  height: 100%;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;
}

h1,
h3 {
  font-family: "Architects Daughter", sans-serif;
}

h3 {
  font-weight: 400;
  margin-top: 36px;
}
</style>