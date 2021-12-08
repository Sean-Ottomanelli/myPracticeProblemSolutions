import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function BlankTemplate() {

    const title = 
    `
    733. Flood Fill
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

    You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

    To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

    Return the modified image after performing the flood fill.

    `
    
    const solution = 
    `
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} newColor
     * @return {number[][]}
     */
    var floodFill = function(image, sr, sc, newColor) {
        const originColor = image[sr][sc]
        let row = sr
        let column = sc
        
        function helper(row, column){
            
            //console.log ("I am looking at", row,",", column)

            
                image[row][column] = newColor
            
                //console.log("checking pixel above", row,",",column)     
                if(image[row - 1]){
                    if(image[row - 1][column] === originColor){
                        //console.log("updating pixel above", row,",",column)
                        helper(row - 1,column)
                    }
                }
                //console.log("checking pixel to left of", row,",",column)
                if(image[row]){
                    if(image[row][column - 1] === originColor){
                        //console.log("updating pixel to the left of", row,",",column)
                        helper(row,column - 1)
                    }
                }
                //console.log("checking pixel to right of", row,",",column," which is", row, column + 1, " which contains", image[row][column + 1])
                if(image[row]){
                    if(image[row][column + 1] === originColor){
                        //console.log("updating pixel to the right of", row,",",column)
                        helper(row,column + 1)
                    }
                }
                //console.log("checking pixel below", row,",",column)
                if(row + 1 < image.length){
                    if(image[row + 1][column] === originColor){
                        //console.log("updating pixel below", row,",",column)
                        helper(row + 1,column)
                    }
                }
            }
        
        if(image[row][column] != newColor){
            helper(row,column)
        }
        
        return image
        
    };
        //determine color of origin
        //create an array of pixels to check if their color matches the origin
        //push the origin into the array
        
        //recursive (while array contains elements)
            //remove first pixel from the array and assign to updatedPixel variable
            //change value of updatedPixel
            //check top, left, right, bottom of updatedPixel
            //?? may need to add conditional logic here to check if color exists (i.e. wer still within the bounds of the matrix)
                //if the pixel color matches origin push pixel into end of array
        
        //return updated color
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