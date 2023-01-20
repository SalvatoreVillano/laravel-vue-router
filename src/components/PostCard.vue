<template>
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