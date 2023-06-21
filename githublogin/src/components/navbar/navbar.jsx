import Link from "next/link";
import "./style.css"
import ProfileIcon from "../profile";


function Navbar(){

    return(
        <nav className="nav-container">
            <Link href={"/"}> INFO </Link>
            <ProfileIcon />
        </nav>
    )
}

export default Navbar;