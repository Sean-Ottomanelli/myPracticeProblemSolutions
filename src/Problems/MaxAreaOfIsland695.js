import { useState } from "react";
import ProblemCard from "../ProblemCard.js";

function BlankTemplate() {

    const title = 
    `
    695. Max Area of Island
    `
    
    const language = 
    `
    JavaScript
    `

    const problem = 
    `
    You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

    The area of an island is the number of cells with a value 1 in the island.

    Return the maximum area of an island in grid. If there is no island, return 0.
    `
    
    const solution = 
    `
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    var maxAreaOfIsland = function(grid) {
        let count = 0
        const maxGridRowIndex = grid.length - 1
        const maxGridColumnIndex = grid[0].length - 1
        
        function outsideFunction(row, column){
            let newCount = 0
            //console.log(row, column)
            
            function insideFunction(row, column){
                if (grid[row][column] === 1) newCount++
                grid[row][column] = 2
                console.log(row, column, newCount, count)
                let surroundingPixels = [[row -1,column],[row,column - 1],[row,column + 1],[row + 1,column]]
                surroundingPixels = surroundingPixels.filter(pixel => (pixel[0] >= 0 && pixel[0] <= maxGridRowIndex && pixel[1] >= 0 && pixel[1] <= maxGridColumnIndex))
                surroundingPixels = surroundingPixels.filter(pixel => grid[pixel[0]][pixel[1]] === 1)
                console.log(surroundingPixels)
                surroundingPixels.forEach(pixel => insideFunction(pixel[0], pixel[1]))            
            }
            
            insideFunction(row, column)
            
            count = Math.max(newCount, count)
        }
        
        
        grid.forEach((rowArray, rowIndex) => rowArray.forEach((element, columnIndex) => {
            //console.log(element, rowIndex, columnIndex)
            if(element === 1){
                //console.log(element, rowIndex, columnIndex)
                outsideFunction(rowIndex, columnIndex)
            }
        }))
        
        return(count)
        
        
        
    };

    //create count = 0

    //iterate over grid rows (forEach rowArray, rowIndex)
        //iterate over elements of rows (forEach element, columnIndex)
            //if element is 1 run outsideFunction

    //outside function(rowIndex,columnIndex)

        //create newCount = 0

        //insideFunction(rowIndex,columnIndex):
            //set pixel value to 2
            //increment newCount
            //create array of surrounding pixels
            //filter array of surrounding pixels: remove pixels with an invalid row, remove pixels with an invalid column
            //filter array of surroudning pixels: remove pixels that are not 1
            //for each pixel in array run insideFunction

        //run insideFunction(rowIndex,columnIndex)

        //if newCount is greater than count, count = newCount

    //return count
            
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