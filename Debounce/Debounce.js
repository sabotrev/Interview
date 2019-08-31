/*
Debounce

    Description: Implement a debounce function on an input field

    Notes: A debounce function limits the rate at which a function can be called. Common examples
        include resize listeners or key listeners.
*/

const debounce = (func, timer) => {
    let timerId = null;

    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            func(...args);
        }, timer);
    }
}

const input = document.querySelector('input');
input.addEventListener('keyup', debounce((e) => {
    console.log(input.value);
    // Call some API
}, 1000));