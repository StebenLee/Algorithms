//time complexity O(n) space O(n)

var findTarget = function(root, k) {
    const values = new Set();
    let found = false;
    function inorder(node) {
      if (!node) {
        return;
      }
    inorder(node.left);
    if(values.has(k-node.val)) {
      found = true;
      return;
    }
    values.add(node.val);
    inorder(node.right);
    }  
    inorder(root);
    return found;
};

//219ms

var findTarget = function(root, k) {
    const values = [];
    function inorder(node) {
      if(!node) {
        return;
      }
      inorder(node.left);
      values.push(node.val);
      inorder(node.right);
    }
    inorder(root);
    
    let start = 0, end = values.length - 1;
    while(start < end) {
      let total = values[start] + values[end];
      if(total > k) {
        end--;
      }
      else if(total < k) {
        start++;
      }
      else {
        return true;
      }
    }
    return false;
    
};

//225ms