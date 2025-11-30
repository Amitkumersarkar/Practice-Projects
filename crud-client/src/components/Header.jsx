import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <nav>
                <NavLink to='/'><button className="btn btn-info">Home</button></NavLink>
            </nav>
        </div>
    );
};

export default Header;