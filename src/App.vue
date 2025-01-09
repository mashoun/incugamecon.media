<template>
  <loading></loading>
  <navbar-section></navbar-section>
  <main><router-view></router-view></main>
  <footer-section></footer-section>
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