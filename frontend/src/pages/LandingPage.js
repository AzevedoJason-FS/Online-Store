import Sidenav from "../components/Sidenav"
import Topbar from "../components/Topbar"

const LandingPage = () => {
    return(
        <div className="container">
            <Sidenav />
            <div className="main">
               <Topbar />
            </div>
        </div>
    )
}

export default LandingPage