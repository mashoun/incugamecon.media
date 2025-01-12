<template>
    <section class="container my-5">
        <div class="row">
            <div class="col-12">
                <h1 class="font-monti text-igc-light text-center my-3">Our Projects</h1>
            </div>
            <hr class="my-5 text-light">
        </div>
        <div class="row g-3 mb-5" v-for="node in store.indexArray(store.projects)">
            <div :class="`col-12 col-lg-3 ${node.index % 2 == 0 ? 'order-lg-0' : 'order-lg-1'}`">
                <figure class="ratio ratio-1x1">
                    <img :src="node.thumbnailSrc" alt="Thumbnail" class="object-fit-cover rounded">
                </figure>
            </div>
            <div :class="`col-12 col-lg-9 ${node.index % 2 == 0 ? 'order-lg-1' : 'order-lg-0'}`">
                <aside class="d-flex flex-column gap-2">
                    <h2 class="font-monti fs-2 text-igc-light">{{node.title}}</h2>
                    <p class="fs-5 font-inter text-igc-grey">{{ node.description }}</p>
                </aside>
            </div>
            <!-- <hr class="my-5 text-light order-lg-3"> -->
        </div>
    </section>
</template>
<script>
import store from '../store.js'
export default {
    data() {
        return {
            store
        }
    }
}
</script>