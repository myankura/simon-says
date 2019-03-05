//There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

console.log("simon.js")


const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLoc = 0;

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    // console.log(currentLocation)
    if (currentLocation[0] > 2) {
        console.log("This location is invalid")
        invalidLoc++;
    }
    
}
console.log(`There were ${invalidLoc} invalid locations`)

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/