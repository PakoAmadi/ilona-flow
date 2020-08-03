<template>
    <div>
        <app-header/>
        <products-banner/>
        <products-list/>
    </div>
</template>

<script>

import ProductsBanner from '../components/ProductsBanner'
import ProductsList from '../components/ProductsList'
import AppHeader from '../components/Header'

export default {
  components: { ProductsBanner, ProductsList, AppHeader },
  name: 'Products'
}
</script>

<style scoped>
    @import "../assets/css/style-flower.css";
    @import "../assets/css/style-res-flower.css";
    @import "../assets/css/style-fix-nav.css";
    @import "../assets/css/style-form-search-mobile.css";
    @import "../assets/css/bootstrap/mixin.css";
</style>
