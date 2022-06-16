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

const ANIMATION_SPEED = 1;
const SIZE = 100;
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
        const jsSortedArray = this.state.array
            .slice()
            .sort((a,b) => a - b);
        
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

        console.log(arraysAreEqual(jsSortedArray, sortedArray));
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
                        style={{height: `${value}px`}}> 
                    
                    </div>
                ))}
                <div className="button-container">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
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
function arraysAreEqual(arrOne, arrTwo) {

    if(arrOne.length != arrTwo.length) return false;

    for (let i = 0; i < arrOne.length; i++){
        if(arrOne[i] !== arrTwo[i]) return false;
    }
    return true;
}