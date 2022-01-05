import { Link } from "react-router-dom";

const Navbar = (props) => {
  return props.state.token === "" ? (
    <nav className="navbar">
      <Link to="/">
        <h1>Shopping Cart Dashboard</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  ) : props.state.user.admin === false ? (
    <nav className="navbar">
      <Link to="/">
        <h1>Shopping Cart Dashboard</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/getItems">Cart</Link>
        <Link
          to="/"
          onClick={() => {
            props.handleToken("");
            props.handleUser(false);
          }}
        >
          Logout
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="navbar">
      <Link to="/">
        <h1>Shopping Cart Dashboard</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/getItems">Cart</Link>
        <Link to="/postItems">Add Item</Link>
        <Link
          to="/"
          onClick={() => props.handleToken("").then(props.handleUser(false))}
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
