import { Link, NavLink } from "react-router-dom";
function Navbar() {
return (
<nav>
<Link to="/">Home</Link>
<NavLink to="/about"
activeClassName="active">About</NavLink>
</nav>
);
}

export default Navbar;