import { Link } from 'react-router-dom';
import classes from './HomeLinks.module.css';

const HomeLinks: React.FC = () => {
    return (
        <main className={classes.main}>
            <div className={classes['home-links']}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div className={classes['home-link-item']}>
                            <h3 className={classes['item-title']}>Practice coding challenges &amp; <span className={classes['span-text']}>prep for interviews</span></h3>
                            <p>Start practicing your skills now and land the job<br /> of your dreams.</p>
                            <p><Link to="/signup" className={classes.link}>Join the community</Link></p>
                        </div>
                        <div className={classes['home-link-item']}>
                            <h3 className={classes['item-title']}>Get Started <span  className={classes['span-text']}>hiring with CertifyMaang</span></h3>
                            <p>More than 3,000 tech teams, representing all industries and<br /> from countries around the world, trust CertifyMaang.</p>
                            <p><Link to="/signup" className={classes.link}>Join the community</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomeLinks;
