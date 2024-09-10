import { useState } from "react";
import { Link } from "react-router-dom";



function NavigationLinks() {


    const onClickLogout = () => {
        localStorage.removeItem("loginToken")
        // localStorage.setItem("loginToken", "")
        
        // We set a state so that the component reloads and the appropriate links show right away

        setReloadLinks("Out")
    }

    const loggedInToken = localStorage.getItem("loginToken");
    const [reloadLinks, setReloadLinks] = useState("")

    return(
        <>
        {
            loggedInToken ?

            // Navigation links for logged in user

            <span className="mx-auto text-[17px] mb-14"> 
                <Link className="hover:underline" to={"/"}> Projects </Link> 
                | <Link className="hover:underline" to={"/createproject"}> Create project </Link>
                | <Link className="hover:underline" to={"/"} onClick={onClickLogout}> Logout </Link>
            </span>:

            // Navigation links for logged out user

            <span className="mx-auto text-[17px] mb-14"> 
                <Link className="hover:underline" to={"/"}> Projects </Link> 
                | <Link className="hover:underline" to={"/signup"}> Sign up </Link>
                | <Link className="hover:underline" to={"/login"}> Login </Link>
            </span>
        }
        </>
    )
}

export default NavigationLinks;