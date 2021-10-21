import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function MiddleOfTheLinkedList876() {

    const title = 
    `
    876. Middle of the Linked List
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.
    `
    
    const solution = 
    `
    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    var middleNode = function(head) {
        
        let A = [head];
        while (A[A.length - 1].next != null)
        A.push(A[A.length - 1].next)
        console.log(A)
        return A[Math.trunc(A.length/2)]

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

export default MiddleOfTheLinkedList876