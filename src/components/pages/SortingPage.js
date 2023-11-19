import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { displayBars } from "../Section";
import '../../App.css';
import '../Section.css';



function Section({algorithm}) {

    const min = 5;
    const max = 20;
    const numOfBars = 10;
    const [curr_arr, setCurrArr] = useState([]);
    const [sorted, setSorted] = useState(false);
    

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

    

    

    function reload() {
        window.location.reload();
    }

    const sort = async () => {
        // Call the algorithm-specific function
        if (algorithm) {
            await algorithm(curr_arr);
            setSorted(true);
          }
    };

    useEffect(() => {
        createRandomArray();
        displayBars(curr_arr);
        }, [curr_arr]);    

    return ( 
    
    <div className="container">
        <div className="bars" id="bars"> 
            
        </div>
        <div className="section-btns">
            <button onClick={reload}>Randomize It!</button>
            <button onClick={sort}>Sort It!</button>
        </div>
        
    </div>

    )
}

export default Section
