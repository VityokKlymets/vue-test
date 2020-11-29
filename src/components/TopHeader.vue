<template>
  <reached-position
    :positionY="40"
    reachedClass="header_compressed"
    class="top__header"
  >
    <a href="/" class="logo">
      <img :src="logoImage" alt="" class="logo__image" />
    </a>
    <nav :class="[{ active: isActive }, 'top__header__nav']">
      <a
        class="top__header__nav__link"
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        >{{ link.text }}</a
      >
    </nav>
    <header-burger
      @burger-click="burgerClickHandler"
      :isActive="isActive"
    ></header-burger>
  </reached-position>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

import ReachedPosition from "@/components/ReachedPosition.vue";
import HeaderBurger from "@/components/HeaderBurger.vue";

interface ILink {
  href: String;
  text: String;
}

const TopHeader = defineComponent({
  props: {
    logoImage: String,
    links: Object as () => ILink[],
  },
  components: {
    ReachedPosition,
    HeaderBurger,
  },
  setup: () => {
    const isActive = ref(false);

    const burgerClickHandler = () => {
      isActive.value = !isActive.value;
    };

    return {
      isActive,
      burgerClickHandler,
    };
  },
});
export default TopHeader;
</script>

<style lang="sass">
.top__header
  padding: 27px 33px
  display: flex
  align-items: center
  justify-content: flex-start
  position: fixed
  left: 0
  top: 0
  width: 100%
  z-index: 100
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 2
    background-color: #000000
    transition-duration: .5s
  &.header_compressed
    padding: 18px 33px
    .logo__image
      height: 20px

.logo__image
  height: 55px
  transition-duration: 0.7s
  @media (max-width: 1100px)
    height: 45px
  @media (max-width: 1050px)
    height: 35px

.logo
  padding-right: 88px
  min-width: 200px
  z-index: 4
  @media (max-width: 992px)
    flex: 0 0 75px
.top__header__nav
  display: flex
  box-sizing: content-box
  justify-content: space-between
  min-width: 56.8%
  padding: 0 4.04%
  transition: all 0.8s ease 0s
  z-index: 3
  @media (max-width: 992px)
    overflow: auto
    position: fixed
    top: -100%
    left: 0
    box-sizing: border-box
    flex-direction: column
    justify-content: flex-start
    width: 100%
    height: 100%
    background: #000
    padding: 110px 0 20px 0
    &.active
      top: 0

.top__header__nav__link
  letter-spacing: 0.05em
  font-size: 12px
  color: #ffffff
  font-weight: 600
  text-decoration: none
  @media (max-width:992px)
    padding: 5px 36px 10px 36px
    line-height: 1.75
    text-transform: uppercase
  &:hover
    color: gray
    text-decoration: none
</style>