import logo from "/ubiherelogo.svg";
import arrow from "/arrow.svg";
import NavigationLinks from "../components/NavigationLinks";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useRetrieveUser from "../hooks/useRetrieveUser";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateProject from "../hooks/useCreateProject";
import ErrorAlert from "../components/ErrorAlert";
import { Link } from "react-router-dom";

const MAX_FILE_SIZE = 5000000; // Figure the bug with this 
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg", "svg"];

const schema = z.object({
    title: z.string().min(6, {message: "Title too short"}),
    content: z.string().min(20, {message: "Project content too short"}),

    // Validating image (file input) with zod

    projectImage: z
    .any()
    .refine((files) => files?.length === 1, "Image is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),

});

type SchemaShape = z.infer<typeof schema>;

function CreateProjectPage() {

    const { register, handleSubmit, formState: { errors }} = useForm<SchemaShape>({ resolver: zodResolver(schema)});
    const { mutate, isLoading: isCreateProjectLoading, isError: isCreateProjectError, error: errorCreateProject } = useCreateProject();

    const token = localStorage.getItem("loginToken")!.split('.');
    const tokenPayload = JSON.parse(atob(token[1]));
    const userId = tokenPayload.user_id
    const { data: userInformation } = useRetrieveUser(userId)

    console.log(userInformation)

    const onSubmit: SubmitHandler<SchemaShape> = (data) => {

        /* 
           We don't even need to prevent form default behaviour.
           We Also don't need to check if the data has been received because
           the form won't submit until everything has been validated
        */

        const title = data.title;
        const content = data.content;
        const projectImage = data.projectImage[0];

        // Get data from token payload and use the user id to get complete information from the api

        
        mutate({title: title,
                about: content,
                image: projectImage,
                owner_email: userInformation?.email,
            });

    }


    return(
        <div className="max-w-[500px] mx-auto">
            <div className="flex flex-col justify-center align-middle pt-16 pb-8 mx-6">
                <div className="mx-aut mb-2 flex gap-2">
                    <Link to={"/"} >
                        <h1 className="text-5xl font-Odor
                                    sm:text-6xl"> UBIHERE </h1>
                    </Link>
                    <img src={logo} alt="" className="w-[44px] h-[46px]"/>
                </div>


                <span className="mx-aut text-[17px] mb-8">
                    <NavigationLinks />
                </span>

                <h2 className="font-Odor text-5xl mb-7"> Criar um projeto </h2>


                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <input {...register("title")} className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="text" placeholder="Insira um titulo" />
                    { (errors.title) && <ErrorAlert message={errors.title?.message}/> }


                    <textarea {...register("content")} className="mx-auto h-40 bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" placeholder="Pitch do projecto" />
                    { (errors.content) && <ErrorAlert message={errors.content?.message}/> }


                    <input {...register("projectImage")} className="mx-auto bg-LightgrayUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" type="file" placeholder="Imagem do projeto" />
                    { (errors.projectImage) && <ErrorAlert message={errors.projectImage?.message?.toString()}/> }


                    <button type="submit" className="mx-auto hover:bg-[#CFB619] flex justify-between bg-YellowUbihere-0 w-full max-w-[450px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-3" >  
                        Criar projeto
                        { !isCreateProjectLoading ?
                            <img className="w-6" src={arrow} alt="" /> :
                            <span className="loading loading-ball loading-lg"></span> 
                        }

                    </button> 
                </form>


                { isCreateProjectError && <ErrorAlert message={errorCreateProject.message}/> }



                <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0 px-6 text-center"> 
                    Ubiwhere 2007-2024. All rights reserved. 
                </div>
            </div>
        </div>
    )
}

export default CreateProjectPage;