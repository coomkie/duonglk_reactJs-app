import React, { useState } from 'react';
import './CSS/loginPage.css'
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/authService';
const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const user = await loginService(username, password);
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/home');
            }
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div class="container-login100">
            <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <form class="login100-form validate-form flex-sb flex-w" onSubmit={handleLogin}>
                    <span class="login100-form-title p-b-53">
                        Account Login(acount: admin; pass: admin)
                    </span>
                    <div class="name-form p-t-31 p-b-9">
                        <span class="txt1">
                            Username
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Username is required">
                        <input class="input100" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <span class="focus-input100"></span>
                    </div>

                    <div class="name-form p-t-13 p-b-9">
                        <span class="txt1">
                            Password
                        </span>

                        <a href="#" class="txt2">
                            Forgot?
                        </a>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <span class="focus-input100"></span>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <div class="container-login100-form-btn m-t-17">
                        <button class="login100-form-btn">
                            Login now
                        </button>
                    </div>

                    <div class="w-full text-center p-t-55">
                        <span class="txt2">
                            Not a member?
                        </span>

                        <a href="#" class="txt2">
                            Sign up now
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;