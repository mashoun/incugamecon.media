<template>

  <navbar-section></navbar-section>
  <main><router-view></router-view></main>
  <footer-section></footer-section>
</template>
<script>
import NavbarSection from './components/navbar-section.vue';
import FooterSection from './components/footer-section.vue'
export default {
  components: { NavbarSection, FooterSection }
}
</script>