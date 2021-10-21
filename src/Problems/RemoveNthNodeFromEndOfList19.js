import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function RemoveNthNodeFromEndOfList19() {

    const title = 
    `
    19. Remove Nth Node From End of List
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    Given the head of a linked list, remove the nth node from the end of the list and return its head.
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
     * @param {number} n
     * @return {ListNode}
     */
    var removeNthFromEnd = function(head, n) {
        let newList = head
        let newerList = head
        let length = 1
        
        while(newList.next){
            newList = newList.next
            length++
        }
        
        let indexToRemove = length - n
        
        if (indexToRemove == 0){
            return head.next
        }
        
        for(let i=0; i<=indexToRemove; i++){
            if(i == indexToRemove-1){
                if(newerList.next.next != undefined){
                    newerList.next=newerList.next.next
                } else {
                    newerList.next = null
                    return head
                }
                
            }
            newerList=newerList.next
        }
        
        return head
            
        
        
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

export default RemoveNthNodeFromEndOfList19