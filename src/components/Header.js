import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>
                <Link to="/">Polytown</Link>
            </h1>
            <ul>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    );
}

export default Header;