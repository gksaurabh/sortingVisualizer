import React from "react";
import './SortingVisualizer.css'

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

        for (let i = 0; i < 100; i++){
            array.push(randomIntFromInteraval(5, 500));
        }
        this.setState({array});
    }

    mergeSort() {

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
