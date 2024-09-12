import { Container, Navbar as BootstrapNavbar } from 'react-bootstrap';
import NavBarLogo from './NavbarLogo';
import NavbarList from './NavbarList';
import NavbarItem from './NavbarItem';
import NavbarForm from './NavbarForm';
type NavbarProps = {
    onCategorySelect: (category: string) => void;
    onTextChange: (text: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCategorySelect, onTextChange }) => {

    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavBarLogo />
                <NavbarList>
                    <NavbarItem onClick={() => onCategorySelect('')}>Home</NavbarItem>
                    <NavbarItem onClick={() => onCategorySelect('All')}>Certify</NavbarItem>
                    <NavbarItem onClick={() => onCategorySelect('Frontend')}>Frontend</NavbarItem>
                    <NavbarItem onClick={() => onCategorySelect('Backend')}>Backend</NavbarItem>
                    <NavbarItem onClick={() => onCategorySelect('Database')}>Database</NavbarItem>
                </NavbarList>
                <NavbarForm onTextChange={onTextChange} />
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
