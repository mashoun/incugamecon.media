<template>
    <section class="container my-5 overflow-hidden">
        <!-- <div class="row justify-content-center g-3" v-if="preview().length == 0" >
            <div class="col-12">
                <p class="text-igc-grey font-monospace text-center">Page Not Found</p>
            </div>
        </div> -->
        <div v-if="preview().length != 0" class="row g-3 align-items-center">
            <div class="col-12 col-lg-3">
                <figure class="ratio ratio-1x1">
                    <img :src="preview()[0].icon" alt="Thumbnail" class="object-fit-cover bg-light rounded">
                </figure>
            </div>
            <div class="col-12 col-lg-9">
                <aside class="d-flex flex-column gap-2 ms-lg-5">
                    <h2 class="font-monti fs-2 text-igc-light">{{ preview()[0].title }}</h2>
                    <p class="fs-5 font-inter text-igc-grey">{{ preview()[0].description }}</p>
                    <br>
                </aside>
            </div>
            <div class="col-12">
                
                <div class="mt-5">
                    <span class="font-monti fs-4 text-igc-light">Offerings:</span>
                <p class="fs-5 font-inter text-igc-grey" v-for="node in preview()[0].offerings">
                    <span>• {{ node }}</span><br>
                </p>
                </div>
            </div>
            <hr class="text-light my-5">
        </div>
        <div class="row g-3 justify-content-center">
            <div class="col-12">
                <h1 class="font-monti text-igc-light text-center">Check Also</h1>
            </div>
            <div class="col-2">
                <div role="button" class="h-100 d-flex justify-content-center align-items-center" @click="slideBack">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle text-secondary" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                </div>
            </div>
            <div class="col-8 col-md-6 col-lg-4">
                <aside>
                    <swiper-container id="check-also-swiper" effect="cards" grab-cursor="true" loop="true">
                        <swiper-slide v-for="node in store.services">
                            <a :href="`/services/${node.id}`">
                                <section class="p-3 py-5 bg-igc-light d-flex flex-column justify-content-between align-items-center gap-3 rounded-md">
                                    <div class="ratio ratio-1x1" style="width: 100px;">
                                        <img :src="node.icon" alt="avatar image" class="rounded object-fit-cover">
                                    </div>
                                    <div class="d-flex flex-column gap-2 w-100">
                                        <strong class="font-monti text-igc-100 fs-small text-uppercase text-center">
                                            {{ node.title }}
                                        </strong>
                                    </div>
                                </section>
                            </a>
                        </swiper-slide>
                    </swiper-container>
                </aside>
            </div>
            <div class="col-2">
                <div role="button" class="h-100 d-flex justify-content-center align-items-center" @click="slideNext">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-circle text-secondary" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import store from '../store.js'
export default {
    data() {
        return {
            store,
            serviceId: this.$route.params.id,
        }
    },
    methods: {
        preview() {
            return this.store.services.filter(e => e.id == this.serviceId)
        },
        slideNext() {
            const swiperEl = document.querySelector('#check-also-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slideNext();
        },
        slideBack() {
            const swiperEl = document.querySelector('#check-also-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slidePrev();
        },
    }
}
</script>