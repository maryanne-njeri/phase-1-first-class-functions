function receivesAFunction(callback) {
    return callback();
}

const returnsANamedFunction = () => {
    return returnsANamedFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
        //
    }
}

// const returnsAnAnonymousFunction = function() {
//     return returnsAnAnonymousFunction();
// }
