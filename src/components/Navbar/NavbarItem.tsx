import React from 'react';

type NavbarItemProps  = {
    onClick?: () => void;
    children: React.ReactNode;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ onClick, children }) => {
    return (
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" onClick={onClick}>
                {children}
            </a>
        </li>
    );
};

export default NavbarItem;
