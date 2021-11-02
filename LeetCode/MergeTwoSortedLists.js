 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

function mergeTwoLists(l1, l2) {
    let merged = new ListNode();
    let head = merged;
    let x = l1;
    let y = l2;
    while(x && y) {
        if(x.val > y.val) {
            head.next = y;
            y = y.next;
            head = head.next;
        } else {
            head.next = x;
            x = x.next;
            head = head.next;
        }
    }

    if(x) {
        head = x;
    } else {
        head = y;
    }
    return merged.next;
}

let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let merged = mergeTwoLists(l1, l2);

let current = merged;
let arr = [];
while(current) {
    arr.push(current.val);
    current = current.next;
}
console.log(arr);