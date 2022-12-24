<template>
    <div class="d-flex">
        <font-awesome-icon :icon="['fas', 'star']" v-for="star in fullStars" :key="'full' + star"/>
        <font-awesome-icon :icon="['fas', 'star-half-alt']" v-if="halfStar"/>
        <font-awesome-icon :icon="['far', 'star']" v-for="star in emptyStars" :key="'empty' + star"/>
    </div>
</template>

<script>
export default {
    props: {
        rating: Number
    },
    computed: {
        halfStar() {
            const fruction = this.rating - Math.floor(this.rating);
            return fruction > 0 && fruction < 0.5;
        },
        fullStars() {
            // >= 4.5 = 5 stars
            // 4.3 = 4
            return Math.round(this.rating);
        },
        emptyStars() {
            // ceil 1.9 = 2
            return 5 - Math.ceil(this.rating);
        }
    }
}
</script>