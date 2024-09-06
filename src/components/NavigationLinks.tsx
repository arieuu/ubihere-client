import { Link } from "react-router-dom";



function NavigationLinks() {
    return(
        <span className="mx-auto text-[17px] mb-14"> 
            <Link className="hover:underline" to={"/"}> Projects </Link> 
            | <Link className="hover:underline" to={"/signup"}> Sign up </Link>
            | <Link className="hover:underline" to={"/login"}> Login </Link>
            | <Link className="hover:underline" to={"/createproject"}> Create project </Link>
        </span>
    )
}

export default NavigationLinks;