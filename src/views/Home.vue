<template>
    <hero-section></hero-section>
    <projects-section></projects-section>
    <services-section></services-section>
    <team-section></team-section>
</template>
<script>
import footerSection from '../components/footer-section.vue'
import heroSection from '../components/hero-section.vue';
import projectsSection from '../components/projects-section.vue'
import servicesSection from '../components/services-section.vue'
import teamSection from '../components/team-section.vue'
export default {
    components: { heroSection, projectsSection, servicesSection, teamSection }
}
</script>