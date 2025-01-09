<template>
    <section class="container my-5">
        
        
        <div class="row justify-content-center g-3">
            <div class="col-12">
                <h1 class="font-monti text-igc-light text-center my-3">Contact Us</h1>
            </div>
            <div class="col-12 col-lg-8">
                <div class="row g-3">
                    <div class="col-12">
                        <a :href="'mailto:'+store.contact.email">
                            <aside class="bg-light rounded p-3 d-flex align-items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-envelope text-igc-200" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                                <strong class="font-monti fs-5">{{ store.contact.email }}</strong>
                            </aside>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-8">
                <aside class="bg-light rounded p-3 d-flex flex-column gap-2">
                    <input v-model.trim="form.name" type="text" id="name" class="form-control" placeholder="Name">
                    <input v-model.trim="form.subject" type="text" id="name" class="form-control" placeholder="Subject">
                    <textarea v-model.trim="form.message" name="message" id="message" class="form-control" placeholder="Type your message.." rows="8"></textarea>
                    <a :href="sendMessage" class="btn btn-dark">Submit</a>
                </aside>
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
            form:{
                name:'',
                subject:'',
                message:''
            }
        }
    },
    computed:{
        sendMessage() {
            return `mailto:${this.store.contact.email}?subject=${encodeURIComponent(this.form.subject)}&body=${encodeURIComponent('Name: ' + this.form.name + ' - \n\n' + this.form.message)}`
        }
    }
}
</script>