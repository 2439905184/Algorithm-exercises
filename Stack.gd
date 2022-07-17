#在gds里面实现栈的数据结构（后进先出）
class_name Stack
var data 
func _init():
	self.data = []
	
# 返回栈中元素的数量
func _len():
	return len(self.data) == 0
	
# 如果栈为空，则返回True，否则返回False
func is_empty():
	if len(self.data) == 0:
		return true
	else:
		return false
		
# 将元素e添加到S的栈顶
func push(element):
	self.data.append(element)
	pass
	
# 从栈S中移除并返回栈顶的元素，如果此时栈是空的，那么这个操作将会报错
func pop():
	if self.is_empty():
		push_error("Stack is empty")
	else:
		return self.data.pop_back()
# 不移除栈顶元素，但返回栈顶元素，如果此时栈是空的，那么这个操作将会报错
func top():
	if self.is_empty():
		push_error("Stack is empty")
	else:
		return self.data[-1]
