<template>
  <div
    :id="id"
    :class="[
      className,
      'container-fluid',
      { 'wow animate__animated animate__fadeInUp': animated },
    ]"
  >
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "Container",
  props: {
    class: String,
    animated: {
      type: Boolean,
      default: true,
    },
    id: String,
  },
  setup: (props) => {
    const { class: className } = toRefs(props);
    return { className };
  },
});
</script>

<style lang='sass' scoped>
.container-fluid
  padding: 40px 0
.container
  @media (min-width:992px)
    padding: 0
</style>

