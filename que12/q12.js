// Write a node program having at least 3 dependent tasks and call using chained promises.


// Task 1: Student Registration
function regStudent() {
    return new Promise((resolve) => {
        console.log("Task 1: Student Registered");
        resolve("...Registration Completed...");
    });
}

// Task 2: Fee Payment
function payFees(message) {
    return new Promise((resolve) => {
        console.log("Task 2: Fees Paid");
        resolve("....Fee Payment Completed....");
    });
}

// Task 3: Generate ID Card
function genReceipt(message) {
    return new Promise((resolve) => {
        console.log("Task 3: Fee receipt generate");
        resolve("....Fees Status updated....");
    });
}

// Promise Chaining
regStudent()
    .then((result) => {
        console.log(result);
        return payFees(result);
    })
    .then((result) => {
        console.log(result);
        return genReceipt(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log("Error:", err);
    });