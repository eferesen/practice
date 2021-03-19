# Node has a value and pointer to next value
class Node:
  def __init__(self, value = None):
    self.value = value
    self.next = next

class LinkedList:
  def __init__(self):
    self.head = None
  
  def __iter__(self):
    currNode = self.head
    while currNode:
      yield currNode
      currNode = currNode.next

class Stack:
  def __init__(self):
    self.LinkedList = LinkedList()

  def __str__(self):
    values = [str(x.value) for x in self.LinkedList]
    return '\n'.join(values)

  def isEmpty(self):
    return self.LinkedList.head == None

  def push(self, value):
    # create a node and insert value
    node = Node(value)
    # change the next link
    node.next = self.LinkedList.head
    self.LinkedList.head = node

  def pop(self):
    if self.isEmpty():
      return
    else:
      print('crap')
      nodeValue = self.LinkedList.head.value
      self.LinkedList.head = self.LinkedList.head.next
      return nodeValue

  def peek(self):
    if self.isEmpty():
      return
    else:
      return self.LinkedList.head.value
  
  def delete(self):
      self.LinkedList.head = None
  
stack = Stack()

stack.push(1)
stack.push(2)
stack.push(3)
print(stack)
print('-----')
stack.pop()
print(stack)
print(stack.peek())
stack.delete()
print(stack)
