import logo from '../../assets/maang_logo.svg'
const NavBarLogo: React.FC = () => {
    return (
        <a className="navbar-brand" href="https://maangtechnologies.com/" target='_blanlk' >
            <img src={logo} alt="maang logo" width="90" height="74" />
        </a>
    );
}
export default NavBarLogo