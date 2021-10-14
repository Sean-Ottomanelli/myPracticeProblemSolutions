import { useState } from "react";

function ProblemCard(props) {

    const[visible, changeVisibility] = useState(false)

    let fullInformation = 
        <div>
            <h4>
                Language: {props.language}
            </h4>
            <div>
                {props.problem}
            </div>
            <pre>
                {props.solution}
            </pre>
        </div>

    return(
        <div className = {"problemCard"}>
            <button onClick = {() => {changeVisibility(!visible)}}>{visible ? "HIDE" : "SHOW"}</button>
            <h3>
                {props.title}
            </h3>
            {visible 
            ? <div className = "expandable">{fullInformation}</div>
            : null}
            
        </div>
    )

}

export default ProblemCard