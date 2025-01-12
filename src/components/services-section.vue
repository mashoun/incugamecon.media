<template>
    <section class="position-relative" id="services">
        <section class="container my-5">
            <div class="row g-3">
                <div class="col-12">
                    <h1 data-aos="zoom-in-up" data-aos-delay="500" class="font-monti text-igc-light">Our Services</h1>
                </div>
                <div class="col-12 col-md-6 col-lg-4" v-for="node in store.indexArray(store.services)">
                    <a :aria-label="node.title" :href="`/services/${node.id}`">
                        <section data-aos="flip-up" :data-aos-delay="node.index * 200" class=" position-relative service-box">
                            <div class="sb-icon ratio ratio-1x1" style="width: 150px;">
                                <img :src="node.icon" alt="icon" class="object-fit-cover">
                            </div>
                            <strong class="sb-title text-center fs-5 font-monti">{{ node.title }}</strong>
                            <div class="sb-description">
                                <p class="text-igc-light font-inter text-center">{{ node.description }}</p>
                                <div class="position-absolute bottom-0 end-0 p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" class="text-light" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                </div>
                            </div>
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