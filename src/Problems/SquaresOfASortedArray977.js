import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function SquaresOfASortedArray977() {

    const title = 
    `
    977. Squares of a Sorted Array
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
    `
    
    const solution = 
    `
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    var sortedSquares = function(nums) {
        
        let squaredNums = nums.map(number => number*number)
        
        let sortedNums = squaredNums.sort((a, b) => {
    return a - b})
        
        return sortedNums
        
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

export default SquaresOfASortedArray977