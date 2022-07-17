# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# 递归解法
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def bianli(root):
            if not root:
                return
            bianli(root.left)
            bianli(root.right)
            result.append(root.val)
        bianli(root)
        return result