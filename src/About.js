import { Link } from "react-router-dom"

export const AboutPage=()=>{
    return(
        <div>
            <div>About Page</div>
            <Link to={'/contact'}>Go to Contact</Link>
        </div>
    )
}