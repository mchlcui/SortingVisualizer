import React from "react";
import SortingPage from "../SortingPage";

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function selectionSort(arr) {
     
    const currbars = document.getElementsByClassName("bar");
    let minind = 0;
    let i = 0
    for (i; i < arr.length; i++) {
        minind = i;
        let curr = arr[i]
        
        for (let n = i+1; n < arr.length; n++) {
            if (arr[n] < curr) {
                curr = arr[n];
                minind = n;
            }
        }
        arr[minind] = arr[i];
        arr[i] = curr;
        currbars[minind].style.height = arr[minind] * 20 + "px";
        currbars[minind].style.backgroundColor = "red";
        currbars[i].style.height = arr[i] * 20 + "px";
        currbars[i].style.backgroundColor = "green";
        await sleep(500);
        
    }
}

const algorithm = selectionSort;

function SelectionSortPage() {
    return (
        <SortingPage algorithm={algorithm}/>
    )
}

export default SelectionSortPage;