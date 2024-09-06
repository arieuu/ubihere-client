import logo from "/ubiherelogo.svg";
import aveirobig from "/aveirobig.svg";
import ProjectComment from "../components/ProjectComment";


function ProjectPage() {

    return(
        <div className="max-w-[650px] mx-auto">
            <div className="flex flex-col justify-center align-middle pt-12 pb-8 mx-6">
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


                <h2 className="font-Odor text-5xl mb-5"> Smart lamp </h2>

                <span className="font-Lexend"> 5 Start </span>
                <span className="font-Lexend text-sm mb-7"> 203 people rated </span>

                <img src={aveirobig} className="mb-10" alt="" />
                <p className="text-xl mb-24"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo molestiae fugit voluptas dicta optio ex, quae ipsam similique consectetur voluptatibus sed sunt, nesciunt libero est autem et maiores magni asperiores esse nisi officiis eum laborum? Cumque debitis natus earum dolorem veritatis architecto doloremque aut hic ducimus dicta adipisci perferendis quam nobis, sapiente et dolorum sit magni officia optio velit? 
                    Amet dolores deleniti atque vitae quisquam cumque, <br /> <br /> ratione eius veritatis perferendis ad illum obcaecati voluptatibus eligendi aliquam facere iste impedit. Inventore voluptatum tempore, eaque doloremque deserunt laboriosam dignissimos suscipit architecto aspernatur distinctio quasi! Atque odit magnam in assumenda aspernatur voluptates consequatur eos aliquam qui nostrum modi nemo, non doloremque laborum voluptas sapiente, nesciunt saepe? Consequatur necessitatibus qui eaque. Itaque et optio vitae sed cupiditate consectetur tenetur! Vero, illum molestiae voluptatem quisquam excepturi cumque in placeat! Corporis consequatur dolore velit fugit eius quidem non, ad, consectetur tempora distinctio
                     quam impedit inventore accusamus ab at modi! Nam, laudantium similique! Veritatis <br /> <br /> at ullam dignissimos beatae tempora illo eum officiis iusto commodi totam sit rem excepturi veniam molestias, fugiat natus? Natus dolore ullam voluptatem optio, aliquid laudantium distinctio amet assumenda impedit cumque nesciunt nobis. Aspernatur, nobis. Natus, in ullam officia non rem quia nulla repellat? 
                </p>

                <input className="mx-auto bg bg-[url('/arrowdown.svg')] bg-no-repeat bg-left pl-[60px]  bg-LightgrayUbihere-0 w-full max-w-[650px] mx- p-5 placeholder:text-DarkgrayUbihere-0 rounded-[28px] mb-12" type="text" placeholder="Escreva o seu comentário" />

                <ProjectComment />
                <ProjectComment />
                <ProjectComment />
                <ProjectComment />

                <div className="mt-9 text-[17px] flex justify-center text-DarkgrayUbihere-0 px-6 text-center"> 
                    Ubiwhere 2007-2024. All rights reserved. 
                </div>
            </div>
        </div>
    )

}

export default ProjectPage;