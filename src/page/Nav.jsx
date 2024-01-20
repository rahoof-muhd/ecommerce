import{Link} from "react-router-dom"
// import "./nav.css"
import "../nav.css"

function Nav() {
    return(
        <>
        <div className="navbar">
        <Link to="/">Home </Link>
        <Link to="/about" >About </Link>
        {/* <Link to="/contact-us" >Contact-us </Link> */}
        <Link to="/register" >Register </Link>
        <Link to="/login" >Login </Link>
        <Link to="/about" >About </Link>
        <Link to="/cart" >Cart</Link>
        </div>
        </>
    )
}
export default Nav;