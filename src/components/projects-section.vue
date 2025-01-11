<template>
    <section class="position-relative">
        <section class="container my-5">
            <div class="row g-3">
                <div class="col-12">
                    <h1 data-aos="zoom-in-up" data-aos-duration="500" class="font-monti text-center text-igc-light my-5">Our Projects</h1>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" class="col-12">
                    <div class="pc-container">
                        <aside v-for="node in store.indexArray(store.projects.slice(0,5))" :key="node.id" class="project-column" :class="{ 'pc-active': node.isActive }" @click="togglePC(node)" :style="`background-image: url(${node.thumbnailSrc});`">
                            <div v-if="node.isActive" class="pc-wrapper bg-glass-dark">
                                <a href="/projects">
                                    <div class="p-4 d-flex flex-column gap-2">
                                        <div class="d-flex align-items-center gap-2 justify-content-between"> 
                                            <strong class="text-igc-light fs-5 font-monti">{{ node.title }}</strong>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" class="text-light" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                        </div>
                                        <p class="fs-xsmall font-inter text-light">{{ node.description }}</p>
                                    </div>
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>

            </div>
        </section>
        
        <div class="sticker top-50 start-0"></div>
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