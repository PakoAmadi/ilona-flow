<template>
    <div>
        <app-header/>
        <about-us />
        <first-page-feedback />
        <first-page-info-footer/>
        <page-footer/>
    </div>
</template>

<script>
    import AppHeader from "@/components/Header";
    import FirstPageFeedback from "@/components/FirstPageFeedback";
    import AboutUs from "@/components/AboutUs";
    import FirstPageInfoFooter from "@/components/FirstPageInfoFooter";
    import PageFooter from "@/components/PageFooter";
    export default {
        name: "About",
        components: { FirstPageFeedback, AppHeader, AboutUs, FirstPageInfoFooter, PageFooter }
    }
</script>

<style scoped>
    @import "../assets/css/style-about.css";
    @import "../assets/css/style-res-about.css";
    @import "../assets/css/style-fix-nav.css";
    @import "../assets/css/style-form-search-mobile.css";
</style>
