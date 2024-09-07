import logo from "/ubiherelogo.svg";
import arrow from "/arrow.svg";
import NavigationLinks from "../components/NavigationLinks";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorAlert from "../components/ErrorAlert";
import useSignUp from "../hooks/useSignUp";

const schema = z.object({
    email: z.string().email({message: "Not a valid email format"}),
    password: z.string().min(6, {message: "Password too short"}),
    name: z.string().min(6, {message: "name too short"}),

});

type SchemaShape = z.infer<typeof schema>;

function SignupPage() {

    const { register, handleSubmit, formState: { errors }} = useForm<SchemaShape>({ resolver: zodResolver(schema)});
    const { mutate } = useSignUp();

    const onSubmit: SubmitHandler<SchemaShape> = (data) => {

        /* 
           We don't even need to prevent form default behaviour.
           We Also don't need to check if the data has been received because
           the form won't submit until everything has been validated
        */

        const email = data.email;
        const password = data.password;
        const name = data.name;

        console.log("Collected data: " + email + password + name)

        mutate({email, password, name});

    }

    return(
        <div className="flex flex-col justify-center align-middle pt-16 pb-8 mx-6">
            <div className="mx-auto mb-3 flex gap-2">
                <h1 className="text-5xl font-Odor
                                sm:text-6xl"> UBIHERE </h1>
                <img src={logo} alt="" className="w-[44px] h-[46px]"/>
            </div>

            <NavigationLinks /> 
            

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <input {...register("email")} className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="text" placeholder="Insira o seu email" />
                { (errors.email) && <ErrorAlert message={errors.email?.message}/> }

                <input {...register("password")} className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="password" placeholder="Crie uma palavra passe" />
                { (errors.password) && <ErrorAlert message={errors.password?.message}/> }

                <input {...register("name")} className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="text" placeholder="Insira um nome" />
                { (errors.name) && <ErrorAlert message={errors.name?.message}/> }


                <button type="submit" className="mx-auto hover:bg-[#CFB619] flex justify-between bg-YellowUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" >  
                    Criar conta 
                    <img className="w-6" src={arrow} alt="" />
                </button> 
            </form>


            <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0 px-6 text-center"> 
                Ubiwhere 2007-2024. All rights reserved. 
            </div>
        </div>
    )

}

export default SignupPage;