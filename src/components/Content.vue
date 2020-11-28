<template>
  <Container>
    <div class="row pb-4">
      <div class="col-6">
        <h2>Liebe Kunden</h2>
        <p>
          Leidenschaft und Tradition verpflichten. Seit Jahrzehnten sind wir
          stolz auf die Hochwertigkeit unserer Blumen und Pflanzen. Für Ihre
          blumigen Wünsche stehen unsere Floristen mit Erfahrung und
          handwerklicher Kreativität zur Seite.
        </p>
        <p>Unsere Schwerpunkte:</p>
        <p>
          <strong
            >Brautschmuck, Tischschmuck, Trauerfloristik, Wohnambiente,
            Fleurop-Service&nbsp;&amp;&nbsp;Lieferservice</strong
          >
        </p>
        <p>
          Der Einkauf bei regionalen Erzeugern ermöglicht uns höchste Qualität
          und Frische zu gewährleisten.
        </p>
        <p>
          <strong>Öffnungszeiten:</strong>&nbsp;Mo-Fr: 8.30 &nbsp;–
          18.30,&nbsp;Sa: 8.30 – 16.00,&nbsp;So: 10.00 – 12.00
        </p>
        <p><strong>Besondere Öffnungszeiten:&nbsp;</strong></p>
        <ul>
          <li>Ostersonntag 10:00 – 13:00</li>
          <li>Samstag vor Muttertag 08:00 – 18:00</li>
          <li>Muttertag 08:00 &nbsp;– 14:00</li>
          <li>Pfingstsonntag&nbsp; 10:00 – 13:00</li>
          <li>Heiligabend 07:00 – 14:00</li>
          <li>1. Weihnachtstag 10:00 – 12:00</li>
          <li>Silvester 08:00 – 13:00</li>
          <li>Neujahr 10:00 – 12:00<br /></li>
        </ul>

        <p>Rufen Sie uns einfach an unter:<br />02151/57 99 66 2</p>
        <p>
          Oder schreiben Sie uns eine E-Mail an:<br /><a
            href="mailto:carpe-diem@blumen-ambiente.eu"
            >carpe-diem@blumen-ambiente.eu</a
          >
        </p>
      </div>
      <div class="col-6">
        <Image
          src="http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_fleurop-de.jpg"
          :width="238"
          :height="177"
        ></Image>
        <Image
          src="http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_04_kreis-1.png"
          srcset="
              http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_04_kreis-1.png         450w,
              http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_04_kreis-1-300x300.png 300w,
              http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_04_kreis-1-150x150.png 150w
            "
          sizes="(max-width: 360px) 100vw, 360px"
          :width="360"
          :height="360"
        ></Image>
      </div>
    </div>
    <div class="row justify-content-center">
      <Image
        src="http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_Tannenbaum-1.png"
        alt=""
        :width="162"
        :height="130"
        srcset="http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_Tannenbaum-1.png 482w, http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2020_11_Tannenbaum-1-300x241.png 300w"
        sizes="(max-width: 162px) 100vw, 162px"
      >
      </Image>
    </div>
    <div class="row justify-content-center">
      <p>
        <strong>Adventsverkauf:&nbsp;</strong>Sonntag den 22.11.2020 von 10-17
        Uhr
      </p>
    </div>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Image from "./Image.vue";
import Container from "./Container.vue";

export default defineComponent({
  name: "Content",
  components: {
    Image,
    Container,
  },
});
</script>

<style scoped>
ul li {
  color: #777777;
  font-size: 15px;
  line-height: 1.75;
}
</style>