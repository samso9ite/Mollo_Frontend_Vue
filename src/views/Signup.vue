<template>
     <header style="margin-bottom: auto;" >
        <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)"><img src="static/images/logo.png"/></a>
        </div>
        </nav>
    </header>
    <section class="form-page-padding"  style="background-image: url('/assets/images/spiral.svg'); background-repeat: no-repeat; background-position: right bottom; height: 83vh;">
        <div class="col-lg-12">
            <div class="row">
                <div class="col-lg-4" style="margin-top: 5em;">
                    <h3 class="header"> Sign Up to Mollo</h3>
                    <p>Please enter your Mollo password and the email address associated with your account to sign in.</p>
                    <form action="">
                        <div class="mb-3 mt-3">
                        <label for="fullname" class="form-label">Fullname</label>
                        <input type="email" class="form-control" id="email" placeholder="John Doe" name="first_name">
                        </div>
                        <div class="mb-3">
                        <label for="phone number" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="pwd" placeholder="+234123456789" name="phone_number">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="pwd" placeholder="johndoe@example.com" name="email">
                        </div>
                        <label for="password" class="form-label">Password</label>
                        <div class="input-group mb-3" id="">
                            <input class="form-control" type="password" id="myPassword" style="border-right: none;"> <i class="fa fa-eye-slash" aria-hidden="true" style="border-left: none;" onclick="passToggle"></i>
                        </div>
                    
                        <div class="d-grid gap-3">
                            <button type="button" class="btn btn-block" style="background-color:#3C1D59; color: white;"> Sign Up </button>
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

