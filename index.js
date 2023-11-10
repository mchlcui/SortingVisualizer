let random_array = document.getElementById("randomize_array");
let sort_btn = document.getElementById("sort_that");
let bars = document.getElementById("bars");
let min = 1;
let max = 20;
let numOfBars = 10;
let curr_arr = new Array(numOfBars)

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

function createRandomArray() {

    for(let i = 0; i <= numOfBars; i++) {
        curr_arr[i] = randomNum()
    }
}

function randomNum() {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}


function displayBars(arr) {
    for (const element of arr) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = element * 20 + "px";
        bars.appendChild(bar)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    createRandomArray();
    displayBars(curr_arr);
});



async function selectionSort(arr) {
    
    let currbars = document.getElementsByClassName("bar");
    let minind = 0;
    for (let i = 0; i < arr.length; i++) {
        curr = arr[i]
        
        for (let n = i; n < arr.length; n++) {
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

    return arr;
}

sort_btn.addEventListener("click", function() {
    let sorted_arr = selectionSort(curr_arr);
    console.log(sorted_arr);
});

random_array.addEventListener("click", function() {
    location.reload();
});