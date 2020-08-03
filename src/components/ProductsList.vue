<template>
    <div class="container content">
        <div class="row">
            <top-products-filter-bar/>
        </div>
    </div>
</template>

<script>
import TopProductsFilterBar from './TopProductsFilterBar'
export default {
  components: { TopProductsFilterBar },
  name: 'ProductsList'
}
</script>

<style scoped>

</style>
