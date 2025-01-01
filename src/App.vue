<template>
  <navbar></navbar>
  <main><router-view></router-view></main>
  <footer-section></footer-section>
</template>
<script>
import navbar from './components/navbar-section.vue';
import FooterSection from './components/footer-section.vue';
export default {
  components: { navbar, FooterSection }
}
</script>