<template>
  <div class="top__header">
    <a href="/" class="logo top__header--logo">
      <img :src="logoImage" alt="" class="logo__image" />
    </a>
    <nav class="top__header__nav">
      <a class="top__header__nav__link" href="#trauerfloristik"
        >Trauerfloristik</a
      >
      <a class="top__header__nav__link" href="#wohnambiente">Wohnambiente</a>
      <a class="top__header__nav__link" href="#advent">Advent</a>
      <a class="top__header__nav__link" href="#contact"
        >Kontakt &amp; Anfahrt</a
      >
      <a class="top__header__nav__link" href="#impressum">Impressum</a>
      <a class="top__header__nav__link" href="#datenschutz">Datenschutz</a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const TopHeader = defineComponent({
  props: {
    logoImage: String,
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
}
.top__header--logo {
  padding-right: 88px;
}
.top__header__nav {
  display: flex;
  justify-content: space-between;
  width: 730px;
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
</style>