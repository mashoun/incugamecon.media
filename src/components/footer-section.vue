<template>
    <section class="px-3 py-5 mt-5 bg-igc-100">
        <section class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <section class="d-flex flex-column gap-2">
                        <!-- <figure class="ratio ratio-1x1" :style="`width: ${store.logo.size};`">
                            <img :src="store.logo.src" alt="logo" class="object-fit-cover">
                        </figure> -->
                        <h1 class="fs-1 text-igc-light font-monti fw-strong text-uppercase">{{ store.title }}</h1>
                        <p class="text-igc-light font-inter fs-small">{{ store.headline }}</p>
                        <div class="d-flex align-items-center gap-2 my-3 flex-wrap">
                            <a :href="node.url" v-for="node in store.footerLinks">
                                <div class="px-2 py-1 fs-small rounded bg-glass-light text-light d-flex align-items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" class="text-light" fill="currentColor" viewBox="0 -960 960 960" width="16"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
                                    <span class="font-monti">{{ node.name }}</span>
                                </div>
                            </a>
                        </div>
                        <hr class="text-igc-light my-5">
                        <p class="text-center font-inter fs-xsmall text-igc-grey">All Rights Reserved - Version {{ store.version }}</p>
                    </section>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import store from '../store.js'
export default {
    data() {
        return {
            store,
        }
    }
}
</script>