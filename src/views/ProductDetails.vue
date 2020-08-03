<template>
    <div>
        <app-header/>
        <breadcrumb />
        <div class="product-detail">
            <product-description />
            <related-products />
        </div>
        <first-page-info-footer/>
        <page-footer/>
    </div>
</template>

<script>

    import AppHeader from "../components/Header";
    import Breadcrumb from "@/components/Breadcrumb";
    import ProductDescription from "@/components/ProductDescription";
    import RelatedProducts from "@/components/RelatedProducts";
    import FirstPageInfoFooter from "@/components/FirstPageInfoFooter";
    import PageFooter from "@/components/PageFooter";
    export default {
        name: "ProductDetails",
        components: {RelatedProducts, AppHeader, Breadcrumb, ProductDescription, FirstPageInfoFooter,PageFooter },
    }
</script>

<style>
    @import "../assets/css/style-product-detail.css";
    @import "../assets/css/style-res-product-detail.css";
    @import "../assets/css/style-fix-nav.css";
    @import "../assets/css/style-form-search-mobile.css";
    @import "../assets/slick/slick.css";
    @import "../assets/slick/slick-theme.css";
</style>
