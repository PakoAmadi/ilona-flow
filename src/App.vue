<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

  import EmptyLayout from "@/layouts/EmptyLayout";
  import MainLayout from "@/layouts/MainLayout";

  export default {
    components: {EmptyLayout, MainLayout},
    computed: {
      layout() {
        console.log(this.$route.meta.layout)
        console.log(this.$route.meta.layout + '-layout')
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    }
  }

</script>
<style>
  @import "https://fonts.googleapis.com/css?family=Abril+Fatface";
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,700";
  @import "https://use.fontawesome.com/releases/v5.0.13/css/all.css";
</style>
