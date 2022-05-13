import {useNavigate} from "react-router-dom";
import './Auth.css'

function Auth() {
    const navigate = useNavigate()

    function login() {
        navigate('/main')
    }
    return (
        <div className="auth">
            <div className="container">
                <form action="" className="content">
                    <div className="content__body">
                        <p>Login</p>
                        <div className="content__body-username">
                            <label htmlFor="1">Username</label>
                            <input id="1" type="text"/>
                        </div>
                        <div className="content__body-password">
                            <label htmlFor="2">Password</label>
                            <input id="2" type="password"/>
                        </div>
                        <button onClick={login}>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;
