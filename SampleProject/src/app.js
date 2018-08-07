function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

var module = module;
if (module !== undefined) {
    module.exports = add;
}