import { Link } from "react-router-dom";



function NavigationLinks() {

    const onClickLogout = () => {
        localStorage.removeItem("loginToken")
    }

    return(
        <span className="mx-auto text-[17px] mb-14"> 
            <Link className="hover:underline" to={"/"}> Projects </Link> 
            | <Link className="hover:underline" to={"/signup"}> Sign up </Link>
            | <Link className="hover:underline" to={"/login"}> Login </Link>
            | <Link className="hover:underline" to={"/createproject"}> Create project </Link>
            | <Link className="hover:underline" to={"/"} onClick={onClickLogout}> Logout </Link>
        </span>
    )
}

export default NavigationLinks;