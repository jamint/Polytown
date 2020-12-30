import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>
                <Link to="/">R3F</Link>
            </h1>
            {/* <ul>
                <li><Link to="/shop">About</Link></li>
                <li><Link to="/about">Contact</Link></li>
            </ul> */}
        </header>
    );
}

export default Header;