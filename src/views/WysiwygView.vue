<script>
  import { PrismicRichText } from "@prismicio/vue";

  export default {
    name: 'WysiwygView',
    data() {
      return {
        wysiwyg: undefined,
      }
    },
    methods: {
      async getContent() {
        const resp = await this.$prismic.client.getByTag(this.$route.name)

        this.wysiwyg = resp.results[0].data.content;
      }
    },
    created() {
      this.getContent()
    }
  }
</script>

<template>
  <main class="main-loading" v-if="!wysiwyg"></main>
  <main class="container main-simple" v-if="wysiwyg">
    <PrismicRichText :field="wysiwyg" />
  </main>
</template>


