<template>
  <reached-position
    :onClick="onClick"
    :positionY="820"
    reachedClass="d-flex"
    class="scroll-top"
  >
    <img
      class="scroll-top-image"
      src="http://blumen.varion.net/wp-content/themes/carpe-diem/img/chevron-up.svg"
      alt=""
    />
  </reached-position>
</template>

<script lang='ts'>
import ReachedPosition from "@/components/ReachedPosition.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ReachedPosition },
  setup: () => {
    const onClick = () => {
      window.scrollTo(0, 0);
    };
    return { onClick };
  },
});
</script>

<style lang='sass'>
.scroll-top
    display: none
    align-items: center
    justify-content: center
    position: fixed
    bottom: 20px
    right: 30px
    z-index: 99
    cursor: pointer
    padding: 5px
    border-radius: 2px
    width: 2em
    height: 2em
    border: 1px solid #C0C0C0

.scroll-top-image
    height: 14px
    width: 9px
</style>