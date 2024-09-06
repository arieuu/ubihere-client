import logo from "/ubiherelogo.svg";
import arrow from "/arrow.svg";
import NavigationLinks from "../components/NavigationLinks";


function LoginPage() {
    return(
        <div className="flex flex-col justify-center align-middle pt-48 pb-8 mx-6">
            <div className="mx-auto mb-3 flex gap-2">
                <h1 className="text-5xl font-Odor
                                sm:text-6xl"> UBIHERE </h1>
                <img src={logo} alt="" className="w-[44px] h-[46px]"/>
            </div>

            <NavigationLinks /> 

            <form action="" className="flex flex-col">
                <input className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="text" placeholder="Insira o seu email" />
                <input className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="password" placeholder="Crie uma palavra passe" />


                <button type="submit" className="mx-auto hover:bg-[#CFB619] flex justify-between bg-YellowUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" >  
                    Entrar
                    <img className="w-6" src={arrow} alt="" />
                </button> 
            </form>


            <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0 px-6 text-center"> 
                Ubiwhere 2007-2024. All rights reserved. 
            </div>
        </div>
    )
}

export default LoginPage;