import { Link } from "react-router-dom";

const NavBar = ({ displayMenu, menuIcon, menuIconClass, navbarListClass }) => {
    return <>
        <div className="navbar-logo">
            <p className="navbar-logo-p">iFio</p>
        </div>
        <div className="navbar-menu" onClick={displayMenu}>
            {
                menuIcon.map((icon) => {
                    return <div className={menuIconClass} key={icon}></div>
                })
            }
        </div>

        <nav className={navbarListClass}>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link onClick={displayMenu} className="navbar-link" to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={displayMenu} className="navbar-link" to="/studies">Studies</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={displayMenu} className="navbar-link" to="/workexperience">Work Experience</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={displayMenu} className="navbar-link" to="/portfolio">Potfolio</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={displayMenu} className="navbar-link" to="/contactme">Contact me</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default NavBar;