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
//递归解法
 var inorderTraversal = function(root) {
    var result = []
    function bianli(root)
    {
        if(root == undefined)
        {
            return
        }
        bianli(root.left)
        result.push(root.val)
        bianli(root.right)
    }
    bianli(root)
    return result
};