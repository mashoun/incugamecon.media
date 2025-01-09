<template>
    <div class="full-section">
        <section class="container">
            <div class="row">
                <div class="col-12">
                    <section class="d-flex flex-column gap-5 text-igc-light">
                        <h1 data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000" class="text-center display-3 font-monti fw-bolder">{{ store.hero.title }}</h1>
                        <p data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="1500" class="text-center font-inter px-2" style="opacity: .88; color: white;">
                            <span  v-for="node in store.hero.descriptions" >{{ node }} <br></span>
                        </p>
                    </section>
                </div>
            </div>
        </section>
        <div class="sticker top-50 end-0"></div>
    </div>
</template>
<script>
import store from '../store';
export default {
    data() {
        return { store }
    },
    mounted(){
        AOS.init()
    }
}
</script>