<template>
  <div @click="onClick" :class="[{ active: isActive }, 'header__burger']">
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    isActive: Boolean,
  },
  setup: (props, { emit }) => {
    const { isActive = false } = toRefs(props);

    const onClick = () => {
      emit("burger-click");
    };

    return {
      onClick,
      isActive,
    };
  },
});
</script>

<style lang='sass' scoped>
.header__burger
    display: none
    position: relative
    margin-left: auto
    width: 30px
    height: 20px
    z-index: 3
    cursor: pointer
    @media (max-width: 992px)
        display: block
    span,&::before,&::after
        position: absolute
        content: ''
        background-color: #fff
        left: 0
        width: 100%
        height: 2px
        transition: all 0.8s ease 0s
    span
        top: 9px
    &::after
        bottom: 0
    &.active
        &::before
            transform: rotate(45deg)
            top: 9px
        &::after
            transform: rotate(-45deg)
            bottom: 9px
        span
            transform: scale(0)
</style>