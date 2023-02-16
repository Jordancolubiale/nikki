import {Link} from "react-router-dom"

function Navbar(props) {

    return (
        <nav>
            <p>
              <Link to = "/">Home</Link>
            </p>
            <p>
            <Link to = "/about">About</Link> 
            </p>
            <p>
            <Link to = "/contact">Contact</Link> 
            </p>
        </nav>
    )

}

export default Navbar;