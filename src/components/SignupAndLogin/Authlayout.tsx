import { PropsWithChildren } from "react";
import classes from './AuthLayout.module.css'
const AuthLayout:React.FC<PropsWithChildren> = (props,children) =>{
    return(
        <div className={classes['auth-screen-layout']}>
        <div className={classes['sign-up-layout']}>
            <span className={classes.heading}>Sign up</span>
            <form>
                <div className={classes['input-fields-layout']}>
                    {props.children}
                </div>
            </form>
            
        </div>
    </div>

    );
}
export default AuthLayout