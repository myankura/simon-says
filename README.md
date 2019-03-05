Original code: 

//There are two separate scoping issues in this code. Remember, for and if are their own block scopes and if something is declared with let or const then that variable only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

//initialize a new variable to keep count of how many invalid locations there are.
//instead of k use invalidLoc
let invalidLoc = 0;

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    //This loop is checking to see if the first item in each array is greater than 2.
    if (currentLocation[0] > 2) {

        //in order to count the invalidLoc needs to increment in order to keep count.
        invalidLoc++;

        //This line of code is unnecessary and can be removed.
        const invalidLocation = true
    }

    //Once console.log("This location is invalid") has been moved into the if (currentLocation[0] > 2) loop this loop can be removed.
    if (invalidLocation) {

        //Move this console.log into if (currentLocation[0] > 2) loop 
        console.log("This location is invalid")
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${k} invalid locations`)