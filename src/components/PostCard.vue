<template>
    <div class="card my-card">
        <img :src="`${store.imageBasePath}${post.cover_image}`" class="card-img-top">
        <div class="card-body text-center">
            <h5 class="card-title py-3 text-capitalize">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
            <router-link class="btn btn-primary" :to="{ name: 'single-page', params: { slug: post.slug } }">
                Vedi il post
            </router-link>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'PostCard',
    props: ['post'],
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>

</style>