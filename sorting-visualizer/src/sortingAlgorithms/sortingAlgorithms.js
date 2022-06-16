export function getMergeSortAnimation(array){
    const animations = [];
    if (array.length <= 1) return array;
    const auxArr = array.slice();
    
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxilaryArray, animations) {
    if(startIndex === endIndex) return;

    //find the mid point
    const midIndex = Math.floor((startIndex+endIndex) / 2);

    mergeSortHelper(auxilaryArray, startIndex, midIndex, mainArray, animations);
    mergeSortHelper(auxilaryArray, midIndex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, midIndex, endIndex, auxilaryArray, animations);

}

function doMerge(mainArray, startIndex, midIndex, endIndex, auxilaryArray, animations) {
    let k = startIndex;
    let i = startIndex;
    let j = midIndex + 1;

    while(i <= midIndex && j <= endIndex) {
        animations.push([i,j]);
        animations.push([i,j]);

        if (auxilaryArray[i] <= auxilaryArray[j]) {
            animations.push([k, auxilaryArray[i]]);
            mainArray[k++] = auxilaryArray[j++];
        }
    }

    while(i <= midIndex) {
        animations.push([i,i]);
        animations.push([i,i]);

        animations.push([k, auxilaryArray[i]]);

        mainArray[k++] = auxilaryArray[i++];

    }

    while(j <= endIndex) {
        animations.push([i,j]);
        animations.push([i,j]);

        animations.push([k, auxilaryArray[i]]);

        mainArray[k++] = auxilaryArray[j++];
    }
}