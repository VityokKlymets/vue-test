<template>
  <div class="container-fluid" :class="[className]">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Container",
  props: {
    class: String,
  },
  setup: ({ class: className }) => {
    return { className };
  },
});
</script>

<style lang='sass' scoped>
.container-fluid
  padding: 40px 0
</style>

