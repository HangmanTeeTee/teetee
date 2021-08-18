import React from 'react';
import '../../App.css';

export default function SignUp() {
    return (
        <>
            <h3 className="sign-up">Sign Up Now</h3>
            <div className='sing-up-form'>
                <form action="">
                    <div>
                        <label htmlFor="username">Fullname</label>
                        <input type='text' name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type='text' name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone No</label>
                        <input type='text' name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type='text' name='password' id='password' />
                    </div>
                </form>
            </div>
        </>
    );
}
