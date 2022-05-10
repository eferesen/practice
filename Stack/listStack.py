class Stack:
  def __init__(self, maxSize):
    self.list = []
    self.maxSize = maxSize

  def __str__(self):
    # reverse a list
    values = self.list.reverse()
    # stringify list
    values = [str(x) for x in self.list]
    # return list
    return '\n'.join(values)

  # is empty
  def isEmpty(self):
    return self.list == []

  # is Full
  def isFull(self):
    return self.list == self.maxSize

  # push method
  def push(self, value):
    if not self.isFull():
      self.list.append(value)

  # pop
  def pop(self):
    if not self.isEmpty():
      return self.list.pop()
    return

  # peek
  def peek(self):
    if not self.isEmpty():
      return self.list[len(self.list) - 1]

  # delete 
  def delete(self):
    self.list = None


currentStack = Stack()
print(currentStack.isEmpty())
currentStack.push('Ahsan')
currentStack.push('Imam')
print(currentStack.isEmpty())
print(currentStack)
currentStack.pop()
print(currentStack)
print(currentStack.peek())
print(currentStack.delete())
print(currentStack)

