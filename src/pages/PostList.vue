<template>

    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-sm-12 col-md-3 col-lg-3" v-for=" (post, index) in posts " :key="index">
                <PostCard :post="post" />

            </div>

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