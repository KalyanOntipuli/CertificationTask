import classes from './Login.module.css'
import userlogo from '../../util/user.svg'
import passwordlogo from '../../util/password.svg'
const Login: React.FC = () => {
    return (
        <>
            <div className={classes['auth-screen-layout']}>
                <div className={classes['sign-in-layout']}>
                    <span className={classes.heading}>Sign In</span>
                    <form>
                        <div className={classes['input-fields-layout']}>
                            <label htmlFor="username" className="form-label">Username</label>
                            <div className={`mb-2 ${classes['input']}`}>
                                <img src={userlogo} width={20} height={20} />
                                <input type="email" id="username" className={classes['input-text']} placeholder='Enter username' />
                            </div>
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className={`mb-2 ${classes['input']}`}>
                                <img src={passwordlogo} width={20} height={20} />
                                <input type="password" id="password" className={classes['input-text']} placeholder='Enter password' />
                            </div>
                        </div>
                        <a className={classes["forgot-text"]} href="/forgotpassword">
                            <span className={classes['forgot-text']}> Forgot Password?</span>
                        </a>
                    </form>
                    <button className={classes['submit-button']} type="submit">Login</button>
                </div>
            </div>
        </>

    );

}
export default Login