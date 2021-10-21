import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function ReverseString344() {

    const title = 
    `
    344. Reverse String
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Write a function that reverses a string. The input string is given as an array of characters s.
    `
    
    const solution = 
    `
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    var reverseString = function(s) {
        
        for (let i = 0; i <= s.length - 1; i++) {
            
            s.splice(i,0,s[s.length-1])
            s.pop(s.length-1)
            
        }
        
    };
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

export default ReverseString344