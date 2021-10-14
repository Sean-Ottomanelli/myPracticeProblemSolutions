import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function RotateArray189() {

    const title = 
    `
    189. Rotate Array

    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given an array, rotate the array to the right by k steps, where k is non-negative.
    `
    
    const solution = 
    `
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var rotate = function(nums, k) {
        
        let count = nums.length
        
        let shift = k % count

        nums.forEach(number => nums.push(number))
        
        nums.splice(0,count-shift)
        
        newCount = nums.length
        
        nums.splice(newCount-shift,shift)
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

export default RotateArray189