import { Link } from 'react-router-dom';
import './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <section id="footer-section">
            <div className='container'>
                <footer className='row row-cols-1 row-cols-sm-2 row-cols-md-2 py-5 border-top'>
                    <div className='logo-container col-6 mb-3'>
                        <Link to="https://maangtechnologies.com/" target='_blank' className='d-flex mb-3 a-body-emphasis text-decoration-none'>
                            <img style={{ backgroundColor: 'white', borderRadius: '10px', width: '150px', padding: '20px' }} src="https://maangtechnologies.com/static/media/logo_maang.4f325686c9588c5fced3f774173e73a6.svg" alt="" />
                        </Link>
                        <p>We Build and develop with confidence. From powerful site infrastructure to advanced business solutions. We have got you covered. We are what you need.</p>
                    </div>
                    <div className="d-flex justify-content-around col mb-3">
                        <div className="footer-links-container">
                            <h5>Our Story</h5><br />
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" style={{textDecoration:'none', color:'black'}}>FAQ</Link></li>
                                <li className="nav-item mb-2"><Link to="/" style={{textDecoration:'none', color:'black'}}>Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-links-container">
                            <h5>Services</h5><br />
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" style={{textDecoration:'none', color:'black'}}>Get Certified</Link></li>
                                <li className="nav-item mb-2"><Link to="/" style={{textDecoration:'none', color:'black'}}>Know More</Link></li>
                            </ul>
                        </div>
                        <div className="footer-links-container">
                            <h5>About us</h5><br />
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">Developers</li>
                                <li className="nav-item mb-2">Meet our team</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Footer;
