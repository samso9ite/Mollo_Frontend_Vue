<template>
  <header style="background-color: #fdfcff;">
        <nav class="navbar navbar-expand-sm" style="margin-top: -30px;">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)"><img src="/assets/images/logo.png"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse topnav-centered" id="mynavbar" style="text-align: center;">
            <ul class="navbar-nav me-auto" style="float: right; font-size: 16px;">
                <li class="nav-item dropdown" style="padding-right: 30px;">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Company</a>
                    <ul class="dropdown-menu">
                    </ul>
                  </li>
              <li class="nav-item dropdown" style="padding-right: 30px;">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Features</a>
                <ul class="dropdown-menu" style="line-height: 40px;"> 
                  <li><a class="dropdown-item" href="#"><img src="static/images/wallet_icon.svg" width="30px;" />  <span style="margin-left: 10px !important;">Wallet </span></a></li>
                  <li><a class="dropdown-item" href="#"> <img src="static/images/manager.svg" width="30px;" /><span style="margin-left: 10px !important;"> Finance Manager </span></a></li>
                  <li><a class="dropdown-item" href="#"> <img src="static/images/card_svg.svg" width="30px;" /><span style="margin-left: 10px !important;"> Cards </span></a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Help</a>
                <ul class="dropdown-menu" style="line-height: 50px; list-style: none;">
                  <li><a class="dropdown-item" href="#">FAQ</a></li>
                  <li><a class="dropdown-item" href="#">Contact Us</a></li>
                  <li><a class="dropdown-item" href="#">Help</a></li>
                </ul>
              </li>
            </ul>
           
          </div>
          <span class="d-flex login-btn" >
            <router-link :to="'/login'"> <button class="btn " type="button" style="padding-right: 45px;">Login</button> </router-link>
            <router-link :to="'/signup'"> <button class="btn general-button" type="button">Sign Up</button> </router-link>
        </span>
        </div>
        </nav>

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
                      <img src="/assets/images/right_header_img.svg"  style="float: right; width:85%"/>
                  </div>
              </div>
            </div>
        </div>
        </header>
    </template>

    <script>
        export default {
            name: 'NavBar',
        
        }
    </script>
