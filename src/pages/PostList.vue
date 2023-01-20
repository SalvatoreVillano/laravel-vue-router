<template>
    <div class="row">
        <div class="col-12 col-md-4" v-for=" (post, index) in posts " :key="index">
            <PostCard :post="post" />
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
import PostCard from '../components/PostCard.vue';
export default {
    name: 'PostList',
    components: {
        PostCard
    },
    data() {
        return {
            store,
            posts: [],
        }
    },
    methods: {
        getPosts() {
            axios.get(`${this.store.apiBaseUrl}/projects`).then((response) => {
                console.log(response.data);
                this.posts = response.data.results.data;
            })
        }
    },
    mounted() {
        this.getPosts();
    }
}
</script>

<style lang="scss" scoped>

</style>