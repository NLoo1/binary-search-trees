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

  insert(val){
    // if(this.root == null) {
    //   this.root = new Node(val)
    //   return this
    // } else{
    const cursor = this.root 
    while(cursor.left !==null || cursor.right !== null){
      switch(val){
        case val > cursor.val:
          cursor = cursor.right
          break;
        case val < cursor.val:
          cursor = cursor.left
          break;
        case val == cursor.val:
          return "Val already in tree"
      }
    }
    
    if(val > cursor.val) cursor.right = new Node(val)
    else if(val < cursor.val) cursor.left = new Node(val)

    return this
// }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(cursor == undefined){
      const cursor = this.root
    }
    // Edge case: val already in tree
    if(cursor.val == val) return "Val already exists in tree"

    const cursor = this.root 
    if(cursor.left == null || cursor.right == null){
      if(val > cursor.val) cursor.right = new Node(val)
      else cursor.left = new Node(val) 

      return this
    }

    if(val > cursor.val) this.insertRecursively(this.right)
    if(val < cursor.val) this.insertRecursively(this.left)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    const cursor = this.root
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
