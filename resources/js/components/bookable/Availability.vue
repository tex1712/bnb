<template>
    <div>
        <h6 class="text-uppercase text-secondary font-weighy-bolder">
            Check Availability
            <span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
            <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
        </h6>
        <div class="row">
            <div class="col-md-6">
                <label for="from">From</label>
                <input 
                    type="text" 
                    name="from" 
                    class="form-control form-control-sm" 
                    placeholder="Start date"
                    v-model="from"
                    @keyup.enter="check"
                    :class="[{'is-invalid': errorFor('from')}]"
                > 
                <div class="invalid-feedback" v-for="(error, index) in errorFor('from')" :key="'from' + index">
                    {{ error }}
                </div>
            </div>
            <div class="col-md-6">
                <label for="to">To</label>
                <input 
                    type="text" 
                    name="to" 
                    class="form-control form-control-sm" 
                    placeholder="End date"
                    v-model="to"
                    @keyup.enter="check"
                    :class="[{'is-invalid': errorFor('to')}]"
                >
                <div class="invalid-feedback" v-for="(error, index) in errorFor('to')" :key="'to' + index">
                    {{ error }}
                </div>
            </div>
        </div>
        <div class="d-grid mt-3">
            <button class="btn btn-secondary" @click="check" :disabled="loading">Check!</button>
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                from: null,
                to: null,
                loading: false,
                status: null,
                errors: null
            };
        },
        methods: {
            check(){
                this.loading = true;
                this.errors = null;

                axios.get(`/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`
                ).then(response => {
                    this.status = response.status;
                }).catch(error => {
                    if(422 === error.response.status){
                        this.errors = error.response.data.errors;
                    }
                    this.status = error.response.status;
                }).then(() => (this.loading = false));
            },
            errorFor(field){
                return this.hasErrors && this.errors[field] ? this.errors[field] : null;
            }
        },
        computed: {
            hasErrors(){
                return 422 === this.status && this.errors !== null;
            },
            hasAvailability(){
                return this.status === 200;
            },
            noAvailability(){
                return this.status === 404;
            }
        }
    }
</script>


<style scoped>
    label {
        font-size: 0.7rem;
        text-transform: uppercase;
        color: grey;
        font-weight: bolder;
    }
</style>