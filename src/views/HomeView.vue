<script setup>
import { ref } from 'vue'
import PromoMain from '../components/PromoMain.vue'
import PromoSection from '../components/PromoSection.vue'
import HelpForm from '../components/HelpForm.vue'
import CtaList from '../components/CtaList.vue'

const ctaList = [
  {
    heading: 'Get Online Week', 
    paragraph: 'The biggest digital inclusion campaign in the UK and Australia, taking place in October each year.',
    ctaText: 'Read more',
    ctaUrl: '/',
  },
  {
    heading: 'Learn my way', 
    paragraph: 'A free platform for digital learning, providing digital skills and increased confidence to those supported by the Digital Inclusion Network.',
    ctaText: 'Read more',
    ctaUrl: '/',
  },
  {
    heading: 'Data Poverty Lab', 
    paragraph: 'The Data Poverty Lab was set up with Nominet to find sustainable solutions to data poverty.',
    ctaText: 'Read more',
    ctaUrl: '/',
  },
  {
    heading: 'The Network', 
    paragraph: 'The Network is made up of thousands of community partners in the UK, all working to tackle digital exclusion by delivering data, devices and digital skills training.',
    ctaText: 'Read more',
    ctaUrl: '/',
  },
];
</script>

<template>
  <main class="main-loading" v-if="!pageData.promoMain"></main>
  <main v-if="pageData.promoMain">
    <PromoMain 
      :imageUrl="pageData.promoMain.image_url"
      :heading="pageData.promoMain.heading_text"
      :paragraph="pageData.promoMain.paragraph"
      :ctaText="pageData.promoMain.cta_label"
      :ctaUrl="pageData.promoMain.cta_url" />
    <PromoSection
      :imageUrl="pageData.promoSection?.image_url1"
      :heading="pageData.promoSection?.heading"
      :paragraph="pageData.promoSection?.paragraph1"
      :ctaText="pageData.promoSection?.cta_label1"
      :ctaUrl="pageData.promoSection?.cta_url1" />
    <HelpForm />
    <CtaList 
      :heading="pageData.ctaList.heading_text"
      :paragraph="pageData.ctaList.paragraph"
      :ctaText="pageData.ctaList.cta_label"
      :ctaUrl="pageData.ctaList.cta_url"
      :ctaList="pageData.ctaList.list" />
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      pageData: {
        promoMain: undefined,
        promoSection: undefined,
        ctaList: undefined,
      }
    }
  },
  methods: {
    async getContent() {
      const resp = await this.$prismic.client.getSingle('home')
      this.pageData = {
        promoMain: resp.data.body.find(item => item.slice_type === 'mainpromo')?.primary, 
        promoSection: resp.data.body.find(item => item.slice_type === 'promo')?.primary, 
        ctaList: {
          ...resp.data.body.find(item => item.slice_type === 'ctalist')?.primary,
          ...{list: resp.data.body.find(item => item.slice_type === 'ctalist')?.items.map(item => ({
            heading: item.item_heading_text,
            paragraph: item.item_paragraph,
            ctaUrl: item.item_cta_url,
            ctaText: item.item_url_label,
          }))}
        }
      }
      console.log(this.pageData)
    }
  },
  created() {
    this.getContent()
  }
}
</script>