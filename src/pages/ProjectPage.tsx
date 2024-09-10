import logo from "/ubiherelogo.svg";
import ProjectComment from "../components/ProjectComment";
import NavigationLinks from "../components/NavigationLinks";
import StarRating from "../components/StarRating";
import { useParams } from "react-router-dom";
import useRetrieveProject from "../hooks/useRetrieveProject";
import useGetComments from "../hooks/useGetComments";
import { z } from "zod";
import ErrorAlert from "../components/ErrorAlert";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateComment from "../hooks/useCreateComment";
import useRetrieveUser from "../hooks/useRetrieveUser";
import { useRef, useState } from "react";
import { IComment, IUser } from "../types/main";

const schema = z.object({
    comment: z.string().min(1, {message: "Comment can't be empty"}),
});

type SchemaShape = z.infer<typeof schema>;


function ProjectPage() {

    const { projectId } = useParams();
    const { data: project  } = useRetrieveProject(projectId ? projectId : "none");
    const { data: comments } = useGetComments();

    const { register, handleSubmit, formState: { errors }, setValue: setCommentInputValue } = useForm<SchemaShape>({ resolver: zodResolver(schema)});
    const { mutate, isError: isCommentError, error: createCommentError } = useCreateComment();

    // Getting comment input value so we can manipulate it


    // Getting data from the user that's currently logged in

    const token = localStorage.getItem("loginToken")?.split('.');
    let tokenPayload
    let userId 

    if(token) {
        tokenPayload = JSON.parse(atob(token[1]));
        userId = tokenPayload.user_id
    }

    const { data: userInformation } = useRetrieveUser(userId)

    const [madeComments, setMadeComments] = useState<IComment[]>([])

    const onSubmit: SubmitHandler<SchemaShape> = (data) => {
        /* 
           We don't even need to prevent form default behaviour.
           We Also don't need to check if the data has been received because
           the form won't submit until everything has been validated
        */

        
        const comment = data.comment;

        if(!isCommentError) {
        madeComments.unshift({
            commenter_name: userInformation!.name,
            comment_owner_email: userInformation!.email,
            content: comment,
            project_id: projectId!
        });
    }

        setMadeComments(madeComments);

        console.log("Collected data: " + comment)

        mutate({
            commenter_name: userInformation!.name,
            comment_owner_email: userInformation!.email,
            content: comment,
            project_id: projectId!
        });

        
        
        if(isCommentError) {
            madeComments.shift()
            setMadeComments(madeComments)
        }

        // Cleaning input after comment submission

        setCommentInputValue("comment", "")
    }

    return(
        <div className="max-w-[650px] mx-auto">
            <div className="flex flex-col justify-center align-middle pt-12 pb-8 mx-6">
                <div className="mx-aut mb-2 flex gap-2">
                    <h1 className="text-5xl font-Odor
                                    sm:text-6xl"> UBIHERE </h1>
                    <img src={logo} alt="" className="w-[44px] h-[46px]"/>
                </div>

                <span className="mx-aut text-[17px] mb-8">
                    <NavigationLinks />
                </span>

                <h2 className="font-Odor text-5xl mb-5"> {project?.title}</h2>

                <StarRating color="black" />
                <span className="font-Lexend text-sm mb-7"> {project?.number_of_responses} people rated </span>

                <img src={project?.image} className="mb-10" alt="" />
                
                {/*<p className="text-xl mb-24"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo molestiae fugit voluptas dicta optio ex, quae ipsam similique consectetur voluptatibus sed sunt, nesciunt libero est autem et maiores magni asperiores esse nisi officiis eum laborum? Cumque debitis natus earum dolorem veritatis architecto doloremque aut hic ducimus dicta adipisci perferendis quam nobis, sapiente et dolorum sit magni officia optio velit? 
                    Amet dolores deleniti atque vitae quisquam cumque, <br /> <br /> ratione eius veritatis perferendis ad illum obcaecati voluptatibus eligendi aliquam facere iste impedit. Inventore voluptatum tempore, eaque doloremque deserunt laboriosam dignissimos suscipit architecto aspernatur distinctio quasi! Atque odit magnam in assumenda aspernatur voluptates consequatur eos aliquam qui nostrum modi nemo, non doloremque laborum voluptas sapiente, nesciunt saepe? Consequatur necessitatibus qui eaque. Itaque et optio vitae sed cupiditate consectetur tenetur! Vero, illum molestiae voluptatem quisquam excepturi cumque in placeat! Corporis consequatur dolore velit fugit eius quidem non, ad, consectetur tempora distinctio
                     quam impedit inventore accusamus ab at modi! Nam, laudantium similique! Veritatis <br /> <br /> at ullam dignissimos beatae tempora illo eum officiis iusto commodi totam sit rem excepturi veniam molestias, fugiat natus? Natus dolore ullam voluptatem optio, aliquid laudantium distinctio amet assumenda impedit cumque nesciunt nobis. Aspernatur, nobis. Natus, in ullam officia non rem quia nulla repellat? 
                </p>
                */}

                <p className="text-xl mb-20">
                    {project?.about}
                </p>

                { 
                    localStorage.getItem("loginToken") ?

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("comment")} className="mx-auto bg bg-[url('/arrowdown.svg')] bg-no-repeat bg-left pl-[60px]  bg-LightgrayUbihere-0 w-full max-w-[650px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-12" type="text" placeholder="Escreva o seu comentário"/>
                        { (errors.comment) && <ErrorAlert message={errors.comment?.message}/> }
                    </form> : 
                    
                    <h3 className="text-xl mx-auto mb-16 text-DarkgrayUbihere-0"> Login to comment </h3>
                }

                { isCommentError && <ErrorAlert message={createCommentError?.message}/>}

                { madeComments?.map((comment) => {
                    if (comment.project_id == (project?.id)?.toString()) {
                        return <ProjectComment comment={comment}/>
                    }
                })}

                { comments?.map((comment) => {
                    if (comment.project_id == (project?.id)?.toString()) {
                        return <ProjectComment comment={comment}/>
                    }
                })}

                <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0 px-6 text-center"> 
                    Ubiwhere 2007-2024. All rights reserved. 
                </div>
            </div>
        </div>
    )

}

export default ProjectPage;