<template>
    <div>
        <div v-if="loading">
            Data is loading...
        </div>
        <div v-else>
            <div class="row mb-4" v-for="row in rows" :key="'row-' + row">
                <div class="col d-flex align-items-stretch" v-for="(bookable, col) in bookablesInRow(row)" :key="'col-' + col + 1">
                    <bookable-lisl-item 
                        :item-title="bookable.title" 
                        :item-description="bookable.description" 
                    >
                    </bookable-lisl-item>
                </div>
                <div class="col" v-for="(placeholder, index) in placeholdersInRow(row)" :key="'placeholder-' + index"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import BookableLislItem from './BookableLislItem';

    export default {
        components: {
            BookableLislItem
        },
        data() {
            return {
                bookables: null,
                loading: false,
                cols: 3
            }
        },
        computed: {
            rows(){
                return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.cols);
            }
        },
        methods: {
            bookablesInRow(row){
                return this.bookables.slice((row - 1) * this.cols, row * this.cols);
            },
            placeholdersInRow(row){
                return this.cols - this.bookablesInRow(row).length;
            }
        },  
        created() {
            this.loading = true;

            const request = axios
                .get('/api/bookables')
                .then(response => {
                    this.bookables = response.data;
                    this.loading = false;
                });
        }
    }
</script>