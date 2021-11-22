// URL:
// Difficulty:
// Brute Force Time Complexity:
// Brute Force Space Complexity:
// Elegant Time Complexity:
// Elegant Space Complexity:


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle_BruteForce = function(head) {
    if(head === null) {
        return false;
    }
    let arr = [head];
    let current = head.next;
    while(current) {
        if(arr.includes(current)) {
            return true;
        } else {
            arr.push(current);
        }
        current = current.next;
    }
    return false;
};


var hasCycle_Elegant = function(head) {
    if(head === null) {
        return false;
    }
    let set = new Set();
    set.add(head);
    let current = head.next;
    while(current) {
        if(set.has(current)) {
            return true;
        } else {
            set.add(current);
        }
        current = current.next;
    }
    return false;
};

let node1 = new ListNode(10);
let node2 = new ListNode(20);
let node3 = new ListNode(30);
let node4 = new ListNode(40);
let node5 = new ListNode(50);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node1;



console.log(hasCycle_Elegant(node1));