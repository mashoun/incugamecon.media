<template>
    <section class="position-relative">
        <section class="container my-5">
            <div class="row g-3">
                <div class="col-12">
                    <h1 data-aos="zoom-in-up" data-aos-duration="500" class="font-monti text-center text-igc-light my-5">Our Projects</h1>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" class="col-12">
                    <div class="pc-container">
                        <aside v-for="node in store.indexArray(store.projects)" :key="node.id" class="project-column" :class="{ 'pc-active': node.isActive }" @click="togglePC(node)" :style="`background-image: url(${node.thumbnailSrc});`">
                            <div v-if="node.isActive" class="pc-wrapper bg-glass-dark">
                                <div class="p-4 d-flex flex-column gap-2">
                                    <strong class="text-igc-light fs-5 font-monti">{{ node.title }}</strong>
                                    <p class="fs-xsmall font-inter text-light">{{ node.description }}</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        </section>
        
        <div class="sticker top-0 start-0"></div>
    </section>
    
</template>
<script>
import store from '../store.js'
export default {
    data() {
        return {
            store,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 40
                }
            }
        }
    },
    methods: {
        togglePC(obj) {
            if (!obj.isActive) obj.isActive = !obj.isActive
            this.store.projects.map(node => {
                if (node.id != obj.id) node.isActive = false
            })
        }
    },
    mounted(){
        AOS.init();
    }
}
</script>