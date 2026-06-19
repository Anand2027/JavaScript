
console.log("======================= prob 06 ======================")


const piyush = {
name: "Piyush Garg",
sayName: function () {
console. log(this.name);
}
}



const jhon = {
name: "Jhon Doe",
sayName: function () {
console. log(this.name);
}
};

jhon.sayName.call(piyush);  // output: piyush garg bcz call method se humne jhon ke sayname ko piyush ke context me call kiya