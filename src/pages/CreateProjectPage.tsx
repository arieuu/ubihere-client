import logo from "/ubiherelogo.svg";
import arrow from "/arrow.svg";

function CreateProjectPage() {
    return(
        <div className="max-w-[500px] mx-auto">
        <div className="flex flex-col justify-center align-middle pt-16 pb-8 mx-6">
            <div className="mx-aut mb-2 flex gap-2">
                <h1 className="text-5xl font-Odor
                                sm:text-6xl"> UBIHERE </h1>
                <img src={logo} alt="" className="w-[44px] h-[46px]"/>
            </div>

            <span className="mx-aut text-[17px] mb-8"> 
                <a className="hover:underline" href="#"> Sign Up </a> 
                | <a className="hover:underline" href="#"> Login </a>
                | <a className="hover:underline" href="#"> Projects </a>
            </span>

            <h2 className="font-Odor text-5xl mb-7"> Criar um projeto </h2>
            <form action="" className="flex flex-col">
                <input className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="text" placeholder="Insira um titulo" />
                <textarea className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" placeholder="Pitch do projecto" />
                <input className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="file" placeholder="Imagem do projeto" />


                <button type="submit" className="mx-auto flex justify-between bg-YellowUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" >  
                    Criar projeto
                    <img className="w-6" src={arrow} alt="" />
                </button> 
            </form>


            <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0 px-6 text-center"> 
                Ubiwhere 2007-2024. All rights reserved. 
            </div>
        </div>
        </div>
    )
}

export default CreateProjectPage;