class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let cursor = this.root;

    if (cursor === null) {
        this.root = new Node(val);
        return this;
    } else {

      // Traverse through tree, iteratively
        while (true) {

          // Go right if val is greater than cursor
            if (val > cursor.val) {
              // If you can't go right, make new Node there
                if (cursor.right === null) {
                    cursor.right = new Node(val);
                    break;
                }
                cursor = cursor.right;
            }
            // Go left if val is less than cursor 
            else if (val < cursor.val) {
              // Set as new node if there is no left node
                if (cursor.left === null) {
                    cursor.left = new Node(val);
                    break;
                }

                // Otherwise, traverse left
                cursor = cursor.left;
            } else {
                return "Val already in tree";
            }
        }
    }

    // Return tree
    return this;
}


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    
    // Reference for tree
    const tree = this;

    // Edge case: if no root is there, set to root
    if(!this.root){
      this.root = new Node(val)
      return this
    }

    else{

      /**
       * Recursively 
       * @param {Node} n A Node in the tree. 
       * @returns 
       */
      function insert(n){
        if(val > n.val){
          if(!n.right){
            n.right = new Node(val)
            return tree
          }
          return insert(n.right)
        } else if(val < n.val){
          if(!n.left){
            n.left = new Node(val)
            return tree
          }
          return insert(n.left)
        }
        return tree
      }
      return insert(tree.root)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let cursor = this.root
    while(cursor){
      if(val == cursor.val) return cursor
      else if(val > cursor.val) cursor = cursor.right
      else if(val < cursor.val) cursor = cursor.left
    }

    return
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const cursor = this.root

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const arr = new Array(Node)

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
