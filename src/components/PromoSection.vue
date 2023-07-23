<script setup>
import IconFingerprint from './icons/IconFingerprint.vue'
defineProps({
  heading: String,
  paragraph: String,
  imageUrl: {type: String, required: true},
  ctaText: String,
  ctaUrl: String,
})
</script>

<template>
    <section class="promo-section" v-if="imageUrl">
        <div class="img-wrap"><img :src="imageUrl" /></div>
        <div class="text-wrap" v-if="heading || paragraph || ctaUrl && ctaText">
            <div class="text-wrap-inner">
                <h2 v-if="heading" class="h2">{{ heading }}</h2>
                <p v-if="paragraph">{{ paragraph }}</p>
                <a v-if="ctaUrl && ctaText" :href="ctaUrl" class="button btn-round">{{ ctaText }}</a>
                <IconFingerprint />
            </div>
        </div>
    </section>
</template>

<style scoped>
.promo-section {
    position: relative;
    min-height: 400px;
    overflow: hidden;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
.text-wrap {
    background-color: var(--color-accent);
    color: #fff;
}
.text-wrap-inner {
    position: relative;
    padding: 0 14px 40px;
    height: 100%;
    overflow: hidden;
}
svg {
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    pointer-events: none;
}
.img-wrap {
    min-height: 300px;
    position: relative;
}
img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
h2 {
    margin: 20px 0 0;
}
p {
    margin: 20px 0 0;
}
.button {
    margin-top: 20px;
}
    
@media (min-width: 768px) {
    .promo-section {
        flex-direction: row;
    }
    .img-wrap, .text-wrap {
        width: 50%;
    }
    .text-wrap-inner {
        padding: 20px 34px 60px;
        max-width: 640px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: end;
    }
}
</style>
