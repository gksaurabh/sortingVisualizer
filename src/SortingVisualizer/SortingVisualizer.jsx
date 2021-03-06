import React from "react";
import './SortingVisualizer.css'
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js'

/**
 * e63946 - red
 * f1faee - off white
 * a8dadc - light blue
 * 457b9d - medium blue
 * 1d3557 - dark blue
 */

const ANIMATION_SPEED = 3;
const SIZE = 180;
const PRIMARY_COLOUR = '#a8dadc';
const SECONDARY_COLOUR = '#e63946';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    /**
     * reset array to an empty array/create an empty array
     * then itterate over 100 and add a random integer value from 5 to 1000
     * then set state to the new array
     */
    resetArray() {
        const array = [];

        for (let i = 0; i < SIZE; i++){
            array.push(randomIntFromInteraval(5, 500));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = sortingAlgorithms.getMergeSortAnimation(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColourChange = i % 3 !== 2;

            if (isColourChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED);
            } else {
                setTimeout(() =>{
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;

                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED);
            }
        }
    }

    quickSort() {

    }

    heapSort() {

    }

    bubbleSort() {

    }

    /**
     * create a div for the array with the key as the index using map
     */
    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx} 
                        style={{
                            height: `${value}px`,
                            backgroundColor: PRIMARY_COLOUR
                        }}> 
                    
                    </div>
                ))}
                <div className="button-container">
                    <button className='button' onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className='button' onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className='button' onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className='button' onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className='button' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
                
            </div>
        )
    };
}

    /**
     * Return a random int from a given min and max
     */
function randomIntFromInteraval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
*   pass in a sorted array into arrOne and alogrithm applied sorted array to 
*   check if our sorting algorithm works. 
*/
// function arraysAreEqual(arrOne, arrTwo) {

//     if(arrOne.length !== arrTwo.length) return false;

//     for (let i = 0; i < arrOne.length; i++){
//         if(arrOne[i] !== arrTwo[i]) return false;
//     }
//     return true;
// }