<template>
    <div>
        <first-page-slider/>
        <first-page-collection/>
        <first-page-products-ctegory/>
        <first-page-deal-of-the-day/>
        <!--<first-pge-hot-products/>-->
        <first-page-blog/>
         <first-page-feedback/>
         <first-page-instagram-images/>
    </div>
</template>

<script>

import AppHeader from '../components/Header'
import FirstPageSlider from '../components/FirstPageSlider'
import FirstPageCollection from '../components/FirstPageCollection'
import FirstPageProductsCtegory from '../components/FirstPageProductsCtegory'
import FirstPageDealOfTheDay from '../components/FirstPageDealOfTheDay'
/*import FirstPgeHotProducts from '../components/FirstPgeHotProducts'*/
import FirstPageBlog from '../components/FirstPageBlog'
import FirstPageFeedback from '../components/FirstPageFeedback'
import FirstPageInstagramImages from '../components/FirstPageInstagramImages'
import FirstPageInfoFooter from '../components/FirstPageInfoFooter'
import PageFooter from '../components/PageFooter'

export default {
  name: 'Home',
  components: {
      AppHeader,
      FirstPageSlider,
      FirstPageCollection,
      FirstPageProductsCtegory,
      FirstPageDealOfTheDay,
      FirstPageBlog,
      FirstPageFeedback,
      FirstPageInstagramImages,
      FirstPageInfoFooter,
      PageFooter
  }
}
</script>

<style scoped>
    @import "../assets/css/style-homev3.css";
    @import "../assets/css/style-res-v3.css";
    @import "../assets/css/style-fix-nav.css";
    @import "../assets/css/style-form-search-mobile.css";

    @import "../assets/css/bootstrap/mixin.css";
    @import "../assets/css/bootstrap/mixin-modal-quickview.css";
    @import "../assets/css/bootstrap/mixin-select-custom.css";
    @import "../assets/css/bootstrap/mixin-BG-text.css";
</style>
