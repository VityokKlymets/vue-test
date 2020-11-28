<template>
  <div :class="{ header_compressed: isReachedThePoint }" class="top__header">
    <a href="/" class="logo">
      <img :src="logoImage" alt="" class="logo__image" />
    </a>
    <nav class="top__header__nav">
      <a
        class="top__header__nav__link"
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        >{{ link.text }}</a
      >
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

interface ILink {
  href: String;
  text: String;
}

const TopHeader = defineComponent({
  props: {
    logoImage: String,
    compressPositionY: Number,
    links: Object as () => ILink[],
  },
  setup: ({ compressPositionY = 40 }) => {
    const isReachedThePoint = ref(false);

    const scrollHandler = () => {
      isReachedThePoint.value = scrollY > compressPositionY;
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollHandler);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandler);
    });
    return {
      isReachedThePoint,
    };
  },
});
export default TopHeader;
</script>

<style>
.top__header {
  padding: 27px 33px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}
.logo__image {
  height: 55px;
  transition-duration: 0.7s;
}
.logo {
  padding-right: 88px;
  min-width: 200px;
}
.top__header__nav {
  display: flex;
  box-sizing: content-box;
  justify-content: space-between;
  min-width: 56.8%;
  padding: 0 4.04%;
}
.top__header__nav__link {
  letter-spacing: 0.05em;
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
}
.top__header__nav__link:hover {
  color: gray;
  text-decoration: none;
}

.header_compressed {
  padding: 18px 33px;
}
.header_compressed .logo__image {
  height: 20px;
}
</style>