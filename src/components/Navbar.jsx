import { Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Rakhi</h2>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/services">Services</Link>
                <Link to="/testimonial">Testimonial</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;