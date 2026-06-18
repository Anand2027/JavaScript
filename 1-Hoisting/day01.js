myFun();

var myFun = function () {
    console.log("First");
};

myFun();

function myFun() {
    console.log("Second");
}

myFun();

// Output:

// Second
// First
// First


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