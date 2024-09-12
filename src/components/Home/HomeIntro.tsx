import classes from './HomeIntro.module.css';

const HomeIntro: React.FC = () => {
    return (
        <div className={classes.homeIntro}>
            <div className={classes.homeIntroContainer}>
                <h1 className={classes.HomeIntroTitle}>Skills speak louder than <br /> words</h1>
                <div className={classes.HomeIntroText}>
                    <p>We help companies develop the strongest tech teams around.<br /> We help candidates sharpen their tech skills and pursue job opportunities.</p>
                    <p>
                        <a href="/signup">Sign up</a>
                    </p>
                    <p>Over 40% of developers worldwide and 3,000 companies use CertifyMaang</p>
                </div>
            </div>
        </div>
    );
};

export default HomeIntro;
