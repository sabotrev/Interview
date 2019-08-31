/*
URLify

Description:
    Write a method to replace all spaces in a string with '%20'. You may assume that the string has
    sufficient space at the end to hold the additional characters, and that you are given the
    "true" length of the string.
    

Example:
    input: url = 'Mr. John Smith     '
           urlLength = 13
    output: 'Mr.%20John%20Smith'
*/

/*
For loop
*/
function urlify1(url, urlLength) {
    let newStr = '';

    for (let i = 0; i < urlLength; i++) {
        if (url[i] === ' ') {
            newStr += '%20';
        } else {
            newStr += url[i];
        }
    }

    return newStr;
}

console.log(urlify1('Mr John Smith     ', 13));


/*
ES2019 trimStart() & trimEnd() with RegExp object constructor

    Notes: trimLeft() & trimRight() would also work
*/
function urlify2(url, urlLength) {
    return url.trimStart().trimEnd().replace(new RegExp(' ', 'g'), '%20');
}

console.log(urlify2('Mr John Smith     ', 13));
