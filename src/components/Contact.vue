<template>
  <Container>
    <h1>Kontakt &amp; Anfahrt</h1>
    <h2>Wir freuen uns auf Sie</h2>

    <Image
      :width="400"
      :height="109"
      src="http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Logo-Carpe-Diem-Positiv1.jpg"
      alt=""
      srcset="http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Logo-Carpe-Diem-Positiv1.jpg 400w, http://blumen.varion.net/wp-content/uploads/2020/11/https___www.blumen-ambiente.eu_wp-content_uploads_2016_05_Logo-Carpe-Diem-Positiv1-300x82.jpg 300w"
      sizes="(max-width: 400px) 100vw, 400px"
    />

    <p>
      <strong>Carpe Diem Blumen &amp; Ambiente GmbH &amp; Co. KG<br /></strong
      >Lessingstraße 50, 47799 Krefeld<br />Tel: 02151/57 99 66 2<br />Fax:
      02151-5799664<br />E-Mail:&nbsp;<a
        href="mailto:carpe-diem@blumen-ambiente.eu"
        >carpe-diem@blumen-ambiente.eu</a
      >
    </p>
  </Container>
  <Container>
    <div class="row">
      <div class="col-12">
        <h2>Impressum</h2>
      </div>
      <div class="col-xs-12 col-md-6">
        <p>Carpe Diem Blumen und Ambiente GmbH &amp; Co. KG</p>

        <p>47709 Krefeld · Lessing Str. 50</p>

        <p>Telefon: 02151/57 99 66 2<br />Telefax: 0 21 51 / 57 99 66 4</p>

        <p>E-Mail: carpe-diem@blumen-ambiente.eu</p>

        <p>
          Geschäftsführer: Hildegard Peerenboom,<br />Amtsgericht Krefeld: HRB
          11263,<br />Umsatzsteuer-Identifikationsnummer: 117/5702/0574,<br />Inhaltlich
          Verantwortlicher: Hildegard Peerenboom
        </p>

        <p>
          <strong>Haftung für Inhalte</strong><br />Die Inhalte unserer Seiten
          wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
          Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
          für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
          oder Sperrung der Nutzung von Informationen nach den allgemeinen
          Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
          jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
          Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
          Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <p>
          <strong>Haftung für Links</strong><br />Unser Angebot enthält Links zu
          externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
          jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
          der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
          der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </div>
      <div class="col-xs-12 col-md-6">
        <p>
          <strong>Urheberrecht</strong><br />Die durch die Seitenbetreiber
          erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
          und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur für den
          privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
          auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
          Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </div>
  </Container>
</template>

<script>
import { defineComponent } from "vue";
import Container from "./Container.vue";
import Image from "./Image.vue";

export default defineComponent({
  name: "Contact",
  components: {
    Container,
    Image,
  },
});
</script>

<style lang="sass" scoped>
h1,h2
    margin-bottom: 30px

    p
        margin-top: 28px
</style>