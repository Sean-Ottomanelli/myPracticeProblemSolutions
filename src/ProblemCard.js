import { useState } from "react";

function ProblemCard(props) {

    return(
        <div className = {"problemCard"}>
            <h3>
                {props.title}
            </h3>
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
    )

}

export default ProblemCard