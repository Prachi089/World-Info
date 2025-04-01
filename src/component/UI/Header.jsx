import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
//import { useState } from "react";

export const Header=()=>{

   // const [show, setShow] = useState(false)

    // const handleButtonToggle=()=>{
    //     return setShow(!show)
    // }

    return(
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                   <div className="Logo">
                       <NavLink to="/">
                         <h1>WorldInfo</h1>
                       </NavLink>
                   </div>

                   <nav className="grid">
                        <ul>
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/country">Country</NavLink>
                            </li>
                            
                        </ul>
                   </nav>
                   {/* <div className="ham-menu">
                    <button onClick={handleButtonToggle}>
                        <GiHamburgerMenu />
                    </button>
                   </div> */}
                </div>
            </div>
        </header>
    )
}