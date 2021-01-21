import React from 'react';

const Signup =()=>(
<div class="container">
    <form class="sign-up">
        <h2>Sign Up for An Account</h2>
        <div class="form-control">
            <lebel for="name">Name</lebel>
            <input type="text" id="name" placeholder="Name" name="name" />
            <span class="error"></span>
        </div>

        <div class="form-control">
            <lebel for="email">Email</lebel>
            <input type="email" id="email" placeholder="Email" name="email" />
            <span class="error"></span>
        </div>

        <div class="form-control">
            <lebel for="password">Password</lebel>
            <input
                type="password"
                id="password"
                placeholder="Enter Password"
                name="password"
            />
            <span class="error"></span>
        </div>
        <div class="form-control">
            <lebel for="confirPassword">Confirm Password</lebel>
            <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                name="confirm"
            />
            <span class="error"></span>
        </div>
        <button type="submit">Sign Up!</button>
        <div class="already-account">
            <p>
                All ready an account?
                <a href="" type="button" class="allredy-login"> Login!</a>
            </p>
        </div>
    </form>
</div>
)

export default Signup;