
interface Props {
    message?: string
}

function ErrorAlert({ message }:Props) {
    return(
        <div className="alert alert-erro bg-white border-red-500 max- mx-auto mb-3 p-5">
            
            <span> { message } </span>
        </div>
    )
}

export default ErrorAlert;