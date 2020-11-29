<template>
  <TopHeader :logoImage="data.header.logoImage" :links="data.header.links">
  </TopHeader>

  <ParallaxImage
    :responsive="{ 0: { height: 332 }, 992: { height: 906 } }"
    :imageSrc="data.title.parallaxImage"
  >
    <Title
      :titleText="data.title.titleText"
      :subtitleText="data.title.subtitleText"
    />
  </ParallaxImage>

  <Content />

  <section
    :id="title"
    v-for="(
      { parallaxImage, slideSection: { title, subtitle, text, slides } }, index
    ) in data.sections"
    :key="index"
  >
    <ParallaxImage
      :responsive="{ 0: { height: 300 }, 992: { height: 492 } }"
      :imageSrc="parallaxImage"
    />
    <SlidesSection
      :title="title"
      :slides="slides"
      :subtitle="subtitle"
      :text="text"
    />
  </section>

  <Container>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <iframe
          title="Adventskranz - außergewöhnlich und individuell selber machen"
          width="500"
          height="281"
          src="https://www.youtube.com/embed/XMGNvZ9VBjc?feature=oembed"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  </Container>
  <ParallaxImage
    :responsive="{ 0: { height: 300 }, 992: { height: 492 } }"
    imageSrc="http://blumen.varion.net/wp-content/uploads/2020/10/6.jpg"
  />
  <Contact />
  <Footer />
  <ScrollTopBtn />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import ParallaxImage from "@/components/ParallaxImage.vue";
import TopHeader from "@/components/TopHeader.vue";
import Title from "@/components/Title.vue";
import Content from "@/components/Content.vue";
import SlidesSection from "@/components/SlidesSection.vue";
import Container from "@/components/Container.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import ScrollTopBtn from "@/components/ScrollTopBtn.vue";

// @ts-ignore
import WOW from "wow.js";

import data from "@/data.json";

interface IAppData {
  header: {
    links: String[];
    logoImage: String;
  };
}
export default defineComponent({
  name: "App",
  components: {
    ParallaxImage,
    TopHeader,
    Content,
    Title,
    SlidesSection,
    Container,
    Contact,
    Footer,
    ScrollTopBtn,
  },
  setup: () => {
    onMounted(() => {
      new WOW().init();
    });
    return { data };
  },
});
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap")

body
  font-family: sans-serif
  scroll-behavior: smooth
  @media (max-width:992px)
    &.lock
      overflow: hidden
p
  color: #777777
  margin-bottom: 1rem

strong
  color: #000

a[href^="mailto"]
  color: #303133
  transition: 0.3s
  outline: none
  box-shadow: none
  text-decoration: none

.container
  h2,h3,h4
    margin-bottom: 30px
</style>
