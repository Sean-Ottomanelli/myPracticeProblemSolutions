import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function MoveZeroes283() {

    const title = 
    `
    283. Move Zeroes
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.
    `
    
    const solution = 
    `
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    var moveZeroes = function(nums) {
        
        let count = nums.length
        
        while(nums.some((number) => number == 0)) {
        
        nums.forEach((number,loc) => {
            if (number == 0) {
                nums.splice(loc,1)
            }
        })
        }
        
        while(nums.length < count)
            nums.push(0)
        
        if (nums[0] == 0) {
            nums.shift()
            nums.push(0)
        }
    }

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

export default MoveZeroes283