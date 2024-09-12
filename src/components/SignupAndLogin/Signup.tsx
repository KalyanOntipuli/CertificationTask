import classes from './Signup.module.css'
import googleIcon from '../../util/google.svg'
import userlogo from '../../util/user.svg'
import emaillogo from '../../util/email.svg'
import phonelogo from '../../util/phone.svg'
import { Link } from 'react-router-dom'
const Signup: React.FC = () => {
    return (
        <>
            <div className={classes['auth-screen-layout']}>
                <div className={classes['sign-up-layout']}>
                    <span className={classes.heading}>Sign up</span>
                    <form>
                        <div className={classes['input-fields-layout']}>
                            <label htmlFor="username" className="form-label">Username</label>
                            <div className={`mb-2 ${classes['input']}`}>
                                <img src={userlogo} width={20} height={20} />
                                <input type="email" id="username" className={classes['input-text']} placeholder='Enter username' />
                            </div>
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className={`mb-2 ${classes['input']}`}>
                                <img src={emaillogo} width={20} height={20} />
                                <input type="email" id="email" className={classes['input-text']} placeholder='Enter email' />
                            </div>
                            <label htmlFor="phone" className="form-label">Username</label>
                            <div className={`mb-2 ${classes['input']}`}>
                                <img src={phonelogo} width={20} height={20} />
                                <input type="tel" id="phone" className={classes['input-text']} placeholder='Enter phone number' />
                            </div>

                            <div className='d-flex justify-content-between align-items-left gap-1'>
                                <button className={classes['submit-button']} type="submit">Request SMS</button>
                                <button className={classes['submit-button']} type="submit">Request Email</button>
                            </div>
                        </div>
                    </form>
                    <div className="justify-content-center mt-4 mx-auto">
                        <button className={classes['google-signin-button']}>
                            <img src={googleIcon} alt="Google icon" />
                            <span className={classes['google-signin-text']}>Sign in with Google</span>
                        </button>
                    </div>
                    <span className={classes['below-text']}>Already have an account ?
                        <Link to="/login" style={{ textDecoration: 'none' }}><span className={classes['below-highlited-text']}>Sign In</span></Link>
                    </span>
                </div>
            </div>
        </>
    );
}
export default Signup