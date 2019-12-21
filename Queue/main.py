# Build-in Queue
import queue;

line_for_pizza = queue.Queue()
line_for_pizza.put('Eric')
line_for_pizza.put('Anin')
line_for_pizza.put('Audrey')

print(line_for_pizza.get())
print(line_for_pizza.get())
print(line_for_pizza.get())