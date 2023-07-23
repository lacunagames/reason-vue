<script setup>
defineProps({
  heading: String,
  paragraph: String,
  imageUrl: {type: String, required: true},
  ctaText: String,
  ctaUrl: String,
})
</script>

<template>
    <section class="promo" v-if="imageUrl">
        <img :src="imageUrl" />
        <div class="container">
            <h2 v-if="heading" class="h1">{{ heading }}</h2>
            <p v-if="paragraph">{{ paragraph }}</p>
            <a v-if="ctaUrl && ctaText" :href="ctaUrl" class="button btn-round">{{ ctaText }}</a>
        </div>
    </section>
</template>

<style scoped>
    .promo {
        position: relative;
        min-height: 400px;
        overflow: hidden;
        margin-bottom: 20px;
    }
    .container {
        padding-top: 20px;
        padding-bottom: 40px;
    }
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    h2 {
        margin: 20px 0 0;
        padding: 24px;
        color: #fff;
        background-color: var(--color-secondary);
    }
    p {
        max-width: 640px;
        background-color: #fff;
        color: var(--color-secondary);
        margin: 20px 0 0;
        padding: 24px;
    }
    .button {
        margin-top: 20px;
    }
</style>
