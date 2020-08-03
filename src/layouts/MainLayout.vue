<template>
  <div>
    <app-header/>
    <router-view/>
    <first-page-info-footer/>
    <page-footer/>
  </div>
</template>

<script>
  import AppHeader from '../components/Header'
  import FirstPageInfoFooter from "@/components/FirstPageInfoFooter";
  import PageFooter from "@/components/PageFooter";

  export default {
    name: "MainLayout",
    components: { AppHeader, FirstPageInfoFooter, PageFooter },
  }
</script>

<style scoped>

</style>
