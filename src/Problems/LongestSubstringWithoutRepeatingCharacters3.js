import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function LongestSubstringWithoutRepeatingCharacters3() {

    const title = 
    `
    3. Longest Substring Without Repeating Characters
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given a string s, find the length of the longest substring without repeating characters.
    `
    
    const solution = 
    `
    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function(s) {
        let sArray = s.split("")
        let longestString = 0
        sArray.forEach((letter,index) => {
            let currentArray = [letter]
            console.log(letter)
            let i = 0
            while (i == 0) {
                if (currentArray.includes(s[index+1]) || index + 1 == sArray.length){
                    if (longestString < currentArray.length) {
                        longestString = currentArray.length
                    } else {null}
                    i = 1
                } else {
                    currentArray.push(s[index+1])
                    index = index + 1
                }
            }
            
        })
        return longestString
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

export default LongestSubstringWithoutRepeatingCharacters3