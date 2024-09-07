import logo from "/ubiherelogo.svg";
import ProjectCard from "../components/ProjectCard";
import NavigationLinks from "../components/NavigationLinks";
import useGetProjects from "../hooks/useGetProjects";
import { IProject } from "../types/main";

function HomePage() {

    const { isLoading, data: projects, isError } = useGetProjects()
    
    console.log(projects)
    return(
        <>
            <div className="flex flex-col justify-center align-middle pt-28 pb-8 border-black border- border-solid ">
                <div className="mx-auto mb-3 flex gap-2">
                    <h1 className="text-5xl font-Odor
                                    sm:text-6xl"> UBIHERE </h1>
                    <img src={logo} alt="" className="w-[44px] h-[46px]"/>
                </div>

                <NavigationLinks />

                <div className="grid px-5 gap-6 grid-cols-1
                                sm:grid-cols-2
                                md:grid-cols-3 md:max-w-[900px] md:mx-auto md:px-0 md:gap-5">
                    
                    { projects && projects.length ? projects?.map((project) => {
                        return <ProjectCard project={project}/>
                    }) : "no data"}

                </div>

                <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0 px-6 text-center"> 
                    Ubiwhere 2007-2024. All rights reserved. 
                </div>
            </div>
        </>
    )
}

export default HomePage;