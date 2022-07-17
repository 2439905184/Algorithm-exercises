/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归解法
 var postorderTraversal = function(root) {
    var result = []
    function bianli(root)
    {
        if(root == null)
        {
            return
        }
        bianli(root.left)
        bianli(root.right)
        result.push(root.val)
    }
    bianli(root)
    return result
};