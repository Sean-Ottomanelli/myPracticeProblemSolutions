import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function SearchInsertPosition35() {

    const title = 
    `
    35. Search Insert Position
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
    `
    
    const solution = 
    `
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    var searchInsert = function(nums, target) {
        
        let count = nums.length
        let number = 0
        
        if (nums.some((number) => number == target)) {
            return(nums.indexOf(target))
        } else {
            let newNums = nums.map(number => number < target ? 1 : 0)
            let index = newNums.reduce((a, b) => a + b)
            return index
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

export default SearchInsertPosition35