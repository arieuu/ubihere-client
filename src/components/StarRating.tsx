
interface Props {
    color: string;
}

function StarRating({color}: Props) {

    if(color == "white") {
        return(

            <div className="rating rating-sm">
                <form action="">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-white" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-white" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-white" defaultChecked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-white" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-white" />
                </form>
            </div>
            
        )

    } else if (color == "black") {
        return(

            <div className="rating rating-sm">
                <form action="">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-black" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-black" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-black" defaultChecked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-black" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-black" />
                </form>
            </div>
        
        )
    }
}

export default StarRating;