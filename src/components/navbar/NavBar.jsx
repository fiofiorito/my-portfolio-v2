import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
    const menuIcon = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [menuIconClass, setMenuIconClass] = useState("navbar-menu-icon unclicked");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [navbarListClass, setNavbarListClass] = useState("navbar-list-div hidden");

    const displayMenu = () => {
        if (!isMenuClicked) {
            setMenuIconClass("navbar-menu-icon clicked");
            setNavbarListClass("navbar-list-div visible");
        } else {
            setMenuIconClass("navbar-menu-icon unclicked");
            setNavbarListClass("navbar-list-div hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }
    return <div className="navbar">
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
                <li className="navbar-item">navbar</li>
                <li className="navbar-item">navbar</li>
                <li className="navbar-item">navbar</li>
            </ul>
        </nav>
    </div>

}

export default NavBar;