const mainFunc = (nextCallBack) => {
    console.log(nextCallBack)
    nextCallBack(second);
}

const first = (nextCallBack) => {
    console.log(nextCallBack)
    nextCallBack(third);
}

const second = (nextCallBack) => {
    console.log(nextCallBack)
}

const third = () => {
    console.log("CallBack Chaining")
}

mainFunc(first);