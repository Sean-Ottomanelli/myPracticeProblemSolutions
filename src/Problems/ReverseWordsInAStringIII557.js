import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function ReverseWordsInAStringIII557() {

    const title = 
    `
    557. Reverse Words in a String III
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

    `
    
    const solution = 
    `
    /**
     * @param {string} s
     * @return {string}
     */
    var reverseWords = function(s) {
        
        let newArray = s.split(" ")
        
        let reversedWords = newArray.map(word => {
            let splitWord = word.split("")
            let reversedSplitWord = splitWord.reverse()
            let reversedWord = reversedSplitWord.join("")
            return reversedWord
        })
        
        return reversedWords.join(" ")
        
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

export default ReverseWordsInAStringIII557