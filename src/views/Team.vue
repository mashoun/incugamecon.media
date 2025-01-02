<template>
    <section class="container my-5">
        <div class="row g-3 justify-content-center">
            <div class="col-12">
                <h1 class="font-monti my-5 text-igc-light text-center" data-aos="zoom-in" data-aos-delay="500">Our Team  </h1>
            </div>
            <div class="col-12 col-md-6 col-lg-3" v-for="node in store.indexArray(store.team)" :key="node.id">
                <section data-aos="zoom-in-up" :data-aos-delay="node.index * 120" class="p-3 py-5 bg-igc-light d-flex justify-content-between align-items-center gap-3 rounded-md">
                    <div class="ratio ratio-1x1" style="width: 200px;">
                        <img :src="node.avatarSrc" alt="avatar image"
                            :class="`rounded-circle ${!node.isCover ? 'object-fit-cover' : 'object-fit-contain'}`">
                    </div>
                    <div class="d-flex flex-column gap-2 w-100">
                        <strong class="font-monti text-igc-100 fs-4 text-uppercase">
                            {{ node.name }}
                        </strong>
                        <p class="font-inter text-igc-grey fs-xsmall fw-bold">{{ node.headline }}</p>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>
<script>
import store from '../store.js';
export default {
    data() {
        return {
            store
        }
    },
    mounted() {
        AOS.init()
    }
}
</script>