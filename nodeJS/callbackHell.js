const first = (callback) => {
    console.log("First");
    callback();
};

const second = (callback) => {
    console.log("Second");
    callback();
};

const third = (callback) => {
    console.log("Third");
    callback();
};

first(function () {
    second(function() {
        third(function() {
            console.log("Callback Hell")
        })
    })
})