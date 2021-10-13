import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function BlankTemplate() {

    const title = 
    `

    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    
    `
    
    const solution = 
    `
    
    `
    ;

    return(
        <div>
            <ProblemCard 
            title = {title}
            language = {language}
            problem = {problem}
            solution = {solution}
            />
        </div>
    )

}

export default BlankTemplate