import { IComment } from "../types/main";

interface Props {
    comment: IComment,
}

function ProjectComment({ comment }:Props) {
    return(
        <p className="text-xl mb-8">
            <p className="font-Odor mb-2"> {comment.commenter_name} </p>
            { comment.content }
        </p>
    )
}

export default ProjectComment;