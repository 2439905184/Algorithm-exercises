//此代码懂了一半，需要画图并作视频分析每步代码的逻辑 理一遍
var levelOrder = function(root) {
    if(root == null) {
      return [];
    }
    const ans = []; // 二维数组，eg: [[3], [9,20], [15,7] ...]
    const queue = []; // 存放节点，eg: [TreeNode, TreeNode, TreeNode ...]
    queue.push(root); // [TreeNode]
  //这里的queue.length没懂
    while(queue.length) {
      const temp = [];
      const size = queue.length; // 需先保存queue的元素个数（下面代码会修改queue）
      for(let i = 0; i < size; i++) {
        const node = queue.shift(); // 取数组第一个元素; node -> TreeNode
        temp.push(node.val);
        if(node.left != null) {
          queue.push(node.left);
        }
        if(node.right != null) {
          queue.push(node.right);
        }
      }
      ans.push(temp);
    }
    return ans;
  };