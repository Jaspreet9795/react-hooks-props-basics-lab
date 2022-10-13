
// import {github,linkedin} from "../data/user";

function Links(props){
    return (
        
        <nav>
            <h3>Links</h3>
            <a href={props.github}>{props.github} </a>
            <a href={props.linkedin}>{props.linkedin} </a>
        </nav>
    )
}

export default Links;