<template>
    <div class="overflow-hidden">
        <section class="container">
            <div class="row justify-content-center g-3">
                <div class="col-12">
                    <h1 class="font-monti text-igc-light text-center">Our Team</h1>
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
                        <swiper-container id="team-swiper" effect="cards" grab-cursor="true" loop="true">
                            <swiper-slide v-for="node in store.team">
                                <section class="p-3 py-5 bg-igc-light d-flex justify-content-between align-items-center gap-3 rounded-md">
                                    <div class="ratio ratio-1x1" style="width: 200px;">
                                        <img :src="node.avatarSrc" alt="avatar image" :class="`rounded-circle ${!node.isCover ? 'object-fit-cover' : 'object-fit-contain'}`">
                                    </div>
                                    <div class="d-flex flex-column gap-2 w-100">
                                        <strong class="font-monti text-igc-100 fs-4 text-uppercase">
                                            {{ node.name }}
                                        </strong>
                                        <p class="font-inter text-igc-grey fs-xsmall">{{ node.headline }}</p>
                                    </div>
                                </section>
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
    </div>
</template>
<script>
import store from '../store';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        slideNext() {
            const swiperEl = document.querySelector('#team-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slideNext();
        },
        slideBack() {
            const swiperEl = document.querySelector('#team-swiper');
            // console.log(swiperEl.swiper);
            swiperEl.swiper.slidePrev();
        },
    },
    mounted() {
        // this.slideNext()
        // this.slideNext()
    }
}
</script>