import logo from "../../public/ubiherelogo.svg";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
    return(
        <>
            <div className="flex flex-col justify-center align-middle pt-32 pb-8 border-black border- border-solid ">
                <div className="mx-auto mb-3 flex gap-2">
                    <h1 className="text-5xl font-Odor"> UBIHERE </h1>
                    <img src={logo} alt="" className="w-[44px] h-[46px]"/>
                </div>

                <span className="mx-auto text-[17px] mb-14"> <a href="#">Sign Up</a> | <a href="#">Login</a> | <a href="#">Projects</a></span>

                <div className="grid px-5 gap-6">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>

                <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0"> 
                    Ubiwhere 2007-2024. All rights reserved. 
                </div>
            </div>
        </>
    )
}

export default HomePage;