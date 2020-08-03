<template>
    <div class="container container-ver2">
        <div class="box cart-container">
            <table class="table cart-table space-30">
                <thead>
                <tr>
                    <th class="product-photo">PRODUCT NAME</th>
                    <th class="produc-name"></th>
                    <th class="produc-price">PRINCE</th>
                    <th class="product-quantity">STOCK STATUS</th>
                    <th class="total-price">ADD TO CART</th>
                    <th class="product-remove"></th>
                </tr>
                </thead>
                <tbody>
                <tr class="item_cart">
                    <td class="product-photo"><img src="../assets/img/340x420.png" alt="Futurelife"></td>
                    <td class="produc-name"><a href="#" title="">Eleganr by BloomNation</a></td>
                    <td class="produc-price"><input value="$69.90" size="4" type="text"></td>
                    <td class="product-in"><i class="fas fa-check-circle"></i> In Stock</td>
                    <td class="add-to-cart"><a href="#" class="btn-shop">SHOP NOW</a></td>
                    <td class="product-remove"><a class="remove" href="#" title="close"><img src="../assets/img/icon-delete-cart.png" alt="close"></a></td>
                </tr>
                <tr class="item_cart">
                    <td class="product-photo"><img src="../assets/img/340x420.png" alt="Futurelife"></td>
                    <td class="produc-name"><a href="#" title="">Pink roses</a></td>
                    <td class="produc-price"><input value="$51.59" size="4" type="text"></td>
                    <td class="product-in"><i class="fas fa-check-circle"></i> In Stock</td>
                    <td class="add-to-cart"><a href="#" class="btn-shop">SHOP NOW</a></td>
                    <td class="product-remove"><a class="remove" href="#" title="close"><img src="../assets/img/icon-delete-cart.png" alt="close"></a></td>
                </tr>
                <tr class="item_cart">
                    <td class="product-photo"><img src="../assets/img/340x420.png" alt="Futurelife"></td>
                    <td class="produc-name"><a href="#" title="">Fun & Flirty By BloomNation</a></td>
                    <td class="produc-price"><input value="$51.59" size="4" type="text"></td>
                    <td class="product-out"><i class="fas fa-check-circle"></i> Out Stock</td>
                    <td class="add-to-cart"><a href="#" class="btn-shop">SHOP NOW</a></td>
                    <td class="product-remove"><a class="remove" href="#" title="close"><img src="../assets/img/icon-delete-cart.png" alt="close"></a></td>
                </tr>
                <tr class="item_cart">
                    <td class="product-photo"><img src="../assets/img/340x420.png" alt="Futurelife"></td>
                    <td class="produc-name"><a href="#" title="">Queen Rose - Pink</a></td>
                    <td class="produc-price"><input value="$51.59" size="4" type="text"></td>
                    <td class="product-out"><i class="fas fa-check-circle"></i> Out Stock</td>
                    <td class="add-to-cart"><a href="#" class="btn-shop">SHOP NOW</a></td>
                    <td class="product-remove"><a class="remove" href="#" title="close"><img src="../assets/img/icon-delete-cart.png" alt="close"></a></td>
                </tr>
                <tr class="item_cart">
                    <td class="product-photo"><img src="../assets/img/340x420.png" alt="Futurelife"></td>
                    <td class="produc-name"><a href="#" title="">Winter White Bouquet</a></td>
                    <td class="produc-price"><input value="$51.59" size="4" type="text"></td>
                    <td class="product-in"><i class="fas fa-check-circle"></i> In Stock</td>
                    <td class="add-to-cart"><a href="#" class="btn-shop">SHOP NOW</a></td>
                    <td class="product-remove"><a class="remove" href="#" title="close"><img src="../assets/img/icon-delete-cart.png" alt="close"></a></td>
                </tr>
                </tbody>
            </table>

        </div>
        <!-- End container -->
    </div>
</template>

<script>
    export default {
        name: "Wishlist"
    }
</script>

<style scoped>

</style>
