
function ProjectCard() {
    return(
        <a href="" className="">
        <div className="bg-[url('/aveiro.png')] bg-cover rounded-lg px-4 py-1
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
            "> 

            <h1 className="text-4xl font-Odor text-white justify-self-center my-auto ml- pt-8 hover:underline"> Smart lamp </h1>

            <div className="flex justify-between font-Lexend text-white text-sm">
                <span>Starts</span> <span>210 people rated</span>
            </div>
        </div>
        </a>
    )
}

export default ProjectCard;