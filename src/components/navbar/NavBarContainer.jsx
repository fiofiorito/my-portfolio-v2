// hooks
import { useState } from "react";
// components & style
import "./NavBar.css";
import NavBar from "./NavBar"

const NavBarContainer = () => {
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
        <NavBar displayMenu={displayMenu} menuIcon={menuIcon} menuIconClass={menuIconClass} navbarListClass={navbarListClass} />
    </div>

}

export default NavBarContainer;