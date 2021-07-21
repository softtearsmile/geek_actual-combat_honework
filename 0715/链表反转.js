function reverse1(head) {
  if (!head || !head.next) return head

  let cur = reverse1(head.next)
  head.next.next = head
  head.next = null

  return cur
};

function reverse2(head) {
  let tail = null
  while (head) {
    let tmp = head.next
    head.next = tail
    tail = head
    head = tmp
  }
  return tail
};