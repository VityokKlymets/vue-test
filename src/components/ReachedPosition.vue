

<template>
  <div @click="onClick" :class="[{ [reachedClass]: isReached }, className]">
    <slot> </slot>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, onUnmounted, ref, toRefs } from "vue";
// component that add additional classes to the container if user reached specific scroll position
export default defineComponent({
  props: {
    positionY: Number,
    reachedClass: String,
    class: String,
    onClick: Function,
  },
  setup: (props) => {
    const { positionY, reachedClass, class: className } = toRefs(props);
    const isReached = ref(false);

    const handleScroll = () => {
      if (positionY?.value) {
        isReached.value = scrollY > positionY.value;
      }
    };

    onMounted(() => {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isReached,
      className,
    };
  },
});
</script>

<style>
</style>