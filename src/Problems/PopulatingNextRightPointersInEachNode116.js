import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function PopulatingNextRightPointersInEachNode116() {

    const title = 
    `
    116. Populating Next Right Pointers in Each Node
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

    struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
    }
    Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

    Initially, all next pointers are set to NULL.

    `
    
    const solution = 
    `
    /**
     * // Definition for a Node.
     * function Node(val, left, right, next) {
     *    this.val = val === undefined ? null : val;
     *    this.left = left === undefined ? null : left;
     *    this.right = right === undefined ? null : right;
     *    this.next = next === undefined ? null : next;
     * };
     */

    /**
     * @param {Node} root
     * @return {Node}
     */
    var connect = function(root) {
        if(root === null) return null
        let q = []
        let depth = root
        
        q.push(root)
        
        while(q.length > 0){
            current = q.shift()
            if(current.left) q.push(current.left)
            if(current.right) q.push(current.right)
            if(q.length > 0) current.next = q[0]
        }
        
        while(depth.right !== null){
            console.log(depth)
            depth.next = null
            depth = depth.right
        }
        
        return root
        
    };

    //create an array called q
    //push root into q

    // iterative(while q.length > 0){
        //shift out first element from q and store to current
        //if current.left
            //push current.left into q
        //if current.right
            //push current.right into q
        //if q.length > 0
            //current.next = q[0]
        
    //}
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

export default PopulatingNextRightPointersInEachNode116