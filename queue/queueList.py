class Queue:
    def __init__(self):
        self.items = []

    def __str__(self):
        values = [str(x) for x in self.items]
        return ' '.join(values)

    def isEmpty(self):
        return len(self.items) == 0

    def enqueue(self, value):
        # append methond worst case time complexity O(n^2)
        self.items.append(value)
        return

    def dequeue(self):
        if not self.isEmpty():
            # o(n) time complexity
            self.items.pop(0)
            return
        return

    def peek(self):
        if not self.isEmpty():
            return self.items[0]
        return

    def delete(self):
        return self.items == None


customQueue = Queue()
print(customQueue.isEmpty())
customQueue.enqueue(5)
customQueue.enqueue(10)
customQueue.enqueue(20)
print(customQueue.__str__())
customQueue.dequeue()
print(customQueue.__str__())
print(customQueue.peek())
print(customQueue.isEmpty())
customQueue.delete()
print(customQueue)
