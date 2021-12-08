import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function PermutationInString567() {

    const title = 
    `
    567. Permutation in String
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

    In other words, return true if one of s1's permutations is the substring of s2.
    `
    
    const solution = 
    `
    var checkInclusion = function(s1, s2) {
    
        let s1Split = s1.split("").sort()
        let s1Length = s1Split.length
        let s2Split = s2.split("")
        let s2Length = s2Split.length
        
        let window = []
        
        for(let i = 0; i < s1Length; i++){
            window.push(s2Split[i])
        }
        
        window = window.sort()
        
        
        for(let left = 0, right = s1Length; right <= s2Length; left++, right++){
            
            if(window.join("") === s1Split.join("")){
                return true
            }
            
            removeFrom = window.indexOf(s2Split[left])
            window.splice(removeFrom,1)
            window.push(s2Split[right])
            window.sort()        
        }
        
        return false
        
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

export default PermutationInString567