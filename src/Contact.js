import { Link } from "react-router-dom"

export const ContactPage=()=>{
    return(
        <div>
            <div>Contact Page</div>
            <Link to={'/about'}>Go to about page</Link>
        </div>
    )
}