/*
Add Two Numbers

    Description & Examples: https://leetcode.com/problems/add-two-numbers/
*/



function ListNode(val) {
    this.val = val;
    this.next = null;
}

const first = [];
const second = [];

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    first.unshift(l1.val);
    second.unshift(l2.val);

    if (l1.next === null) {
        const firstSum = parseInt(first.join(''));
        const secondSum = parseInt(second.join(''));
        return firstSum + secondSum;
    } else {
        return addTwoNumbers(l1.next, l2.next);
    }
};



const linkedList1 = new ListNode(2);
linkedList1.next = new ListNode(4);
linkedList1.next.next = new ListNode(3);
const linkedList2 = new ListNode(5);
linkedList2.next = new ListNode(6);
linkedList2.next.next = new ListNode(4);
console.log(addTwoNumbers(linkedList1, linkedList2));