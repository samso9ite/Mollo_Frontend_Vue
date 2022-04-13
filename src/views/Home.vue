<template>
<NavBar />
    <div>
         <div class="container-fluid" style="margin-top: 90px;">
          <div class="col-lg-12">
              <div class="row">
                  <div class="col-lg-6" style="margin-top: 30px;">
                  <button class="btn subheader" type="button"> DIGITAL BANK </button>
                      <h3 class="header" style="font-size: 40px;">
                          All lifestyles can gain  <br>
                        from digital banking.
                      </h3>
                      <p style="font-size: 18px;">   
                          With a free Mollo, you can unlock the power of money. All of your <br>bills, money transfers, buy airtimecan be done in one spot.
                      </p>
                      <button class="btn general-button" type="button" style="padding-left: 70px; padding-right: 70px;">Get Started </button>
                      <br><br>
                    <span> <a href=""><img src="/assets/images/playstore.svg" width="30%"/></a> <a href=""><img src="/assets/images/apple_store_button.svg" width="30%"/></a>
                      </span>
                  </div>

                  <div class="col-lg-6">
                      <img src="static/images/right_header_img.svg"  style="float: right; width:85%"/>
                  </div>
              </div>
            </div>
        </div>
        </header>
        <section style="margin-top: 90px;" class="" >
          <div class="col-lg-12" style="background-image: url('/assets/images/spiral.svg'); background-repeat: no-repeat; background-position: right; padding-top: 5em;" >
            <div class="row section-padding" >
                <div class="col-lg-7">
                    <img src="static/images/payment.svg" />
                </div>
                <div class="col-lg-5"   >
                <button class="btn subheader" type="button"> BILL PAYMENT </button>
                <h3 class="header"> Take advantage of seamless <br>payments at a low or no cost.</h3> 
                <p> With only a few clicks on your smartphone, you can pay all of your bills and top up your airtime at the lowest possible price.</p>
                <ul id="list" class="inner" style="padding: 0%; " >
                    <li> Purchase airtime and data for all networks you can get 10%  discount.</li>
                    <li> Pay for your cable television, power and water bills and save up to 100% on fees.</li>
                    <li> You can get up to 10% discount when you pay your bills.</li>
                </ul>
                </div>
            </div>
          </div>
        </section>

        <section>
              <div class="row" style="background-color: #FBFFF0; margin-top: 4em; width: 100%;" >
                <div class="col-lg-12 section-padding" style="background-image: url(/assets/images/map.svg);">
                    <div class="row" style="margin-top: 4em;"> 
                        <div class="col-lg-4">
                        <button class="btn subheader"  type="button"> TRANSFER FUNDS </button>
                        <h3 class="header" style="margin-bottom: 15px;"> Send money to friends and family in a flash .</h3> 
                        <p> Transfers to the Mollo account are free, you can send money to any bank in Nigeria.</p>
                        <ul id="list" class="inner" style="padding: 0%;">
                            <li> There are no conversion fees and the exchange rate are straight forward </li>
                            <li> Transfers to local bank accounts and Mollo mobile money accounts are completed quickly </li>
                            <li> Transfer of funds are easy discreet and fast</li>
                        </ul>
                        </div>
                        <div class="col-lg-3"></div>
                        <div class="col-lg-5">
                           <img src="/assets/images/send_money.svg" />
                        </div>
                    </div>
               </div> 
            </div>
        </section>
        <section style="margin-top:15px">
            <div class="row section-padding" style="background-color: white; margin-top: 4em;">
                <div class="col-lg-4">
                    <img src="static/images/atm.svg" />
                </div>
                <div class="col-lg-3"></div>
                <div class="col-lg-5">
                  <button class="btn subheader" type="button"> VIRTUAL CARDS </button>
                  <h3 class="header"> Get an authentic card that pays you back. </h3> 
                  <p> The Mollo debit card gives you more financial control, security and access to deals</p>
                  <ul id="list" class="inner">
                      <li> You can make as many cards as you want </li>
                      <li> For your transactions we offer a transparent and dependable exchange rate</li>
                      <li> With our cashback loyalty scheme you will be able to pay smarter and earn more</li>
                      <li>Compatible with Apple Pay, Google Pay, Paypal, Netflix, Amazon, Spotify and other famous websites.</li>
                  </ul>
                </div>
            </div>
        </section>

        <section style="margin-top: 9em;" class="section-padding">
            <div class="col-lg-12" style="background-color: #3C1D59; border-radius: 10px; height: 380px !important;">
                <div class="row"> 
                <div class="col-lg-6" style="color: white; margin: auto; padding-left: 40px;">
                    <h3 class="header" style="color: white; margin-top: -3em;"> Register For Free</h3>
                    <p>Mollo is available on Google Play and the App Store. To enjoy unltimate financial security. </p>
                    <span> <a href=""><img src="/assets/images/playstore.svg" width="30%"/></a> <a href=""><img src="/assets/images/apple_store_button.svg" width="30%"/></a>
                    </span>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-4" style="margin-top: -40px;">
                  <img src="/assets/images/register.svg" />
                </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import NavBar from '../componenrs/NavBar'
    export default({
        name: 'Home',
        components: {'NavBar'}
        data(){
            return{
               
            }
        },
    })
</script>