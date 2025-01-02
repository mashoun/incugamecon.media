<template>
    <section class="position-relative">
        <section class="container my-5">
            <div class="row g-3">
                <div class="col-12">
                    <h1 data-aos="zoom-in-up" data-aos-delay="500" class="font-monti text-igc-light">Our Services</h1>
                </div>
                <div class="col-12 col-md-6 col-lg-4" v-for="node in store.indexArray(store.services)">
                    <a :href="`/services/${node.id}`">
                        <section data-aos="flip-up" :data-aos-delay="node.index * 200" class="service-box">
                            <div class="sb-icon ratio ratio-1x1" style="width: 150px;">
                                <img :src="node.icon" alt="icon" class="object-fit-cover">
                            </div>
                            <strong class="sb-title text-center fs-5 font-monti text-igc-100">{{ node.title }}</strong>
                            <p class="sb-description text-igc-light font-inter text-center">{{ node.description }}</p>
                        </section>
                    </a>
                </div>
            </div>
        </section>
        <div class="sticker top-0 end-0"></div>
    </section>
</template>
<script>
import store from '../store.js'
export default {
    data() {
        return {
            store
        }
    },
    mounted(){
        AOS.init();
    }
}
</script>