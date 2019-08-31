/*
Kth to Last

Description:
    Change the background color of the kth to last sibling element.

Notes: Need to traverse the linked list with two points simultaneously. As long as the difference
    between them them is (k-1), when the lead pointer makes it to the end, the following pointer
    will be on the node to highlight.

Additional:
    This can alternatively be done using CSS... i.e. `:nth-last-child(3)`

    If the length of the linked list is known then just index the kth to last element.
        i.e. `document.querySelector('.wrapper').childElementCount` // 10
*/


/*
Buffer

    Notes: This example assumes a single linked list.

    Time: O(n)
    Space: O(1)
*/
const kthToLast1 = (head, k) => {
    let leader = head;
    let follower = head;

    while (leader.nextElementSibling) {

        if (k > 1) {
            k--;
        } else {
            follower = follower.nextElementSibling;
        }

        leader = leader.nextElementSibling;
    }

    if (k === 1) {
        follower.style.background = 'red'
    }
}

const head = document.querySelector('.link');
console.log(kthToLast1(head, 5));