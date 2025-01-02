<template>
    <section v-if="isLoading" style="width: 100vw; height: 100vh;" class="bg-igc-dark position-fixed top-0 z-3"></section>
</template>
<script>
export default {
    data(){
        return{
            isLoading: true
        }
    },
    mounted(){
        this.waitAndTurnOffLoading();
    },
    methods: {
        waitAndTurnOffLoading() {
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        }
    }
}
</script>