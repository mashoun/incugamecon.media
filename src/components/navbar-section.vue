<template>
    <section class="bg-igc-dark position-sticky z-3 top-0 d-flex justify-content-between gap-2 px-3 px-lg-5 py-3 text-igc-light">
        <a href="/">
            <section data-aos-once="true" data-aos="zoom-in" data-aos-duration="1000">
                <figure class="ratio ratio-1x1" :style="`width: ${store.logo.size};`">
                    <img :src="store.logo.src" alt="logo" class="object-fit-cover">
                </figure>
            </section>
        </a>
        <nav class="d-none d-lg-flex align-items-center justify-content-center gap-4">
            <a data-aos-once="true" data-aos="zoom-in" :data-aos-delay="node.index * 120" class="navi-link fs-5" :class="{'navi-link-active': isActivePage(node.url), 'navi-link':!isActivePage(node.url)}" :href="node.url" v-for="node in store.indexArray(store.navLinks)" >{{ node.name }}</a>
            <a href="/contact"  class="bg-igc-200 px-3 py-2 rounded">Contact Us</a>
        </nav>
        <div class="d-lg-none d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </div>
        <aside class="offcanvas offcanvas-end bg-dark text-igc-light" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
            <div class="offcanvas-body">
                <div class="d-flex flex-column gap-2 align-items-center pt-3">
                    <figure class="ratio ratio-1x1" :style="`width: ${store.logo.size};`">
                        <img :src="store.logo.src" alt="logo" class="object-fit-cover">
                    </figure>
                    <h1 class="fs-1 font-monti text-igc-light">{{ store.title }}</h1>
                    <p class="text-igc-grey fs-small font-inter text-center">{{store.headline}}</p>
                    <br><br>
                    <a :href="node.url" v-for="node in store.navLinks" class="w-100 btn btn-outline-light">{{node.name}}</a>
                    
                    <br>
                    <div role="button" class="fs-smaller text-secondary" data-bs-dismiss="offcanvas" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </div>
            </div>
        </aside>
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
    methods:{
        isActivePage(path) {
            return location.pathname === path
        }
    },
    mounted(){
        AOS.init()
    }
}
</script>