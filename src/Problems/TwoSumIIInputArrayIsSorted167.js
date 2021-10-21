import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function TwoSumIIInputArrayIsSorted167() {

    const title = 
    `
    167. Two Sum II - Input array is sorted
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= first < second <= numbers.length.

    Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution. You may not use the same element twice.
    `
    
    const solution = 
    `
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    var twoSum = function(numbers, target) {
        
        let indeces = []
        
        for (let i = 0; i < numbers.length && indeces.length < 2; i++) {
            
            let num1 = numbers[i]
            
            for (let j = i+1; j < numbers.length && indeces.length < 2; j++) {
                
                let num2 = numbers[j]
                
                if ( num1 + num2 == target) {
                    indeces.push(i + 1, j + 1)
                }
                
            }
            
            
        }
            
            
        
        return indeces
        
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

export default TwoSumIIInputArrayIsSorted167