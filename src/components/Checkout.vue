<template>
    <div class="cart-box-container check-out">
        <div class="container container-ver2">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="title-brand">BILLING ADDRESS</h3>
                    <form class="form-horizontal">
                        <div class="form-group col-md-6">
                            <label for="inputfname" class=" control-label">First Name <span class="color">*</span></label>
                            <input type="text" placeholder="Enter your first name..." id="inputfname" class="form-control">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputlname" class=" control-label">Last Name <span class="color">*</span></label>
                            <input type="text" placeholder="Enter your last name..." id="inputlname" class="form-control">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="inputcompany" class=" control-label">Company Name<span class="color">*</span></label>
                            <input type="text" placeholder="Enter your company name..." id="inputcompany" class="form-control">
                        </div>
                        <div>
                            <div class="form-group col-md-6">
                                <label for="inputemail" class=" control-label">Email<span class="color">*</span></label>
                                <input type="text" placeholder="Enter your email..." id="inputemail" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputphone" class=" control-label">Phone<span class="color">*</span></label>
                                <input type="text" placeholder="Enter your phone..." id="inputphone" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputcountry1" class=" control-label">COUNTRY<span class="color">*</span></label>
                            <select id="inputcountry1" name="inputcountry1" class="country form-control">
                                <option>COUNTRY 2</option>
                                <option selected="selected">COUNTRY 1</option>
                                <option>COUNTRY 3</option>
                                <option>COUNTRY 4</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="inputstreet" class=" control-label">Adress<span class="color">*</span></label>
                            <input type="text" placeholder="Enter your street address..." id="inputstreet" class="form-control space-20">
                            <input type="text" placeholder="Enter the apartment, floor, suite, etc..." id="inputapartment" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="inputcountry" class=" control-label">Town/City<span class="color">*</span></label>
                            <input type="text" placeholder="Enter your Town..." id="inputcountry" class="form-control space-20">
                        </div>
                        <div>
                            <div class="form-group col-md-6">
                                <label for="inputfState" class=" control-label">COUNTY <span class="color">*</span></label>
                                <input type="text" placeholder="Select your county..." id="inputfState" class="form-control">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputpostcode" class=" control-label">POSTCODE <span class="color">*</span></label>
                                <input type="text" placeholder="Enter your postcode..." id="inputpostcode" class="form-control">
                            </div>
                        </div>
                        <label for="check-1" class="form-check space-50"><input type="checkbox" name="check1" id="check-1"><span class="checkmark"></span> Create an account?</label>
                        <label for="check-2" class="form-check space-20"><input type="checkbox" name="check2" id="check-2"><span class="checkmark"></span> Ship to a different address?</label>
                    </form>


                </div>
                <!-- End col-md-8 -->
                <div class="col-md-6 space-30">
                    <div class="box">
                        <h3 class="title-brand">YOUR ORDER</h3>
                        <div class="info-order">
                            <div class="product-name">
                                <ul>
                                    <li class="head">
                                        <span class="name">PRODUCTS NAME</span>
                                        <span class="qty"><b>QTY</b></span>
                                        <span class="total"><b>SUB TOTAL</b></span>
                                    </li>
                                    <li>
                                        <span class="name">Modern Chair</span>
                                        <span class="qty">01</span>
                                        <span class="total">$520.00</span>
                                    </li>
                                    <li>
                                        <span class="name">Toldbod Lamp</span>
                                        <span class="qty">02</span>
                                        <span class="total">$190.00</span>
                                    </li>
                                    <li>
                                        <span class="name">Getama Sofa</span>
                                        <span class="qty">03</span>
                                        <span class="total">$270.00</span>
                                    </li>
                                </ul>
                            </div>
                            <!-- End product-name -->
                            <ul class="product-order">
                                <li>
                                    <span class="left">CART SUBTOTAL</span>
                                    <span class="right">$980.00</span>
                                </li>
                                <li>
                                    <span class="left">SHIPPING & HANDLING</span>
                                    <span class="right">Free Shipping</span>
                                </li>
                                <li>
                                    <span class="left">ORDER TOTAL</span>
                                    <span class="right brand">$980.00</span>
                                </li>
                            </ul>
                        </div>
                        <!-- End info-order -->
                        <div class="payment-order box float-left">
                            <h3 class="title-brand">PAYMENT MENTHOD</h3>
                            <ul class="tabs">
                                <li>
                                    <i class="icon"></i>
                                    <h4>Direct Bank Transfer</h4>
                                    <p>Make your payment directly info our bank account. Please use your order ID as the
                                        payment reference. You product won't be shipped untill payment confiimation. </p>
                                </li>
                                <li>
                                    <i class="icon"></i>
                                    <h4>Cheque Payment</h4>

                                </li>
                                <li>
                                    <i class="icon"></i>
                                    <h4>PayPal</h4>
                                </li>
                                <li>
                                    <i class="icon"></i>
                                    <h4>I've raed and accept the </h4><a href="#" title="Temr & conditions">Temr & conditions</a>
                                </li>
                            </ul>
                        </div>
                        <a class="link-v1 box lh-50 rt full" href="#" title="PLACE ORDER">PLACE ORDER</a>
                    </div>
                </div>
            </div>
            <!-- End row -->
        </div>
        <!-- End container -->
    </div>
</template>

<script>
    export default {
        name: "Checkout"
    }
</script>

<style scoped>

</style>
