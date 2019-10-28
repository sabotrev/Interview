/*
H-Index

Description:
    The h-index is a metric that attempts to measure the productivity and citation impact of the
    publication of a scholar. The definition of the h-index is if a scholar has at least h of
    their papers cited h times. Given a list of publications of the number of citations a scholar
    has, find their h-index.

Example:
    input: [3, 5, 0, 1, 3]
    output: 3
    explanation: There are 3 publications with 3 or more citations, hence the h-index is 3.
*/


const hIndex = (publications) => {
    publications = publications.sort().reverse();
    for (let i = 0; i < publications.length; i++) {
        const temp = publications.filter(pub => {
            return pub >= publications[i];
        });

        if (temp.length >= publications[i]) {
            return publications[i];
        }
    }

    return 0;
}

console.log(hIndex([3, 5, 0, 1, 3])); // 3
console.log(hIndex([10, 8, 5, 4, 3])); // 4
console.log(hIndex([25, 8, 5, 3, 3])); // 3