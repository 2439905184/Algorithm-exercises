#https://leetcode.cn/leetbook/read/data-structure-binary-tree/xeywh5/
class 节点(object):
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None

class 树(object):
    未满节点 = []  # 依次存放左右孩子未满的节点

    def __init__(self):
        self.root = None

    def add(self, number):
        node = 节点(number)  # 将输入的数字节点化，使其具有左右孩子的属性
        if self.root == None:
            self.root = node
            树.未满节点.append(self.root)
        else:
            while True:
                point = 树.未满节点[0] # 依次对左右孩子未满的节点分配孩子
                if point.left ==None:
                    point.left = node
                    树.未满节点.append(point.left)  # 该节点后面作为父节点也是未满的，也要加入到列表中。
                    return
                elif point.right ==None:
                    point.right = node
                    树.未满节点.append(point.right)  # 与左孩子同理
                    树.未满节点.pop(0)  # 表示该节点已拥有左右孩子，从未满列表中去除
                    return
tree = 树()
测试用例1 = [1,2,3,4,None,6]
for i in 测试用例1:
    tree.add(i)
    print("节点添加成功")

def 解决方案(root):
    result = []
    def 前序遍历(root):
        if not root:
            return
        result.append(root.value)
        前序遍历(root.left)
        前序遍历(root.right)

    前序遍历(root)
    return result

解决方案(tree)
        