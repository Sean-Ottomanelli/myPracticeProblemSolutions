import { useState } from "react";

function ProblemCard(props) {

    const[visible, changeVisibility] = useState(false)

    return(
        <div className = {"problemCard"}>
            <button className = {visible ? "problemTitle problemTitleActive" : "problemTitle"} onClick = {() => {changeVisibility(!visible)}}>{props.title}</button>
            <div className = {visible ? "collapsingContent uncollapse" : "collapsingContent"}>
            <p>
                Language: 
            </p>
            <p>
                {props.language}
            </p>
            <hr/>
            <p>
                Prompt:
            </p> 
            <p>
                {props.problem}
            </p>
            <hr/>
            <p>
                Solution:
            </p> 
            <pre>
                {props.solution}
            </pre>
        </div>
            
        </div>
    )

}

export default ProblemCard