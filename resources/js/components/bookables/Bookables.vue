<template>
    <div>
        <div v-if="loading">
            Data is loading...
        </div>
        <div v-else>
            <div class="row mb-4" v-for="row in rows" :key="'row-' + row">
                <div class="col" v-for="(bookable, col) in bookablesInRow(row)" :key="'col-' + col + 1">
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
            setTimeout(() => {
                this.bookables = [
                    {
                        title: 'Cheap Villa 01',
                        description: 'A very cheap villa 01'
                    },
                    {
                        title: 'Cheap Villa 02',
                        description: 'A very cheap villa 02'
                    },
                    {
                        title: 'Cheap Villa 03',
                        description: 'A very cheap villa 03'
                    },
                    {
                        title: 'Cheap Villa 04',
                        description: 'A very cheap villa 04'
                    },
                    {
                        title: 'Cheap Villa 05',
                        description: 'A very cheap villa 05'
                    },
                    {
                        title: 'Cheap Villa 06',
                        description: 'A very cheap villa 06'
                    },
                    {
                        title: 'Cheap Villa 07',
                        description: 'A very cheap villa 07'
                    }
                ];
                this.loading = false;
            }, 2000)
        }
    }
</script>