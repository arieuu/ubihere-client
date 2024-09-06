import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { IProject } from "../types/main";

interface Props {
    project: IProject
    
}

function ProjectCard({ project }:Props) {
    const img = "bg-[url('" + project.image + "')]"
    
    console.log(img)
    return(
            <div  className="card bg-cover rounded-lg px-4 py-1
                relative 
                z-10
                before:rounded-lg
                before:content-['']
                before:absolute
                before:inset-0
                before:block
                before:bg-gradient-to-r
                before:bg-YellowUbihere-0
                before:opacity-65
                before:z-[-5]
                flex flex-col
                
                min-h-[220px]

                md:min-w-[180px]

                lg:min-w-[260px]
                lg:min-h-[160px]
                "
                style={{backgroundImage: `url(${project.image})`}}  // Adding bg image from api
                > 
                
                <Link to={"/projectpage"} className="text-4xl font-Odor text-white justify-self-center my-auto ml- pt-8 hover:underline"><h1 className=""> {project.title} </h1></Link>

                <div className="flex justify-between font-Lexend text-white text-sm">
                    
                    <StarRating color="white"/> <span> {project.number_of_responses} people rated</span>
                </div>
            </div>
    )
}

export default ProjectCard;