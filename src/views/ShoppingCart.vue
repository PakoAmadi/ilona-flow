<template>
    <div>
        <app-header/>
        <shopping-steps />
        <cart />
        <checkout />
        <order />
        <first-page-info-footer/>
        <page-footer/>
    </div>
</template>

<script>
    import AppHeader from "@/components/Header";
    import ShoppingSteps from "@/components/ShoppingSteps";
    import Cart from "@/components/Cart";
    import FirstPageInfoFooter from "@/components/FirstPageInfoFooter";
    import PageFooter from "@/components/PageFooter";
    import Checkout from "@/components/Checkout";
    import Order from "@/components/Order";

    export default {
        name: "ShoppingCart",
        components: {Order, Checkout, Cart, AppHeader, ShoppingSteps, FirstPageInfoFooter, PageFooter }
    }
</script>

<style scoped>
    @import "../assets/css/style-about.css";
    @import "../assets/css/style-res-about.css";
    @import "../assets/css/style-faq.css";
    @import "../assets/css/style-checkout.css";
    @import "../assets/css/style-shopping.css";
    @import "../assets/css/style-order.css";
    @import "../assets/css/style-fix-nav.css";
    @import "../assets/css/style-form-search-mobile.css";
</style>
