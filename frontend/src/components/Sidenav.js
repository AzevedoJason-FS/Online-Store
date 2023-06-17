import Logo from "../static/steam_logo.png";

const Sidenav = () => {
    return(
        <nav>
            <span>
            <img id="logo" src={Logo} alt="Logo" />
            </span>
            <span>
            <a href="/" id="nav_link">Store</a>
            </span>
        </nav>
    )
}

export default Sidenav