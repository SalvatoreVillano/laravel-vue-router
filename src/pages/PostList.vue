<template>
    <div class="row">
        <div class="col-12 col-md-4" v-for=" (post, index) in posts " :key="index">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="`${store.imageBasePath}${post.cover_image}`" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <p class="card-text">{{ post.content }}</p>
                    <router-link class="btn btn-primary" :to="{ name: 'single-page', params: { slug: post.slug } }">
                        Vedi il post
                    </router-link>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'PostList',
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