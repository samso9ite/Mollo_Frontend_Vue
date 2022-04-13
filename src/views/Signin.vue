<template>
     <header style="margin-bottom: auto;" >
        <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)"><img src="static/images/logo.png"/></a>
        </div>
        </nav>
    </header>
    <section class="form-page-padding"  style="margin-top:3em; background-image: url('/assets/images/spiral.svg'); background-repeat: no-repeat; background-position: right bottom;  height: 83vh;">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-4" style="margin-top: 5em;">
                    <h3 class="header"> Sign in to Mollo</h3>
                    <p>Please enter your Mollo password and the email address associated with your account to sign in.</p>
                    <form action="">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="pwd" placeholder="johndoe@example.com" name="email">
                        </div>
                        <label for="password" class="form-label">Password</label>
                        <div class="input-group mb-3" id="">
                            <input class="form-control" type="password" id="myPassword" style="border-right: none;"> <i class="fa fa-eye-slash" aria-hidden="true" style="border-left: none;" onclick="passToggle"></i>
                        </div>
                        <p style="text-align: right; color: #3C1D59;">Forgot Password? <b>Reset it</b></p>
                    
                        <div class="d-grid gap-3">
                            <button type="button" class="btn btn-block" style="background-color:#3C1D59; color: white;"> Login </button>
                        </div>
                    </form>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-4 ">
                    <img src="/assets/images/splashed.svg"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import 
    export default({
        name: 'Signin',
        data(){
            return{
               
            }
        },
    })
</script>