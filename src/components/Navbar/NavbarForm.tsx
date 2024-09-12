type NavbarFormProps = {
    onTextChange: (text: string) => void
}
const NavbarForm: React.FC<NavbarFormProps> = ({ onTextChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTextChange(event.target.value); // Update search query state
    };
    return (
        <form className="d-flex" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );

}
export default NavbarForm