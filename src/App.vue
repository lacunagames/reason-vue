<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconSearch from './components/icons/IconSearch.vue'
import IconFingerprint from './components/icons/IconFingerprint.vue'
import { useSiteStore } from './stores/site'
const siteStore = useSiteStore()
</script>

<template>
  <header>
    <div class="container wrap">
      <RouterLink to="/" class="logo">
        <img alt="Good things foundation logo" src="@/assets/good-things-foundation-logo.png" width="208" height="48" />
      </RouterLink>
      <nav class="hide-sm">
        <RouterLink v-for="item in siteStore.menuItems" :to="item.to">{{ item.title }}</RouterLink>
      </nav>
    </div>
    <div class="ul-section hide-sm">
      <ul>
        <li class="search"><button><IconSearch /> Search</button></li>
        <li><RouterLink to="/the-digital-divide" class="button btn-underline">Learn</RouterLink></li>
        <li><RouterLink to="/donate" class="button btn-primary">Donate</RouterLink></li>
      </ul>
    </div>
  </header>

  <RouterView :key="$route.fullPath" />

  <footer>
    <div class="container">
      <IconFingerprint />
      <p class="h2">a Vue JS single page site by Fero</p>
    </div>
  </footer>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
  }
  .wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .logo {
    padding: 10px 10px 10px 0;
    margin: 10px 10px 10px 0;
  }
  .logo:hover,
  .logo:focus {
    background-color: #eee;
  }
  nav a {
    position: relative;
    font-weight: 700;
    color: #000;
    font-size: 16px;
    line-height: 24px;
    padding: 16px 8px;
  }
  nav a:after {
    content: "";
    position: absolute;
    height: 3px;
    background-color: var(--color-secondary);
    left: 8px;
    right: 8px;
    bottom: 8px;
    opacity: 0;
    transition: opacity 0.4s;
  }
  nav a:hover,
  nav a:focus,
  nav .router-link-exact-active {
    text-decoration: none;
    color: var(--color-secondary);
  }
  nav a:hover:after,
  nav a:focus:after,
  nav .router-link-exact-active:after {
    opacity: 1;
  }
  .ul-section {
    order: -1;
    border-bottom: 1px solid #ccc;
  }
  ul {
    width: 100%;
    display: flex;
    list-style: none;
    margin: -1px auto 0;
    padding: 0 36px;
    max-width: 1280px;
    margin-bottom: -1px;
  }
  li {
    margin-bottom: 0;
  }
  .search {
    flex: 1;
  }
  .search svg {
    width: 24px;
    height: 24px;
    margin: -8px 8px -8px 0;
  }
  .btn-primary {
    margin-left: -1px;
  }
  .btn-underline {
    border-bottom: 4px solid var(--color-secondary);
    padding-bottom: 7px;
  }

  footer {
    background-color: #ececec;
    margin: -20px 0 0;
  }
  footer .container {
    min-height: 350px;
    position: relative;
    overflow: hidden;
  }
  footer p {
    margin-top: 230px;
    text-align: right;
    position: relative;
  }
  footer svg {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.2;
  }
</style>
