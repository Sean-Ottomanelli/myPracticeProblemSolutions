import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function BlankTemplate() {

    const title = 
    `
    617. Merge Two Binary Trees
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    You are given two binary trees root1 and root2.

    Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

    Return the merged tree.

    Note: The merging process must start from the root nodes of both trees.

    `
    
    const solution = 
    `
    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    var mergeTrees = function(root1, root2) {
        function helper(node1, node2){
            if(node1 === null && node2 === null) return null
            if(node1 === null) return node2
            if(node2 === null) return node1
            
            node1.val = node1.val + node2.val
            node1.left = helper(node1.left, node2.left)
            node1.right = helper(node1.right, node2.right)
            
            return node1
        }
        
        root1 = helper(root1, root2)
        
        return root1
    };

    //create helper function that receives roots of both functions as node1 and node2
        //if both nodes are null return null
        //if node1 is null return node 2
        //if node2 is null return node 1
        
        //otherwise(no else necessary):
        //node1.val = node1.val + node2.val
        //node1.left = helper(node1.left, node1.right)
        //node1.right = helper(node1.right, node1. left)

        //return node1

    //root1 = helper(root1, root2)

    //return root1
    
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

export default BlankTemplate