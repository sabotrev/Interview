class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  const head = l1.val < l2.val ? l1 : l2;

  if (l1.val < l2.val) {
    head.next = mergeTwoLists(l1.next, l2);
  } else {
    head.next = mergeTwoLists(l1, l2.next);
  }

  return head;
};

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2));
