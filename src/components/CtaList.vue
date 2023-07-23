<script setup>
defineProps({
  heading: String,
  paragraph: String,
  ctaText: String,
  ctaUrl: String,
  ctaList: Array,
})
</script>

<template>
    <section class="cta-list" v-if="heading || paragraph || ctaText && ctaUrl || ctaList.length > 0">
        <div class="container">
            <h2 v-if="heading">{{ heading }}</h2>
            <p v-if="paragraph">{{ paragraph }}</p>
            <ul>
                <li v-for="item in ctaList">
                    <h3 v-if="item.heading">{{ item.heading }}</h3>
                    <p v-if="item.paragraph">{{ item.paragraph }}</p>
                    <div class="filler"></div>
                    <a v-if="item.ctaUrl && item.ctaText" :href="item.ctaUrl" class="button btn-round">{{ item.ctaText }}</a>
                </li>
            </ul>
            <a v-if="ctaUrl && ctaText" :href="ctaUrl" class="button btn-round">{{ ctaText }}</a>
        </div>
    </section>
</template>

<style scoped>
.cta-list {
    background-color: var(--color-secondary);
    color: #fff;
    margin: -20px 0 20px;
    padding: 60px 0;
}

ul {
    display: flex;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 40px;
    text-align: center;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #000;
    padding: 20px;
    margin-bottom: 0;
}
ul .btn-round {
    padding: 8px 10px;
    font-size: 14px;
}
.filler {
    flex: 1;
}

ul .btn-round {
    border: 2px solid #000;
}
    
@media (min-width: 1024px) {
    ul {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
    }
    ul .btn-round {
        padding: 10px 18px;
        font-size: 18px;
    }
}
</style>
