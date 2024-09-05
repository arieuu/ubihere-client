// bg-[url('public/aveiro.png')]

function ProjectCard() {
    return(
        <div className="bg-[url('public/aveiro.png')]  bg-cover min-h-[190px] rounded-lg px-4 py-1
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
            flex flex-col"> 

            <h1 className="text-4xl font-Odor text-white justify-self-center my-auto ml- pt-8"> Smart lamp </h1>

            <div className="flex justify-between font-Lexend text-white">
                <span>Starts</span> <span>210 people rated</span>
            </div>
        </div>
    )
}

export default ProjectCard;