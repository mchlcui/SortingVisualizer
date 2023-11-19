import SortingPage from "../SortingPage";
import React, { useEffect } from "react";
import { useState } from "react";
import '../../Section.css';


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function insertionSort(arr,) {
    const currbars = document.getElementsByClassName("bar");
    currbars[0].style.backgroundColor = "green";
    for (let i = 1; i < arr.length; i++) {
    
        let curr = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > curr) {
            currbars[j].style.backgroundColor = "yellow";
            currbars[j+1].style.backgroundColor = "yellow";
            arr[j+1] = arr[j];
            arr[j] = curr;
            await sleep(500);
            currbars[j+1].style.height = arr[j+1] * 20 + "px";
            currbars[j].style.height = arr[j] * 20 + "px";
            currbars[j].style.backgroundColor = "green";
            currbars[j+1].style.backgroundColor = "green";
            
            await sleep(500);
            
            j--;

        }


        arr[j+1] = curr;
        currbars[j+1].style.height = arr[j+1] * 20 + "px";
        currbars[j+1].style.backgroundColor = "green";
        
        await sleep(500);
    }
}

const algorithm = insertionSort;

function InsertionSortPage() {
    
    return (
  
        <SortingPage algorithm={ algorithm } />
      
    )
}
export default InsertionSortPage;
        
    
     