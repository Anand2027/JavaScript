 console.log("======================= prob 05 ======================")


for (var i= 0; i < 10; i++) {
setTimeout(() => console.log(i), 0)
}

// output:

// 10 ten times bcz var global hota hai aur set timeout jo h wo async h 
// let lahane pr to 0 se 9 print hoga