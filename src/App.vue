<template>
  <TopHeader
    logoImage="http://blumen.varion.net/wp-content/uploads/2020/11/Logo_Carpe-Diem_Website-2-uai-720x212-1.png"
    :links="[
      { href: '#hochzeit', text: 'Hochzeit' },
      { href: '#trauerfloristik', text: 'Trauerfloristik' },
      { href: '#wohnambiente', text: 'Wohnambiente' },
      { href: '#advent', text: 'Advent' },
      { href: '#kontakt', text: 'Kontakt & Anfahrt' },
      { href: '#impressum', text: 'Impressum' },
      { href: '#datenschutz', text: 'Datenschutz' },
    ]"
  >
  </TopHeader>
  <ParallaxImage
    :responsive="{ 0: { height: 332 }, 992: { height: 906 } }"
    imageSrc="http://blumen.varion.net/wp-content/uploads/2020/10/1.jpg"
  >
    <Title />
  </ParallaxImage>
  <Content />
  <ParallaxImage
    :responsive="{ 0: { height: 300 }, 992: { height: 492 } }"
    imageSrc="http://blumen.varion.net/wp-content/uploads/2020/10/2.jpg"
  />
  <SlidesSection
    title="Hochzeit"
    text="Festliche Arrangements rund ums Jawort"
    :slides="[
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0190.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0196.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0243.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0244.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0301.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_Haarkranz.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_flowers-5093757_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/flower-3185225_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_wedding-5631610_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0043.jpg',
    ]"
  >
    <p>
      Für den schönsten Tag im Leben binden wir für jeden Anspruch und Geschmack
      das wichtigste Accessoire einer Hochzeit: Den Brautstrauß. Mit dem
      Brautstrauß wird nicht nur die Braut stilvoll in Szene gesetzt: Passend
      zum Brautstrauß fertigen wir das Anstecksträußchen für den Bräutigam, das
      Fahrzeugbukett, die Kirchen- und Tischdekoration. Gerne beraten wir Sie.
      Damit Ihre Hochzeit der schönste Tag in Ihrem Leben wird.
    </p>
  </SlidesSection>
  <ParallaxImage
    :responsive="{ 0: { height: 300 }, 992: { height: 492 } }"
    imageSrc="http://blumen.varion.net/wp-content/uploads/2020/10/3.jpg"
  />
  <SlidesSection
    title="Trauerfloristik"
    text="Stilvoll Abschied nehmen"
    :slides="[
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0190.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0196.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0243.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0244.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0301.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_Haarkranz.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_flowers-5093757_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/flower-3185225_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_wedding-5631610_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0043.jpg',
    ]"
  >
    <p>
      Für den schönsten Tag im Leben binden wir für jeden Anspruch und Geschmack
      das wichtigste Accessoire einer Hochzeit: Den Brautstrauß. Mit dem
      Brautstrauß wird nicht nur die Braut stilvoll in Szene gesetzt: Passend
      zum Brautstrauß fertigen wir das Anstecksträußchen für den Bräutigam, das
      Fahrzeugbukett, die Kirchen- und Tischdekoration. Gerne beraten wir Sie.
      Damit Ihre Hochzeit der schönste Tag in Ihrem Leben wird.
    </p>
  </SlidesSection>
  <ParallaxImage
    :responsive="{ 0: { height: 300 }, 992: { height: 492 } }"
    imageSrc="http://blumen.varion.net/wp-content/uploads/2020/10/4.jpg"
  />

  <SlidesSection
    title="Wohnambiente"
    text="Unsere Ideen für Ihr Zuhause"
    :slides="[
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0190.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0196.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0243.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0244.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0301.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_Haarkranz.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_flowers-5093757_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/flower-3185225_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_wedding-5631610_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0043.jpg',
    ]"
  >
    <p>
      Für den schönsten Tag im Leben binden wir für jeden Anspruch und Geschmack
      das wichtigste Accessoire einer Hochzeit: Den Brautstrauß. Mit dem
      Brautstrauß wird nicht nur die Braut stilvoll in Szene gesetzt: Passend
      zum Brautstrauß fertigen wir das Anstecksträußchen für den Bräutigam, das
      Fahrzeugbukett, die Kirchen- und Tischdekoration. Gerne beraten wir Sie.
      Damit Ihre Hochzeit der schönste Tag in Ihrem Leben wird.
    </p>
  </SlidesSection>
  <ParallaxImage
    :responsive="{ 0: { height: 300 }, 992: { height: 492 } }"
    imageSrc="http://blumen.varion.net/wp-content/uploads/2020/10/5.jpg"
  />
  <SlidesSection
    title="Advent"
    text="Schöne Kränze und Gestecke zur Vorweihnachtszeit"
    :slides="[
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0190.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0196.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0243.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0244.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0301.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_Haarkranz.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_flowers-5093757_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/flower-3185225_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_wedding-5631610_1280.jpg',
      'http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Carpe-Diem-Hochzeit-0043.jpg',
    ]"
  >
    <p>
      Für den schönsten Tag im Leben binden wir für jeden Anspruch und Geschmack
      das wichtigste Accessoire einer Hochzeit: Den Brautstrauß. Mit dem
      Brautstrauß wird nicht nur die Braut stilvoll in Szene gesetzt: Passend
      zum Brautstrauß fertigen wir das Anstecksträußchen für den Bräutigam, das
      Fahrzeugbukett, die Kirchen- und Tischdekoration. Gerne beraten wir Sie.
      Damit Ihre Hochzeit der schönste Tag in Ihrem Leben wird.
    </p>
  </SlidesSection>
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
import { defineComponent } from "vue";

import ParallaxImage from "./components/ParallaxImage.vue";
import TopHeader from "./components/TopHeader.vue";
import Title from "./components/Title.vue";
import Content from "./components/Content.vue";
import SlidesSection from "./components/SlidesSection.vue";
import Container from "./components/Container.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import ScrollTopBtn from "./components/ScrollTopBtn.vue";

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
});
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap")

body
  font-family: sans-serif

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
