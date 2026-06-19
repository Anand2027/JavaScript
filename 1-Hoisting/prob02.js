// ------------------------------ prob 02 ------------------------

function x() {
   console.log("A");
}

x();

x = function() {
   console.log("B");
}

x();

x();

// Output:

// A
// B
// B