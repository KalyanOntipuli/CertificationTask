const NavbarList:React.FC<React.PropsWithChildren<{}>> = ({children}) =>{
    return(
        <ul className="nav mx-auto">
            {children}
        </ul>
    );
}
export default NavbarList