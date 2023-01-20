<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-4">

                <section v-if="post">
                    <h1 class="display-6">{{ post.title }}</h1>
                    <img :src="`${store.imageBasePath}${post.cover_image}`" class="card-img-top" :alt="post.title">
                    <p>{{ post.content }}</p>
                    <div v-if="post.category">
                        <h5>Category: {{ post.category.name }}</h5>
                    </div>
                </section>
                <section v-else>Loading...</section>

            </div>

        </div>
    </div>

</template>

<script>
import axios from 'axios';
import { store } from '../store.js';
export default {
    name: 'SinglePost',
    data() {
        return {
            store,
            post: null,
        }
    },
    methods: {
        getPost() {
            console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response) => {
                console.log(response.data.result);
                if (response.data.success) {
                    console.log(response.data.result);
                    this.post = response.data.result;
                } else {
                    console.log(this.$router);
                    this.$router.push({ name: 'not-found' });

                }
            });
        }
    },
    mounted() {
        this.getPost();
    }

}
</script>

<style lang="scss" scoped>

</style>