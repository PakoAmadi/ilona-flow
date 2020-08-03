<template>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="col-lg-8 col-md-6 col-sm-6 col-xs-6 show-side">
            <button class="sp1 hidden-sm hidden-xs">Show Sidebar</button>
            <button class="btn-hide hidden-sm hidden-xs">Hide Sidebar</button>
            <button id="btn-list"><i class="fas fa-list"></i></button>
            <button id="btn-grid"><i class="fas fa-th"></i></button>
            <span class="sp2 hidden-xs">Showing 1 - 12 of 30 results</span>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 show-select">
            <span class="hidden-xs">Show</span>
            <div class="select"><select id="select-show" class="select-hidden">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
            </select><div class="select-styled">1</div><ul class="select-options"><li rel="1">1</li><li rel="2">2</li><li rel="3">3</li><li rel="4">4</li><li rel="5">5</li><li rel="6">6</li><li rel="7">7</li><li rel="8">8</li><li rel="9">9</li></ul></div>

            <div class="select"><select id="select-defaul" class="select-hidden">
                <option>Defaul sorting</option>
                <option>Defaul sorting</option>
                <option>Defaul sorting</option>
            </select><div class="select-styled">Defaul sorting</div><ul class="select-options"><li rel="Defaul sorting">Defaul sorting</li><li rel="Defaul sorting">Defaul sorting</li><li rel="Defaul sorting">Defaul sorting</li></ul></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TopProductsFilterBar'
}
</script>

<style scoped>

</style>
