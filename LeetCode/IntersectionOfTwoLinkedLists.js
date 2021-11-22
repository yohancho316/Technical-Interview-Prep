/*
URL: https://leetcode.com/problems/intersection-of-two-linked-lists/
Difficulty: Easy
Eloquent Time Complexity: O(N)
Eloquent Space Complexity: O(1)
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function(headA, headB) {

    let hash_set = new Set();

    let current = headB;
    while(current) {
        hash_set.add(current);
        current = current.next;
    }

    current = headA;
    while(current) {
        if(hash_set.has(current)) {
            return current;
        }
        current = current.next;
    }
    return false;
};

let a1 = new ListNode(4);
let a2 = new ListNode(1);
let a3 = new ListNode(8);
let a4 = new ListNode(4);
let a5 = new ListNode(5);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

let b1 = new ListNode(5);
let b2 = new ListNode(6);
let b3 = new ListNode(1);
let b4 = new ListNode(8);
let b5 = new ListNode(4);
let b6 = new ListNode(5);


b1.next = b2;
b2.next = b3;
b3.next = b4;
b4.next = b5;
b5.next = b6;

let ptr = getIntersectionNode(a1, b1);
console.log(ptr);
while(ptr) {
    console.log(ptr.val);
    ptr = ptr.next;
}