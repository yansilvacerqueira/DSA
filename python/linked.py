class Node:
  def _init_(self, value):
    self.value = value
    self.next = value
    self.prev = value


class DoublyLinked:
  def _init_(self, value):
    self.head = None
    self.tail = None

  def add_to_front(self, value):
    newNode = Node(value)
    newNode.next = self.head

    if self.head:
      self.head.prev = newNode
    else:
      self.tail = newNode

    self.head = newNode

  def add_to_end(self, value):
    newNode = Node(value)
    newNode.prev = self.tail

    if self.tail:
      self.tail.next = newNode
    else:
      self.head = newNode

    self.tail = newNode

  def remove_to_front(self):
    if not self.head:
      return None

    removedValue = self.head.value
    self.head = self.head.next

    if self.head:
      self.head.prev = None
    else:
      self.tail = None

    return removedValue

  def remove_to_end(self):
    if not self.tail:
      return None

    removedValue = self.tail.value
    self.tail = self.tail.prev

    if self.prev:
      self.prev.next = None
    else:
      self.head = None

    return removedValue