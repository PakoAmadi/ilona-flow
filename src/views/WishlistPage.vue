<template>
    <div>
        <app-header/>
        <wishlist />
        <first-page-info-footer/>
        <page-footer/>
    </div>
</template>

<script>
    import Wishlist from "@/components/Wishlist";
    import AppHeader from "@/components/Header";
    import FirstPageInfoFooter from "@/components/FirstPageInfoFooter";
    import PageFooter from "@/components/PageFooter";

    export default {
        name: "WishlistPage",
        components: { AppHeader, Wishlist, FirstPageInfoFooter, PageFooter }
    }
</script>

<style scoped>
    @import "../assets/css/style-about.css";
    @import "../assets/css/style-res-about.css";
    @import "../assets/css/style-faq.css";
    @import "../assets/css/style-shopping.css";
    @import "../assets/css/style-fix-nav.css";
    @import "../assets/css/style-form-search-mobile.css";
</style>
