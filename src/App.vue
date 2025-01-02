<template>
  <loading></loading>
  <navbar-section></navbar-section>
  <main><router-view></router-view></main>
  <footer-section></footer-section>
  <!-- <div class="sticker-container">
    <div class="sticker" style="top: 0; right: 0;"></div>
  </div> -->
</template>
<script>
import NavbarSection from './components/navbar-section.vue';
import FooterSection from './components/footer-section.vue'
import Loading from './components/loading.vue';
export default {
  components: { NavbarSection, FooterSection, Loading },
  mounted(){
    AOS.init();
  }
}
</script>