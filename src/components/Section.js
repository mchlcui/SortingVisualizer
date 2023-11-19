// import React, { useState, useEffect } from "react";
// import { Button } from "./Button"
// import '../App.css'
// import './Section.css';

// const Section = () => {
//   const min = 1;
//   const max = 20;
//   const numOfBars = 10;
//   const [currArr, setCurrArr] = useState([]);
//   const [sorted, setSorted] = useState(false);

//   useEffect(() => {
//     createRandomArray();
//   }, []);

//   useEffect(() => {
//     displayBars(currArr);
//   }, [currArr]);

//   const sleep = (ms) => {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   };

//   const createRandomArray = () => {
//     let arr = [];
//     for (let i = 0; i < numOfBars; i++) {
//       arr.push(randomNum());
//     }
//     setCurrArr(arr);
//   };

//   const randomNum = () => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   const displayBars = (arr) => {
//     const barsElement = document.getElementById("bars");
//     barsElement.innerHTML = " "; // Clear existing bars

//     arr.forEach((element) => {
//       let bar = document.createElement("div");
//       bar.classList.add("bar");
//       bar.style.height = element * 20 + "px";
//       barsElement.appendChild(bar);
//     });
//   };

//   const selectionSort = async (arr) => {
//     let newArr = [...arr];
//     let currbars = document.getElementsByClassName("bar");
//     let minind = 0;

//     for (let i = 0; i < newArr.length; i++) {
//       minind = i;
//       let curr = newArr[i];

//       for (let n = i + 1; n < newArr.length; n++) {
//         if (newArr[n] < curr) {
//           curr = newArr[n];
//           minind = n;
//         }
//       }
//       newArr[minind] = newArr[i];
//       newArr[i] = curr;
//       setCurrArr(newArr); // Update state
//       await sleep(500);
//     }

//     return newArr;
//   };

//   const handleSort = async () => {
//     if (!sorted) {
//       setSorted(true);
//       let sortedArr = await selectionSort(currArr);
//       console.log(sortedArr);
//     } else {
//       window.location.reload(); // Reset the state
//     }
//   };

//   const handleRandomize = () => {
//     window.location.reload(); // Reset the state
//   };

//   return (
//     <div className="section-btns" >

//         <Button 
//             className='btns' 
//             buttonStyle='btn--primary'
//             buttonSize='btn--large'
                    
//         >
//         Contact Me <i className="far fa-play-circle" />
//         </Button>

//     </div>
//   );
// };

// export default Section;
import React, { useState, useEffect } from "react";
import { Button } from "./Button"
import '../App.css'
import './Section.css';

let random_array = document.getElementById("randomize_array");
let sort_btn = document.getElementById("sort_that");


let sorted = false;

function Section() {

    const min = 5;
    const max = 20;
    const numOfBars = 10;
    let curr_arr = new Array(numOfBars)

    useEffect(() => {
        createRandomArray();
        displayBars(curr_arr);
        }, []);

    function displayBars(arr) {
        
        // for (const element of arr) {
        //     document.write(element + ",")
        // }
        let bars = document.getElementById("bars");
        if (bars) {
            for (const element of arr) {
              let bar = document.createElement("div");
              bar.classList.add("bar");
              bar.style.height = element * 20 + "px";
              bars.appendChild(bar);
            }
        }
    }

    function createRandomArray() {

            for(let i = 0; i <= numOfBars; i++) {
                curr_arr[i] = randomNum()
            }
        }
        
    function randomNum() {
            return Math.floor(Math.random() * (max-min + 1)) + min;
        }

    function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

    async function selectionSort() {

        let arr = curr_arr;    
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

        function reload() {
            window.location.reload();
        }

        

    return ( 
    
    <div className="container">
        <div className="bars" id="bars"> 
            
        </div>
        <div className="section-btns">
            <button onClick={reload}>Randomize It!</button>
            <button onClick={selectionSort}>Sort It!</button>
        </div>
        
    </div>

    )
}

export default Section


// let random_array = document.getElementById("randomize_array");
// let sort_btn = document.getElementById("sort_that");
// let bars = document.getElementById("bars");
// let min = 1;
// let max = 20;
// let numOfBars = 10;
// let curr_arr = new Array(numOfBars)
// let sorted = false;


// function Section() {
//     createRandomArray();
//     displayBars(curr_arr);
// };

// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }

// document.addEventListener("DOMContentLoaded", function() {
//     createRandomArray();
//     displayBars(curr_arr);
// });

// function createRandomArray() {

//     for(let i = 0; i <= numOfBars; i++) {
//         curr_arr[i] = randomNum()
//     }
// }

// function randomNum() {
//     return Math.floor(Math.random() * (max-min + 1)) + min;
// }


// function displayBars(arr) {
//     for (const element of arr) {
//         let bar = document.createElement("div");
//         bar.classList.add("bar");
//         bar.style.height = element * 20 + "px";
//         bars.appendChild(bar)
//     }
// }





// async function selectionSort(arr) {
    
//     let currbars = document.getElementsByClassName("bar");
//     let minind = 0;
//     let i = 0
//     for (i; i < arr.length; i++) {
//         minind = i;
//         let curr = arr[i]
        
//         for (let n = i+1; n < arr.length; n++) {
//             if (arr[n] < curr) {
//                 curr = arr[n];
//                 minind = n;
//             }
//         }
//         arr[minind] = arr[i];
//         arr[i] = curr;
//         currbars[minind].style.height = arr[minind] * 20 + "px";
//         currbars[minind].style.backgroundColor = "red";
//         currbars[i].style.height = arr[i] * 20 + "px";
//         currbars[i].style.backgroundColor = "green";
//         await sleep(500);
        
//     }

//     currbars[i-1].style.backgroundColor = "green";

//     return arr;
// }

// sort_btn.addEventListener("click", function() {
//     if (sorted) {
//         // eslint-disable-next-line no-restricted-globals
//         location.reload();
//     } else {
//         sorted = true;
//     }
//     let sorted_arr = selectionSort(curr_arr);
//     console.log(sorted_arr);
// });

// random_array.addEventListener("click", function() {
//     // eslint-disable-next-line no-restricted-globals
//     location.reload();
// });

// export default Section;

