import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function BinarySearch704() {

    const[nums, changeNums] = useState([])
    const[target, changeTarget] = useState(null)

    const title = 
    `
    704. Binary Search
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
    `
    
    const solution = 
    `
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    var search = function(nums, target) {
        let result = nums.findIndex((number) => number == target)
        return result
    };
    `

    var search = function(nums, target) {
        let result = nums.findIndex((number) => number == target)
        return result
    }

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

export default BinarySearch704