import 'owl.carousel'

declare global {
  interface jQuery {
    owlCarousel: () => jQuery
  }
  interface Window {
    jQuery: jQuery,
    $:jQuery
  }
}
