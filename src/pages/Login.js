// import React from 'react';

const LoginForm =()=>(
    <form class="login">
            <h2>Login into your Account</h2>
            <div class="form-control">
                <lebel for="email">Email</lebel>
                <input type="email" id="email" placeholder="Email" name="email" />
                <span class="error"></span>
            </div>

            <div class="form-control">
                <lebel for="password">Password</lebel>
                <input type="password" id="password"placeholder="Enter Password" name="password"/>
                 <span class="error"></span>
             </div>
          <button type="submit">Login!</button>
	</form>
)


export default LoginForm;